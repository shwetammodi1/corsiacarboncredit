// Pulls blog posts and knowledge base articles from Sanity at build time.
//
// Configure with environment variables (Cloudflare Pages → Settings → Variables and Secrets):
//   SANITY_PROJECT_ID   required to switch Sanity on, e.g. gai5n7ff
//   SANITY_DATASET      default "production"
//   SANITY_TOKEN        only if the dataset is private (a Viewer token)
//   SANITY_BLOG_TYPE    document type for blog posts, default "blog"
//   SANITY_KB_TYPE      document type for knowledge base articles, default "kbArticle"
//
// Without SANITY_PROJECT_ID the site builds from the markdown files only.
// If Sanity is configured but cannot be reached, the build fails on purpose, so Cloudflare
// keeps serving the last good version instead of publishing a site with articles missing.

const cfg = {
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || "production",
  token: process.env.SANITY_TOKEN || "",
  apiVersion: process.env.SANITY_API_VERSION || "2024-01-01",
  blogType: process.env.SANITY_BLOG_TYPE || "blog",
  kbType: process.env.SANITY_KB_TYPE || "kbArticle",
};

export const sanityEnabled = Boolean(cfg.projectId);

async function query(groq, params = {}) {
  const host = cfg.token ? "api.sanity.io" : "apicdn.sanity.io";
  const url = new URL(`https://${cfg.projectId}.${host}/v${cfg.apiVersion}/data/query/${cfg.dataset}`);
  url.searchParams.set("query", groq);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(`$${k}`, JSON.stringify(v));
  const res = await fetch(url, { headers: cfg.token ? { Authorization: `Bearer ${cfg.token}` } : {}, signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`Sanity query failed: HTTP ${res.status} ${await res.text().catch(() => "")}`.slice(0, 300));
  return (await res.json()).result;
}

// ---- images -----------------------------------------------------------------------------
// asset._ref looks like "image-<hash>-<width>x<height>-<ext>"
export function imageUrl(image, { w = 1200, h, fm } = {}) {
  const ref = image?.asset?._ref || image?.asset?._id;
  const m = ref && ref.match(/^image-([a-f0-9]+)-(\d+x\d+)-(\w+)$/);
  if (!m) return "";
  const u = new URL(`https://cdn.sanity.io/images/${cfg.projectId}/${cfg.dataset}/${m[1]}-${m[2]}.${m[3]}`);
  u.searchParams.set("w", w);
  if (h) { u.searchParams.set("h", h); u.searchParams.set("fit", "crop"); }
  if (fm) u.searchParams.set("fm", fm); else u.searchParams.set("auto", "format");
  return u.toString();
}

// ---- Portable Text → markdown ------------------------------------------------------------
// Converting to markdown lets Sanity content go through the same renderer as the markdown
// articles (headings with anchors, table of contents, tables, accordions).
const escapeInline = (s) => s.replace(/([\\`*_[\]<>])/g, "\\$1");
const escapeLineStart = (s) => s.replace(/^(\s*)([#>+-]|\d+\.)(\s)/, "$1\\$2$3");

function spans(block) {
  const defs = Object.fromEntries((block.markDefs || []).map((d) => [d._key, d]));
  return (block.children || []).map((c) => {
    if (c._type !== "span") return "";
    let t = escapeInline(c.text || "");
    if (!t.trim()) return t;
    const lead = t.match(/^\s*/)[0], trail = t.match(/\s*$/)[0];
    t = t.trim();
    for (const mark of c.marks || []) {
      if (mark === "strong") t = `**${t}**`;
      else if (mark === "em") t = `*${t}*`;
      else if (mark === "code") t = "`" + t.replace(/\\`/g, "`") + "`";
      else if (mark === "strike-through") t = `~~${t}~~`;
      else if (defs[mark]?._type === "link" && defs[mark].href) t = `[${t}](${defs[mark].href})`;
    }
    return lead + t + trail;
  }).join("");
}

function table(node) {
  const rows = (node.rows || []).map((r) => (r.cells || []).map((c) => escapeInline(String(c ?? "")).replace(/\|/g, "\\|").replace(/\n/g, " ")));
  if (!rows.length) return "";
  const width = Math.max(...rows.map((r) => r.length));
  const pad = (r) => [...r, ...Array(width - r.length).fill("")];
  return [pad(rows[0]), Array(width).fill("---"), ...rows.slice(1).map(pad)].map((r) => `| ${r.join(" | ")} |`).join("\n");
}

