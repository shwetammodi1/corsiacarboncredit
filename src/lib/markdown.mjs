import { Marked } from "marked";

export function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}

const plain = (s) => s.replace(/\*\*|__|`/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

// Renders article markdown. Supports the `::: accordion Title ... :::` blocks used by the source content.
export function renderMarkdown(src) {
  const toc = [];
  const used = new Map();
  const marked = new Marked({ gfm: true });
  marked.use({
    renderer: {
      heading({ tokens, depth, text }) {
        const inner = this.parser.parseInline(tokens);
        let id = slugify(plain(text));
        const n = used.get(id) || 0;
        used.set(id, n + 1);
        if (n) id = `${id}-${n}`;
        if (depth === 2 || depth === 3) toc.push({ id, depth, text: plain(text) });
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const inner = this.parser.parseInline(tokens);
        const ext = /^https?:\/\//.test(href) && !/^https?:\/\/(www\.)?corsiacarboncredit\.in(\/|$)/.test(href);
        return `<a href="${href}"${title ? ` title="${title}"` : ""}${ext ? ' target="_blank" rel="noopener"' : ""}>${inner}</a>`;
      },
      image({ href, text }) {
        // Sanity image URLs carry the original size (…-1600x900.jpg); use it so the browser reserves the right space.
        const dims = href.match(/-(\d+)x(\d+)\.\w+(?:\?|$)/);
        const [w, h] = dims ? [dims[1], dims[2]] : [1200, 630];
        const attr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
        return `<img src="${attr(href)}" alt="${attr(text)}" loading="lazy" decoding="async" width="${w}" height="${h}">`;
      },
    },
  });

  const blocks = [];
  const pre = src.replace(/^::: ?accordion (.+)\n([\s\S]*?)\n:::[ \t]*$/gm, (_, title, body) => {
    blocks.push({ title, body });
    return `\n\n@@ACC${blocks.length - 1}@@\n\n`;
  });

  let html = marked.parse(pre);
  html = html.replace(/<p>@@ACC(\d+)@@<\/p>/g, (_, i) => {
    const b = blocks[+i];
    const inner = new Marked({ gfm: true }).use({ renderer: {
      link({ href, tokens }) {
        const ext = /^https?:\/\//.test(href);
        return `<a href="${href}"${ext ? ' target="_blank" rel="noopener"' : ""}>${this.parser.parseInline(tokens)}</a>`;
      },
    } }).parse(b.body);
    const title = new Marked().parseInline(b.title);
    return `<details><summary>${title}</summary><div>${inner}</div></details>`;
  });
  html = html.replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, "</table></div>");

  const words = plain(src).split(/\s+/).length;
  return { html, toc, minutes: Math.max(1, Math.round(words / 230)) };
}

export function inline(md) {
  return new Marked().use({
    renderer: {
      link({ href, tokens }) {
        const ext = /^https?:\/\//.test(href);
        return `<a href="${href}"${ext ? ' target="_blank" rel="noopener"' : ""}>${this.parser.parseInline(tokens)}</a>`;
      },
    },
  }).parseInline(md);
}

export function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i < 0) continue;
    data[line.slice(0, i).trim()] = JSON.parse(line.slice(i + 1).trim());
  }
  return { data, body: raw.slice(m[0].length) };
}