export function portableTextToMarkdown(blocks = []) {
  const out = [];
  let listCounters = [];
  for (const b of blocks) {
    if (b._type === "block") {
      const text = spans(b);
      if (b.listItem) {
        const lvl = Math.max(1, b.level || 1);
        listCounters = listCounters.slice(0, lvl);
        listCounters[lvl - 1] = (listCounters[lvl - 1] || 0) + 1;
        const bullet = b.listItem === "number" ? `${listCounters[lvl - 1]}.` : "-";
        out.push({ list: true, md: `${"   ".repeat(lvl - 1)}${bullet} ${text}` });
        continue;
      }
      listCounters = [];
      const style = b.style || "normal";
      if (!text.trim()) continue;
      if (/^h[1-6]$/.test(style)) {
        const lvl = Math.max(2, +style[1]); // the page title is the only h1
        out.push({ md: `${"#".repeat(lvl)} ${text}` });
      } else if (style === "blockquote") out.push({ md: `> ${text}` });
      else out.push({ md: escapeLineStart(text) });
      continue;
    }
    listCounters = [];
    if (b._type === "image") {
      const src = imageUrl(b, { w: 1400 });
      if (src) out.push({ md: `![${escapeInline(b.alt || b.caption || "")}](${src})` });
    } else if (b._type === "table") {
      out.push({ md: table(b) });
    } else if (b._type === "code") {
      out.push({ md: "```" + (b.language || "") + "\n" + (b.code || "") + "\n```" });
    } else if (b._type === "accordion") {
      out.push({ md: `::: accordion ${(b.title || "").replace(/\n/g, " ")}\n${portableTextToMarkdown(b.body || [])}\n:::` });
    } else if (b._type === "callout") {
      out.push({ md: `> ${spans({ children: [{ _type: "span", text: b.text || "" }] })}` });
    }
  }
  // Consecutive list items stay together; everything else is separated by a blank line.
  return out.reduce((acc, item, i) => acc + (i === 0 ? "" : item.list && out[i - 1].list ? "\n" : "\n\n") + item.md, "");
}

// ---- documents ---------------------------------------------------------------------------
const FIELDS = `
  _id, _createdAt, _updatedAt, title, "slug": slug.current, excerpt, publishedAt,
  topic, category, section, order, tags, metaTitle, metaDescription, coverImage, body, content
`;

const firstParagraph = (md) => (md.split(/\n\n/).find((p) => p && !/^[#>|!:-]/.test(p)) || "").replace(/[*_`\\]/g, "").slice(0, 220);

function toArticle(d, kind) {
  const body = d.content?.trim() ? d.content : portableTextToMarkdown(d.body || []);
  const cover = imageUrl(d.coverImage, { w: 1200 });
  return {
    slug: d.slug,
    title: d.title,
    excerpt: d.excerpt || firstParagraph(body),
    metaTitle: d.metaTitle || undefined,
    metaDescription: d.metaDescription || undefined,
    body,
    image: cover || undefined,
    ogImage: d.coverImage ? imageUrl(d.coverImage, { w: 1200, h: 630, fm: "jpg" }) : undefined,
    tags: d.tags || [],
    date: kind === "blog" ? (d.publishedAt || d._createdAt).slice(0, 10) : undefined,
    topic: kind === "blog" ? d.topic || d.category : undefined,
    section: kind === "kb" ? d.section : undefined,
    order: kind === "kb" ? (typeof d.order === "number" ? d.order : 999) : undefined,
    updated: (d._updatedAt || d._createdAt).slice(0, 10),
    source: "sanity",
    sanityId: d._id,
  };
}

export async function loadSanityContent() {
  if (!sanityEnabled) return { blog: [], kb: [] };
  const live = '!(_id in path("drafts.**")) && defined(slug.current) && defined(title)';
  const [blog, kb] = await Promise.all([
    query(`*[_type == $t && ${live} && (!defined(publishedAt) || publishedAt <= now())] | order(publishedAt desc) { ${FIELDS} }`, { t: cfg.blogType }),
    query(`*[_type == $t && ${live}] | order(order asc) { ${FIELDS} }`, { t: cfg.kbType }),
  ]);
  return { blog: (blog || []).map((d) => toArticle(d, "blog")), kb: (kb || []).map((d) => toArticle(d, "kb")) };
}

export const sanityConfig = cfg;
