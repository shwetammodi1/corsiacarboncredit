// Static site generator for corsiacarboncredit.in. Run: npm run build  → ./dist
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site, categories, sdgs } from "./src/data/site.js";
import { page, esc, fmt, arrow, ctaBand, waLink, waIcon, searchIcon, mark, ORG_ID } from "./src/lib/layout.mjs";
import { execFileSync } from "node:child_process";
import { renderMarkdown, inline, parseFrontmatter } from "./src/lib/markdown.mjs";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(ROOT, "src");
const OUT = path.join(ROOT, "dist");
const readJSON = (f) => JSON.parse(fs.readFileSync(path.join(SRC, f), "utf8"));

const projects = readJSON("data/projects.json");
const service = readJSON("data/corsia-service.json");
const AVIATION_IMG = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=70";
const u = (id, w = 2000) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`;

// Responsive Unsplash images: same photo at several widths.
const atW = (url, w) => url.replace(/([?&])w=\d+/, `$1w=${w}`);
const srcset = (url, widths) => widths.map((w) => `${atW(url, w)} ${w}w`).join(", ");
const PHOTOS = {
  impact: u("1473448912268-2022ce9509d8"),
  marketplace: u("1542273917363-3b1817f69a2d", 1400),
  services: u("1436491865332-7a61a109cc05", 1400),
  calculator: u("1436491865332-7a61a109cc05", 1400),
  kb: u("1501854140801-50d01698950b", 1400),
  insights: u("1469474968028-56623f02e42e", 1400),
  about: u("1470071459604-3b5ec3a7fe05", 1400),
  contact: u("1426604966848-d7adac402bff", 1400),
};
const asOf =new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" });

function loadDir(dir) {
  return fs.readdirSync(path.join(SRC, dir)).filter((f) => f.endsWith(".md")).map((f) => {
    const { data, body } = parseFrontmatter(fs.readFileSync(path.join(SRC, dir, f), "utf8").replace(/\r\n/g, "\n"));
    return { slug: f.replace(/\.md$/, ""), ...data, body, file: `src/${dir}/${f}` };
  });
}
const kb = loadDir("content/knowledge-base").sort((a, b) => a.order - b.order);
const insights = loadDir("content/insights").sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
// First and last commit date of every content file, from one git call. Falls back to the build date.
const today = new Date().toISOString().slice(0, 10);
const gitDates = (() => {
  const map = new Map();
  try {
    const out = execFileSync("git", ["log", "--format=@%cs", "--name-only", "--", "src/content"], { cwd: ROOT, encoding: "utf8", maxBuffer: 32 * 1024 * 1024 });
    let d = null;
    for (const line of out.split(/\r?\n/)) {
      if (line.startsWith("@")) { d = line.slice(1); continue; }
      if (!line.trim() || !d) continue;
      const e = map.get(line) || { first: d, last: d };
      if (d > e.last) e.last = d;
      if (d < e.first) e.first = d;
      map.set(line, e);
    }
  } catch { /* not a git checkout */ }
  return map;
})();
const datesOf = (a) => gitDates.get(a.file) || { first: today, last: today };
const absUrl = (u) => (u.startsWith("http") ? u : site.url + u);

// Article / TechArticle structured data for knowledge base and insights pages.
function articleLd(a, path, type, section) {
  const g = datesOf(a);
  const published = a.date || g.first;
  const modified = [a.date, g.last].filter(Boolean).sort().pop();
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: (a.metaTitle || a.title).slice(0, 110),
    description: a.metaDescription || a.excerpt,
    image: [absUrl(a.image)],
    datePublished: published,
    dateModified: modified,
    author: { "@type": "Organization", "@id": ORG_ID, name: site.name, url: site.url + "/" },
    publisher: { "@type": "Organization", "@id": ORG_ID, name: site.name, logo: { "@type": "ImageObject", url: site.url + "/brand/logo-512.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": site.url + path },
    url: site.url + path,
    inLanguage: "en-IN",
    articleSection: section,
    ...(a.tags?.length ? { keywords: a.tags.join(", ") } : {}),
  };
}

// FAQPage only for pages whose content is a list of questions and answers.
const FAQ_PAGES = new Set(["corsia-faq"]);
function faqLd(md) {
  const qa = [...md.matchAll(/^::: ?accordion (.+\?)\s*\n([\s\S]*?)\n:::[ \t]*$/gm)].map((m) => ({
    "@type": "Question",
    name: m[1].replace(/\*\*/g, "").trim(),
    acceptedAnswer: { "@type": "Answer", text: m[2].replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/[*_`>#|]/g, "").replace(/\s+/g, " ").trim() },
  }));
  return qa.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: qa } : null;
}

const kbSections = [...new Set(kb.map((a) => a.section))];
const topics = [...new Set(insights.map((a) => a.topic))];

const pages = [];
function emit(urlPath, html) {
  const file = urlPath.endsWith("/") ? path.join(OUT, urlPath, "index.html") : path.join(OUT, urlPath);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  if (urlPath.endsWith("/")) pages.push(urlPath);
}
const dateLong = (d) => new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

// ---------------------------------------------------------------- components
// SDG tiles keep the official UN colours; text switches to dark ink where white would fall below 4.5:1.
const luminance = (hex) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const sdgStyle = (n) => {
  const bg = sdgs[n][1];
  const onWhite = 1.05 / (luminance(bg) + 0.05);
  return `background:${bg};color:${onWhite >= 4.5 ? "#fff" : "#10261f"}`;
};
const sdgTiles = (list) => `<div class="sdgs" role="list" aria-label="Sustainable Development Goals">${list
  .map((n) => `<span class="sdg" role="listitem" style="${sdgStyle(n)}" title="SDG ${n}: ${esc(sdgs[n][0])}" aria-label="SDG ${n}: ${esc(sdgs[n][0])}">${n}</span>`).join("")}</div>`;

const projectCard = (p, i = 0) => `<a class="pcard" href="/marketplace/${p.slug}/" data-i="${i}" data-cat="${esc(p.category)}" data-reg="${esc(p.registry)}" data-status="${p.status}" data-price="${p.price}" data-vol="${p.volume}" data-vintage="${p.vintage}" data-name="${esc(p.name)}" data-search="${esc([p.name, p.developer, p.country, p.registry, p.category, p.methodology, p.projectType].join(" ").toLowerCase())}">
  <div class="pcard__img">
    <img src="${atW(p.image, 700)}" srcset="${srcset(p.image, [400, 700])}" sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 400px" alt="" loading="lazy" decoding="async">
    <span class="pcard__cat">${esc(p.category)}</span>
    <span class="pcard__status pill pill--${p.status}">${p.status}</span>
  </div>
  <div class="pcard__body">
    <div class="pcard__meta"><span>${esc(p.country)}</span><span>${esc(p.registry)}</span></div>
    <h3>${esc(p.name)}</h3>
    <p class="pcard__dev">${esc(p.developer)} · ${esc(p.projectType)}</p>
    ${sdgTiles(p.sdgs)}
    <div class="pcard__foot">
      <div><span class="kv__k">Volume</span><span class="kv__v">${fmt(p.volume)}</span></div>
      <div><span class="kv__k">Vintage</span><span class="kv__v">${p.vintage}</span></div>
      <div class="price"><b>$${p.price.toFixed(2)}</b><span>per tCO₂e</span></div>
    </div>
  </div>
</a>`;

const articleCard = (a, base) => `<a class="acard" href="/${base}/${a.slug}/" data-topic="${esc(a.topic || a.section)}">
  <div class="acard__img"><img src="${a.image}" alt="" loading="lazy" decoding="async" width="1200" height="630"></div>
  <div class="acard__meta"><span class="t">${esc(a.topic || a.section)}</span>${a.date ? `<span>${dateLong(a.date)}</span>` : ""}</div>
  <h3>${esc(a.title)}</h3>
  <p>${esc(a.excerpt)}</p>
</a>`;

const phead = ({ crumbs, eyebrow, title, lede, extra = "", img }) => `<section class="phead${img ? " phead--img" : ""}">${img ? `<div class="phead__img"><img src="${atW(img, 1400)}" srcset="${srcset(img, [600, 900, 1400])}" sizes="(max-width: 900px) calc(100vw - 32px), 46vw" alt="" fetchpriority="high"></div>` : ""}<div class="wrap">
  ${crumbs ? `<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a>${crumbs.map((c) => `<span>/</span>${c.href ? `<a href="${c.href}">${esc(c.label)}</a>` : `<span>${esc(c.label)}</span>`}`).join("")}</nav>` : ""}
  ${eyebrow ? `<p class="eyebrow" style="margin-top:28px">${eyebrow}</p>` : ""}
  <h1 class="h1">${title}</h1>
  ${lede ? `<p class="lede">${lede}</p>` : ""}
  ${extra}
</div></section>`;

const totalVolume = projects.reduce((s, p) => s + p.volume, 0);
const registries = [...new Set(projects.map((p) => p.registry))];


// Topographic contour lines behind the hero (deterministic, generated at build time).
function contours() {
  const rings = [];
  for (let k = 0; k < 14; k++) {
    const r = 40 + k * 26, pts = [];
    for (let i = 0; i <= 72; i++) {
      const a = (i / 72) * Math.PI * 2;
      const w = 1 + 0.10 * Math.sin(3 * a + k * 0.45) + 0.06 * Math.sin(5 * a - k * 0.3) + 0.04 * Math.cos(7 * a + k);
      pts.push([(420 + Math.cos(a) * r * w * 1.25).toFixed(1), (300 + Math.sin(a) * r * w * 0.9).toFixed(1)]);
    }
    rings.push(`<path d="M${pts.map((p) => p.join(" ")).join("L")}Z"/>`);
  }
  return `<svg class="hero__topo" viewBox="0 0 840 600" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="currentColor" stroke-width="1">${rings.join("")}</g></svg>`;
}

const PROGRAMMES = ["Verra VCS", "Gold Standard", "Global Carbon Council", "American Carbon Registry", "ART TREES", "Isometric", "Puro.earth", "Article 6.4 PACM", "Article 6.2 ITMOs", "Indian CCTS", "ICAO CORSIA"];
const programmeStrip = () => `<section class="progs" aria-label="Programmes and registries we work with"><div class="wrap progs__in">
  <span class="progs__k">Programmes &amp; registries we work across</span>
  <div class="progs__track"><div class="progs__row">${[...PROGRAMMES, ...PROGRAMMES].map((p, i) => `<span${i >= PROGRAMMES.length ? ' aria-hidden="true"' : ""}>${p}</span>`).join("")}</div></div>
</div></section>`;

// Price range per category: one series (min–max bar, median tick), direct labels, hover tooltip.
function priceRanges() {
  const rows = Object.keys(categories).map((c) => {
    const ps = projects.filter((p) => p.category === c).map((p) => p.price).sort((a, b) => a - b);
    const mid = ps.length % 2 ? ps[(ps.length - 1) / 2] : (ps[ps.length / 2 - 1] + ps[ps.length / 2]) / 2;
    const vol = projects.filter((p) => p.category === c).reduce((s, p) => s + p.volume, 0);
    return { c, min: ps[0], max: ps[ps.length - 1], mid, n: ps.length, vol };
  });
  const top = Math.ceil(Math.max(...rows.map((r) => r.max)) / 5) * 5;
  const pct = (v) => ((v / top) * 100).toFixed(2);
  const ticks = [];
  for (let t = 0; t <= top; t += 5) ticks.push(t);
  return `<figure class="pr" aria-labelledby="pr-cap">
  <div class="pr__axis" aria-hidden="true"><span></span><div class="pr__scale">${ticks.map((t) => `<span style="left:${pct(t)}%">$${t}</span>`).join("")}</div></div>
  ${rows.map((r) => `<a class="pr__row" href="/marketplace/?category=${encodeURIComponent(r.c)}" data-tip="${esc(r.c)} · ${r.n} projects · $${r.min.toFixed(2)}–$${r.max.toFixed(2)} · median $${r.mid.toFixed(2)} · ${fmt(r.vol)} tCO₂e">
    <span class="pr__name">${esc(r.c)}<small>${r.n} projects</small></span>
    <span class="pr__track">
      ${ticks.map((t) => `<i class="pr__grid" style="left:${pct(t)}%"></i>`).join("")}
      <span class="pr__bar" style="left:${pct(r.min)}%;width:max(8px,${(pct(r.max) - pct(r.min)).toFixed(2)}%)"></span>
      <span class="pr__mid" style="left:${pct(r.mid)}%"></span>
      <span class="pr__lab pr__lab--min" style="left:${pct(r.min)}%">$${r.min.toFixed(2)}</span>
      <span class="pr__lab pr__lab--max" style="left:${pct(r.max)}%">$${r.max.toFixed(2)}</span>
    </span>
  </a>`).join("")}
  <figcaption id="pr-cap" class="pr__cap"><span class="pr__key"><i class="k-bar"></i>Price range</span><span class="pr__key"><i class="k-mid"></i>Median</span><span>USD per tCO₂e · listed inventory as of ${asOf}</span></figcaption>
  <div class="pr__tip" role="tooltip" hidden></div>
</figure>`;
}

// ---------------------------------------------------------------- home
function home() {
  const featured = ["western-ghats-reforestation", "sundarbans-mangrove-blue-carbon", "rajasthan-solar-grid", "punjab-biogas-digesters", "indonesia-peatland-conservation", "cement-waste-heat-recovery"]
    .map((s) => projects.find((p) => p.slug === s)).filter(Boolean);
  const board = projects.slice(0, 7);
  const catCount = (c) => projects.filter((p) => p.category === c).length;
  const latest = insights.slice(0, 3);

  const body = `
<section class="hero hero--photo">
<div class="hero__bg">
  <picture><source media="(max-width: 767px)" type="image/avif" srcset="/media/hero-forest-800.avif"><source media="(max-width: 767px)" srcset="/media/hero-forest-800.jpg"><source type="image/avif" srcset="/media/hero-forest.avif"><img src="/media/hero-forest.jpg" alt="" fetchpriority="high" width="1600" height="900"></picture>
  <video class="hero__video" muted loop playsinline preload="none" data-src="/media/hero-forest.mp4" aria-hidden="true"></video>
</div>
<button class="hero__pause" type="button" aria-label="Pause background video" hidden><svg viewBox="0 0 16 16" aria-hidden="true"><rect x="4" y="3" width="3" height="10" rx="1"/><rect x="9" y="3" width="3" height="10" rx="1"/></svg></button>
<div class="wrap hero__grid">
  <div>
    <p class="eyebrow"><span class="n">CORSIA</span> · Voluntary · Article 6</p>
    <h1 class="display">Carbon credits that <em>clear the bar</em> — not just the brochure.</h1>
    <p class="lede">A marketplace and advisory desk for aircraft operators, companies and project developers. Registry-issued inventory, unit-level due diligence, and cancellation handled in your name.</p>
    <div class="hero__actions">
      <a class="btn" href="/marketplace/">Browse the marketplace ${arrow}</a>
      <a class="btn btn--ghost" href="/services/">CORSIA compliance support</a>
    </div>
    <div class="hero__note"><span>Verra, Gold Standard &amp; GCC projects</span><span>Retirement certificate on every purchase</span><span>Based in Indore, India</span></div>
  </div>
  <div class="board" aria-label="Current inventory">
    <div class="board__head"><span class="board__title"><span class="board__dot"></span>Inventory</span><span class="board__date">As of ${asOf}</span></div>
    <table>
      <thead><tr><th>Project</th><th class="hide-xs">Registry</th><th>Vint.</th><th class="num">$/t</th></tr></thead>
      <tbody>${board.map((p) => `<tr data-href="/marketplace/${p.slug}/">
        <td><a href="/marketplace/${p.slug}/" class="board__name">${esc(p.name)}</a><span class="board__meta">${esc(p.country)} · ${esc(p.category)}</span></td>
        <td class="hide-xs board__meta">${esc(p.registry)}</td>
        <td class="mono">${p.vintage}</td>
        <td class="num">${p.price.toFixed(2)}</td></tr>`).join("")}</tbody>
    </table>
    <div class="board__foot"><span class="muted">${projects.length} projects · ${fmt(totalVolume)} tCO₂e</span><a class="link" href="/marketplace/">Full list ${arrow}</a></div>
  </div>
</div></section>

<div class="wrap figures-wrap"><div class="figures">
  <div class="figure"><div class="figure__n"><span data-count="${projects.length}">${projects.length}</span></div><div class="figure__l">Projects listed across ${Object.keys(categories).length} categories</div></div>
  <div class="figure"><div class="figure__n"><span data-count="${Math.round(totalVolume / 1000)}">${fmt(Math.round(totalVolume / 1000))}</span>k<small>tCO₂e</small></div><div class="figure__l">Volume available to buyers</div></div>
  <div class="figure"><div class="figure__n"><span data-count="${kb.length + insights.length}">${kb.length + insights.length}</span></div><div class="figure__l">Guides in the knowledge base and insights library</div></div>
  <div class="figure"><div class="figure__n"><span data-count="${new Date().getFullYear() - site.parent.founded}">${new Date().getFullYear() - site.parent.founded}</span>+<small>yrs</small></div><div class="figure__l">DSTechnoverse, environmental data &amp; analytics since ${site.parent.founded}</div></div>
</div></div>
${programmeStrip()}

<section class="section"><div class="wrap">
  <div class="sec-head">
    <div><p class="eyebrow"><span class="n">01</span> Who we work with</p><h2 class="h2">We work both sides of the market.</h2></div>
    <p class="lede" style="max-width:44ch">Airlines need units that will stand up to a verifier. Developers need buyers who will actually pay. We sit between the two.</p>
  </div>
  <div class="sides reveal">
    <div class="side">
      <p class="eyebrow">For buyers</p>
      <h3 class="h3">Airlines, operators and companies retiring credits</h3>
      <p>Tell us the volume, vintage window and programmes you can accept. We shortlist units that genuinely qualify, check them, and handle transfer and cancellation.</p>
      <ul class="ticks">
        <li>CORSIA offsetting requirement calculation</li>
        <li>Eligible unit sourcing and pre-purchase due diligence</li>
        <li>Registry transfer, cancellation and retirement certificate</li>
        <li>Emissions Monitoring Plan and annual report support</li>
      </ul>
      <div class="actions"><a class="btn" href="${site.intake.buy}" target="_blank" rel="noopener">Post a buy requirement ${arrow}</a><a class="btn btn--ghost" href="/marketplace/">See inventory</a></div>
    </div>
    <div class="side">
      <p class="eyebrow">For sellers</p>
      <h3 class="h3">Project developers, aggregators and traders</h3>
      <p>Before you pay for validation or a registry listing, we check whether the host government will authorise your units. If it will, we help you get them issued and put them in front of buyers.</p>
      <ul class="ticks">
        <li>Eligibility screening against ICAO-approved programmes</li>
        <li>Host-State authorisation and corresponding adjustment check</li>
        <li>PDD, validation and verification coordination</li>
        <li>Buyer matching, offtake and pricing guidance</li>
      </ul>
      <div class="actions"><a class="btn" href="${site.intake.sell}" target="_blank" rel="noopener">List your inventory ${arrow}</a><a class="btn btn--ghost" href="/services/#sellers">Seller services</a></div>
    </div>
  </div>
</div></section>

<section class="section section--rule section--tight"><div class="wrap split" style="align-items:center">
  <div>
    <p class="eyebrow">Market snapshot</p>
    <h2 class="h2" style="margin-top:18px">What a tonne costs, by project type.</h2>
    <p class="lede" style="margin-top:18px">Removals and blue carbon price well above renewable energy avoidance credits. The spread inside each category is driven by vintage, co-benefits and whether a unit can carry a corresponding adjustment.</p>
    <p style="margin-top:24px"><a class="link" href="/knowledge-base/corsia-credit-pricing/">What drives CORSIA credit pricing ${arrow}</a></p>
  </div>
  <div class="reveal">${priceRanges()}</div>
</div></section>
<section class="section section--rule section--paper2"><div class="wrap">
  <div class="sec-head">
    <div><p class="eyebrow"><span class="n">02</span> Marketplace</p><h2 class="h2">Selected projects</h2><p class="lede">Every listing names its registry, methodology and vintage. Documentation is released to verified buyers.</p></div>
    <a class="btn btn--ghost" href="/marketplace/">All ${projects.length} projects ${arrow}</a>
  </div>
  <div class="grid-cards">${featured.map((p, i) => projectCard(p, i)).join("")}</div>
</div></section>

<section class="section section--forest"><div class="wrap">
  <div class="sec-head">
    <div><p class="eyebrow"><span class="n">03</span> How a purchase works</p><h2 class="h2">From shortlist to certificate</h2></div>
    <p class="lede" style="max-width:40ch">The registry keeps the official record of every transfer and retirement. We take care of the paperwork around it.</p>
  </div>
  <div class="steps">
    <div class="step"><div class="step__n">01</div><h3>Choose &amp; hold</h3><p>Tell us the lot and the quantity. We hold it for you and put availability, vintage and registry details in writing.</p></div>
    <div class="step"><div class="step__n">02</div><h3>Due diligence</h3><p>PDD, validation and verification reports and the issuance record are shared and checked against your requirement.</p></div>
    <div class="step"><div class="step__n">03</div><h3>Transfer or retire</h3><p>Units go into your own registry account, or we retire them for you in the name of the beneficiary you choose.</p></div>
    <div class="step"><div class="step__n">04</div><h3>Proof in hand</h3><p>The retirement certificate and serial numbers come to you with a file your auditors can check line by line.</p></div>
  </div>
</div></section>

<section class="section"><div class="wrap split">
  <div>
    <p class="eyebrow"><span class="n">04</span> Eligibility</p>
    <h2 class="h2" style="margin-top:18px">Most carbon credits can’t be used for CORSIA.</h2>
    <p class="lede" style="margin-top:18px">An airline can only cancel units that pass three tests. Plenty of well-run projects clear the first two and fall at the last one.</p>
    <ol class="conds">
      <li><span class="no">1</span><b>An ICAO-approved programme</b><p>Issued under a crediting programme the ICAO Council has approved for the relevant compliance period.</p></li>
      <li><span class="no">2</span><b>An eligible vintage</b><p>Reductions must fall inside the vintage window set for that compliance period.</p></li>
      <li><span class="no">3</span><b>A corresponding adjustment</b><p>The host government must authorise the unit and adjust its own inventory so the tonne is not counted twice.</p></li>
    </ol>
    <p style="margin-top:28px"><a class="link" href="/knowledge-base/corsia-eligible-emissions-units/">Read: CORSIA Eligible Emissions Units ${arrow}</a></p>
  </div>
  <div class="reveal">
    <div class="figure-frame"><img src="/images/corsia/corsia-eeu-criteria.svg" alt="The ICAO Emissions Unit Criteria that a CORSIA-eligible unit must satisfy" loading="lazy" width="920" height="476"></div>
    <p class="caption">Fig. — The Emissions Unit Criteria, applied at unit level.</p>
  </div>
</div></section>

<section class="section section--rule section--tight"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow"><span class="n">05</span> Browse by type</p><h2 class="h2">Project categories</h2></div></div>
  <div class="cat-tiles">${Object.entries(categories).map(([c, v]) => `<a class="cat-tile reveal" href="/marketplace/?category=${encodeURIComponent(c)}">
    <img src="${atW(v.image, 900)}" srcset="${srcset(v.image, [500, 900, 1200])}" sizes="(max-width: 520px) 100vw, (max-width: 960px) 50vw, 40vw" alt="" loading="lazy">
    <span class="cat-tile__n">${catCount(c)} PROJECTS</span><span class="cat-tile__go" aria-hidden="true">→</span>
    <h3>${esc(c)}</h3><p>${esc(v.blurb)}</p></a>`).join("")}</div>
</div></section>

<section class="impact">
  <div class="impact__bg" data-parallax><img src="${PHOTOS.impact}" srcset="${srcset(PHOTOS.impact, [800, 1400, 2000])}" sizes="100vw" alt="" loading="lazy"></div>
  <div class="wrap">
    <p class="eyebrow" style="color:rgba(255,255,255,.7)">Why it matters</p>
    <blockquote style="margin-top:20px">Every tonne we sell is <em>traceable to a registry serial</em> — and retired in your name.</blockquote>
    <div class="impact__nums">
      <div><b><span data-count="${Math.round(totalVolume / 1000)}">${Math.round(totalVolume / 1000)}</span>k</b><span>tonnes of CO₂e ready to retire</span></div>
      <div><b><span data-count="${new Set(projects.flatMap((p) => p.sdgs)).size}">${new Set(projects.flatMap((p) => p.sdgs)).size}</span> of 17</b><span>UN Sustainable Development Goals supported</span></div>
      <div><b><span data-count="${new Set(projects.map((p) => p.country)).size}">${new Set(projects.map((p) => p.country)).size}</span> countries</b><span>where listed projects operate</span></div>
    </div>
  </div>
</section>

<section class="section section--rule section--paper2"><div class="wrap">
  <div class="sec-head">
    <div><p class="eyebrow"><span class="n">06</span> Knowledge base</p><h2 class="h2">CORSIA, explained properly.</h2><p class="lede">${kb.length} reference articles written for operators, developers and compliance teams — from the legal basis to registry cancellation.</p></div>
    <a class="btn btn--ghost" href="/knowledge-base/">Open the knowledge base ${arrow}</a>
  </div>
  <div class="kbt-grid">${KB_TOPICS.map((t, i) => topicCard(t, i)).join("")}</div>
</div></section>

<section class="section section--rule"><div class="wrap">
  <div class="sec-head">
    <div><p class="eyebrow"><span class="n">07</span> Insights</p><h2 class="h2">Latest from the desk</h2></div>
    <a class="btn btn--ghost" href="/insights/">All insights ${arrow}</a>
  </div>
  <div class="acards">${latest.map((a) => articleCard(a, "insights")).join("")}</div>
</div></section>
${ctaBand()}`;

  emit("/", page({
    path: "/",
    body,
    preload: '<link rel="preload" as="image" type="image/avif" href="/media/hero-forest-800.avif" media="(max-width: 767px)">\n<link rel="preload" as="image" type="image/avif" href="/media/hero-forest.avif" media="(min-width: 768px)">',
  }));
}

// Knowledge base topics. `section` must match the `section` front matter of the articles.
const ICON = {
  book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5v-16Z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/><path d="M8 7h8M8 11h5"/>',
  calc: '<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 6.5h8M8 11h.01M12 11h.01M16 11h.01M8 14.5h.01M12 14.5h.01M16 14.5v3.5M8 18h4"/>',
  clip: '<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4V2.5h6V4"/><path d="m9 13 2 2 4-4"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12.5 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  drop: '<path d="M12 2.5s6.5 6.8 6.5 11.5a6.5 6.5 0 0 1-13 0C5.5 9.3 12 2.5 12 2.5Z"/><path d="M9 14.5a3 3 0 0 0 3 3"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-7"/><path d="M16 7h4v4"/>',
  bank: '<path d="M3 10h18L12 3.5 3 10Z"/><path d="M5.5 10v8M10 10v8M14 10v8M18.5 10v8M3 21h18"/>',
  mark: '<path d="M6 2.5h12v19l-6-4-6 4v-19Z"/><path d="M9.5 7.5h5"/>',
};
const KB_TOPICS = [
  { slug: "foundations", section: "Foundations", icon: "book",
    blurb: "What CORSIA is, why ICAO created it, which flights it covers and how the phases run to 2035.",
    related: /what-is-corsia-complete-guide|corsia-explained|corsia-phases-timeline|future-of-corsia|aviation-carbon-markets|carbon-markets-reducing/ },
  { slug: "obligations-and-calculation", section: "Obligations & Calculation", icon: "calc",
    blurb: "The 2019 baseline, sectoral and individual growth factors, and how the number of units you owe is worked out.",
    related: /offsetting-requirements-calculation|budgeting|compliance-cost|carbon-pricing-impact|compliance-roadmap/ },
  { slug: "monitoring-reporting-verification", section: "Monitoring, Reporting & Verification", icon: "clip",
    blurb: "Emissions Monitoring Plans, fuel-use methods and the yearly cycle of reporting and third-party verification.",
    related: /monitoring|fuel-data|fuel-supplier|emissions-report|verification|internal-audit|data-systems|reporting-deadlines/ },
  { slug: "eligible-emissions-units", section: "Eligible Emissions Units", icon: "layers",
    blurb: "Which carbon credits an airline can actually cancel: approved programmes, unit criteria, vintages, adjustments and registries.",
    related: /eligible-emissions-units|corresponding-adjustment|registry|icao-approved|due-diligence|carbon-projects-qualify|unit-procurement/ },
  { slug: "eligible-fuels", section: "Eligible Fuels", icon: "drop",
    blurb: "Sustainable and lower-carbon aviation fuels, their sustainability criteria, and how they reduce what you owe.",
    related: /saf|sustainable-aviation-fuel|iscc/ },
  { slug: "market-and-pricing", section: "Market & Pricing", icon: "chart",
    blurb: "Who buys and sells CORSIA units, what drives the price, and why a supply shortfall is expected.",
    related: /price|buyer-guide|seller-guide|how-to-buy-corsia|supplier|offtake|why-corsia-grade/ },
  { slug: "governance-and-india", section: "Governance & India", icon: "bank",
    blurb: "The ICAO bodies behind the rules, the national authorities that enforce them, and what it all means in India.",
    related: /india|dgca|ccts/ },
  { slug: "reference", section: "Reference", icon: "mark",
    blurb: "Glossary, acronyms, frequently asked questions and where to find the official documents.",
    related: /complete-guide|questions-to-ask|readiness-assessment|how-to-choose/ },
];
for (const s of kbSections) if (!KB_TOPICS.find((t) => t.section === s)) throw new Error(`knowledge base section "${s}" has no topic in KB_TOPICS`);
const topicOf = (section) => KB_TOPICS.find((t) => t.section === section);
const topicArticles = (t) => kb.filter((a) => a.section === t.section);
const topicRelated = (t) => insights.filter((a) => t.related.test(a.slug)).slice(0, 6);
const readMins = (md) => Math.max(1, Math.round(md.replace(/[#*_>|`\-\[\]()!]/g, " ").split(/\s+/).filter(Boolean).length / 230));
const topicIcon = (t, cls = "kbt-ico") => `<span class="${cls}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICON[t.icon]}</svg></span>`;

function topicCard(t, i) {
  const list = topicArticles(t);
  return `<a class="kbt-card reveal" href="/knowledge-base/topic/${t.slug}/">
  <div class="kbt-card__top">${topicIcon(t)}<span class="kbt-card__n">${String(i + 1).padStart(2, "0")}</span></div>
  <h3>${esc(t.section)}</h3>
  <p>${esc(t.blurb)}</p>
  <ul>${list.slice(0, 3).map((a) => `<li>${esc(a.title.split(":")[0])}</li>`).join("")}</ul>
  <span class="kbt-card__foot"><span>${list.length} article${list.length === 1 ? "" : "s"}</span><span class="kbt-card__go">View all <span aria-hidden="true">→</span></span></span>
</a>`;
}


// ---------------------------------------------------------------- marketplace
function marketplace() {
  const cats = ["All", ...Object.keys(categories)];
  const count = (c) => (c === "All" ? projects.length : projects.filter((p) => p.category === c).length);
  const body = `
${phead({
  crumbs: [{ label: "Marketplace" }],
  img: PHOTOS.marketplace,
  eyebrow: `<span class="n">${projects.length}</span> projects · ${fmt(totalVolume)} tCO₂e available`,
  title: "Carbon credits you can <em class=\"it\">check before you buy.</em>",
  lede: "Each project shows its registry, methodology and vintage up front. Prices are per tonne and become firm only once we confirm availability and eligibility in writing.",
})}
<div id="market" data-view="grid">
  <div class="mk-bar"><div class="wrap">
    <div class="chips" role="group" aria-label="Category">${cats.map((c) => `<button class="chip" data-cat="${esc(c)}" aria-pressed="${c === "All"}">${esc(c)} <span>${count(c)}</span></button>`).join("")}</div>
    <div class="mk-tools">
      <label class="search"><span class="sr-only">Search projects</span>${searchIcon}<input id="mk-q" class="field" type="search" placeholder="Search name, country, methodology"></label>
      <select id="mk-reg" class="field" aria-label="Registry"><option value="">All registries</option>${registries.map((r) => `<option>${esc(r)}</option>`).join("")}</select>
      <select id="mk-status" class="field" aria-label="Delivery"><option value="">Any delivery</option><option>Spot</option><option>Issued</option><option>Forward</option></select>
      <select id="mk-sort" class="field" aria-label="Sort">
        <option value="featured">Featured</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option>
        <option value="volume-desc">Volume: largest</option><option value="vintage">Vintage: newest</option><option value="name">Name A–Z</option>
      </select>
      <div class="viewtoggle" role="group" aria-label="View"><button data-view="grid" aria-pressed="true">Grid</button><button data-view="list" aria-pressed="false">Table</button></div>
    </div>
  </div></div>
  <div class="wrap">
    <div class="mk-summary"><span>Showing <b id="mk-count">${projects.length}</b> projects · <b id="mk-vol">${fmt(totalVolume)}</b> tCO₂e</span><span>Prices in USD per tCO₂e · inventory as of ${asOf}</span></div>
    <h2 class="sr-only">All projects</h2>
    <div class="grid-cards">${projects.map((p, i) => projectCard(p, i)).join("")}</div>
    <div class="table-scroll"><table class="mk-table">
      <thead><tr><th>Project</th><th>Category</th><th>Registry</th><th>Methodology</th><th>Vintage</th><th>Delivery</th><th class="num">Volume</th><th class="num">$/tCO₂e</th></tr></thead>
      <tbody>${projects.map((p, i) => `<tr data-href="/marketplace/${p.slug}/" data-i="${i}" data-cat="${esc(p.category)}" data-reg="${esc(p.registry)}" data-status="${p.status}" data-price="${p.price}" data-vol="${p.volume}" data-vintage="${p.vintage}" data-name="${esc(p.name)}" data-search="${esc([p.name, p.developer, p.country, p.registry, p.category, p.methodology, p.projectType].join(" ").toLowerCase())}">
        <td><a href="/marketplace/${p.slug}/">${esc(p.name)}</a><span class="sub">${esc(p.developer)} · ${esc(p.country)}</span></td>
        <td>${esc(p.category)}</td><td>${esc(p.registry)}</td><td class="mono small">${esc(p.methodology)}</td><td class="mono">${p.vintage}</td>
        <td><span class="pill pill--${p.status}">${p.status}</span></td><td class="num">${fmt(p.volume)}</td><td class="num">${p.price.toFixed(2)}</td></tr>`).join("")}</tbody>
    </table></div>
    <div class="empty"><p class="h3">No projects match those filters</p><p>Try another category, or <button id="mk-reset" class="link" style="background:none;border:0;cursor:pointer">clear all filters</button>.</p></div>
  </div>
</div>

<section class="section"><div class="wrap">
  <div class="sides">
    <div class="side">
      <p class="eyebrow">Can’t see what you need?</p>
      <h2 class="h3">Tell us what you’re looking for.</h2>
      <p>Share the volume, the programmes and vintages you accept, any CORSIA or Article 6 conditions, and anything you want to avoid. We check listed and unlisted supply and explain each match.</p>
      <div class="actions"><a class="btn" href="${site.intake.buy}" target="_blank" rel="noopener">Post a buy requirement ${arrow}</a></div>
    </div>
    <div class="side">
      <p class="eyebrow">Have credits to sell?</p>
      <h2 class="h3">List your project and lots.</h2>
      <p>Give us the project details once: registry ID, methodology, host country and where authorisation stands. Then add each lot with its vintage, quantity and asking price.</p>
      <div class="actions"><a class="btn" href="${site.intake.sell}" target="_blank" rel="noopener">List inventory ${arrow}</a><a class="btn btn--ghost" href="/contact/?topic=sell">Talk to us first</a></div>
    </div>
  </div>
</div></section>
${ctaBand()}`;
  emit("/marketplace/", page({ path: "/marketplace/", breadcrumbs: [{ name: "Marketplace", url: "/marketplace/" }], title: "Carbon Credit Marketplace", description: `Browse ${projects.length} verified carbon credit projects — forestry, renewable, blue carbon, agriculture, waste and industrial. Transparent per-tonne pricing, registry details and retirement support.`, body }));

  projects.forEach((p) => projectPage(p));
}

function projectPage(p) {
  const similar = projects.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 3);
  const more = similar.length < 3 ? projects.filter((x) => x.slug !== p.slug && !similar.includes(x)).slice(0, 3 - similar.length) : [];
  const facts = [
    ["Registry", p.registry], ["Registry ID", p.registryId], ["Methodology", p.methodology],
    ["Project type", p.projectType], ["Delivery", p.delivery], ["Listing ref.", p.projectId],
  ];
  const stats = [["Available volume", `${fmt(p.volume)} tCO₂e`], ["Issued to date", `${fmt(p.issued)} tCO₂e`], ["Est. annual reductions", `${fmt(p.estAnnual)} tCO₂e`]];
  const body = `
<div class="pd-hero"><img src="${atW(p.image, 1600)}" srcset="${srcset(p.image, [800, 1200, 1600, 2000])}" sizes="100vw" alt="${esc(p.name)}" fetchpriority="high"></div>
<div class="wrap pd-grid">
  <div>
    <div class="pd-head">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/marketplace/">Marketplace</a><span>/</span><a href="/marketplace/?category=${encodeURIComponent(p.category)}">${esc(p.category)}</a></nav>
      <h1 class="h1">${esc(p.name)}</h1>
      <div class="pd-tags"><span>${esc(p.country)}</span><span class="sep">/</span><span>${esc(p.developer)}</span><span class="sep">/</span><span>Vintage ${p.vintage}</span><span class="sep">/</span><span class="pill pill--${p.status}">${p.status}</span></div>
    </div>
    <div class="pd-block">
      <h2>About this project</h2>
      <p>${esc(p.summary)}</p>
      <ol class="hl">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ol>
    </div>
    <div class="pd-block">
      <h2>Verification &amp; standard</h2>
      <div class="facts">${facts.map(([k, v]) => `<div><span class="kv__k">${k}</span><span class="kv__v">${esc(v)}</span></div>`).join("")}</div>
    </div>
    <div class="pd-block">
      <h2>Project statistics</h2>
      <div class="facts">${stats.map(([k, v]) => `<div><span class="kv__k">${k}</span><span class="kv__v">${v}</span></div>`).join("")}</div>
    </div>
    <div class="pd-block">
      <h2>Registry documentation</h2>
      <p>Shared with qualified buyers before any contract is signed. The ${esc(p.registry)} registry, not this desk, is the official record of issuance and retirement.</p>
      <ul class="docs">${["Project Design Document (PDD)", "Validation report", "Verification report", "Registry issuance record"].map((d) => `<li>${d}<span>On request</span></li>`).join("")}</ul>
    </div>
    <div class="pd-block">
      <h2>CORSIA eligibility</h2>
      <p>Being issued by ${esc(p.registry)} is a necessary condition for CORSIA use, not a sufficient one. Eligibility for a given compliance period also depends on the vintage window and on whether the host State has authorised the units with a corresponding adjustment. We confirm the position for this lot in writing before you commit.</p>
      <p><a class="link" href="/knowledge-base/corresponding-adjustments-article-6/">Why corresponding adjustments decide eligibility ${arrow}</a></p>
    </div>
    <div class="pd-block">
      <h2>Sustainable Development Goals</h2>
      <div class="sdgs">${p.sdgs.map((n) => `<span class="sdg sdg--lg" style="${sdgStyle(n)}"><b>${n}</b>${esc(sdgs[n][0])}</span>`).join("")}</div>
    </div>
  </div>
  <aside id="buy">
    <div class="buybox" data-price="${p.price}" data-max="${p.volume}" data-name="${esc(p.name)}" data-slug="${p.slug}" data-registry="${esc(p.registry)}" data-vintage="${p.vintage}">
      <div class="buybox__top"><span class="kv__k">Indicative price</span><div class="buybox__price">$${p.price.toFixed(2)}<small>/ tCO₂e</small></div></div>
      <dl class="buybox__rows">
        <div><dt>Available</dt><dd>${fmt(p.volume)} t</dd></div>
        <div><dt>Vintage</dt><dd>${p.vintage}</dd></div>
        <div><dt>Registry</dt><dd>${esc(p.registry)}</dd></div>
        <div><dt>Delivery</dt><dd>${esc(p.delivery)}</dd></div>
      </dl>
      <div class="buybox__calc">
        <label for="bb-qty">Quantity (tCO₂e)</label>
        <input id="bb-qty" class="field" type="number" min="1" max="${p.volume}" step="100" value="${Math.min(1000, p.volume)}">
        <div class="buybox__total"><span class="muted">Estimated total</span><b id="bb-total">—</b></div>
      </div>
      <div class="buybox__act">
        <a id="bb-enquire" class="btn btn--block" href="/contact/?topic=buy&project=${p.slug}">Request to buy ${arrow}</a>
        <a id="bb-wa" class="btn btn--ghost btn--block" href="${waLink(`Hi, I'm interested in ${p.name}.`)}" target="_blank" rel="noopener"><span class="btn-wa-ico">${waIcon}</span>Ask on WhatsApp</a>
        <p class="buybox__note">No payment is taken on this site. We confirm availability and share documentation before any contract.</p>
      </div>
    </div>
  </aside>
</div>

<div class="mbar"><div><span class="kv__k">${esc(p.registry)} · ${p.vintage}</span><b class="mono">${p.price.toFixed(2)}</b><small class="muted"> / tCO₂e</small></div><a class="btn btn--sm" href="#buy">Request to buy</a></div>
<section class="section section--rule section--paper2"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">Similar projects</p><h2 class="h2">Also in ${esc(p.category)}</h2></div><a class="btn btn--ghost" href="/marketplace/">Back to marketplace</a></div>
  <div class="grid-cards">${[...similar, ...more].map((x) => projectCard(x)).join("")}</div>
</div></section>
${ctaBand()}`;
  emit(`/marketplace/${p.slug}/`, page({
    path: `/marketplace/${p.slug}/`,
    title: `${p.name} — ${p.category} Carbon Credits`,
    description: `${p.name} by ${p.developer}, ${p.country}. ${p.summary} ${p.registry}, vintage ${p.vintage}, $${p.price.toFixed(2)}/tCO₂e.`,
    ogImage: p.image,
    breadcrumbs: [{ name: "Marketplace", url: "/marketplace/" }, { name: p.name, url: `/marketplace/${p.slug}/` }],
    body,
  }));
}

// ---------------------------------------------------------------- services
function services() {
  const sec = (k) => {
    const s = service.sections.find((x) => x.key === k);
    if (!s) throw new Error(`corsia-service.json: missing section "${k}"`);
    return s;
  };
  const intro = sec("intro");
  const req = sec("requires");
  const buyers = sec("buyers");
  const sellers = sec("sellers");
  const crit = sec("criteria");
  const progs = sec("programmes");
  const india = sec("india");
  const how = sec("how");
  const faq = sec("faq");
  const noLinks = (arr) => arr.filter((p) => !/^\[.*\]\(https:\/\/carboncredit/.test(p));
  const splitDash = (s) => { const i = s.indexOf(" — "); return i > 0 ? [s.slice(0, i), s.slice(i + 3)] : [s, ""]; };
  const phases = req.numbered.slice(0, 4).map((t) => {
    const [h, d] = splitDash(t);
    const m = h.match(/^(.*?),\s*(\d{4}.*)$/);
    return { name: m ? m[1] : h, yrs: m ? m[2].replace(" to ", "–") : "", d };
  });
  const CRITERIA = [
    ["Additional", "The reduction would not have happened without the revenue from the credit."],
    ["Real &amp; measurable", "Quantified conservatively under an approved methodology."],
    ["Permanent", "Reversal risk addressed through a buffer pool or an equivalent mechanism."],
    ["Independently verified", "Checked by an accredited third-party verification body."],
    ["Not double counted", "The host State applies a corresponding adjustment to its own inventory."],
    ["Eligible vintage", "Inside the vintage window the ICAO Council sets for the compliance period."],
    ["No net harm", "Does not contravene host-State law or social and environmental safeguards."],
    ["Traceable", "Held in a registry with unique serial numbers and a clear cancellation record."],
  ];
  const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);
  const supporting = [
    ["socio-economic-baseline-surveys", "Socio-economic & baseline surveys", "Household, baseline and endline surveys — the field data cookstove, agriculture and community projects need for monitoring."],
    ["statistical-research-data-analysis", "Statistical data analysis", "Sampling design and statistical analysis for monitoring reports, usage surveys and verification queries."],
    ["air-quality-analysis", "Air quality analysis", "Ambient and stack monitoring data validation, NAAQS compliance statistics and trend analysis."],
    ["aermod-air-dispersion-modelling", "AERMOD dispersion modelling", "Regulatory air dispersion modelling for industrial sources and airport hubs, delivered white-label."],
    ["eia-data-analysis-outsourcing", "EIA data analysis", "Baseline air, water, noise, soil and ecology data turned into regulator-ready tables and interpretation."],
    ["water-effluent-dispersion-modelling", "Water & effluent modelling", "Mixing-zone, thermal plume and outfall studies for discharge consents and EIA."],
  ];

  const body = `
${phead({
  crumbs: [{ label: "CORSIA Services" }],
  img: PHOTOS.services,
  eyebrow: "Advisory for operators &amp; developers",
  title: "CORSIA carbon credit <em class=\"it\">services</em>",
  lede: esc(service.shortDescription),
  extra: `<div class="hero__actions"><a class="btn" href="${site.intake.home}" target="_blank" rel="noopener">Apply as a buyer or seller ${arrow}</a><a class="btn btn--ghost" href="/calculator/">Estimate your requirement</a></div>`,
})}

<section class="section"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow"><span class="n">01</span> Overview</p><h2 class="h2">${esc(intro.heading)}</h2></div></div>
  <div class="two-col-text">${noLinks(intro.paragraphs).map((p) => `<p>${inline(p)}</p>`).join("")}</div>
</div></section>

<section class="section section--rule section--paper2"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow"><span class="n">02</span> The scheme</p><h2 class="h2">${esc(req.heading)}</h2><p class="lede">${inline(req.paragraphs[0])}</p></div></div>
  <div class="timeline">${phases.map((ph) => `<div><span class="yr">${esc(ph.yrs)}</span><b>${esc(ph.name)}</b><p>${esc(cap(ph.d))}</p></div>`).join("")}</div>
  <p class="muted" style="margin-top:36px;max-width:70ch">${esc(req.numbered[4].replace(/^Throughout — /, "Throughout: "))}</p>
</div></section>

<section class="section section--rule"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow"><span class="n">03</span> What we do</p><h2 class="h2">Services, by side of the market</h2></div></div>
  <div class="svc-cols">
    <div class="svc-col" id="buyers"><p class="eyebrow">Aircraft operators &amp; buyers</p><h3>Compliance, with the procurement problem solved</h3>${buyers.paragraphs.map((p) => `<p>${inline(p)}</p>`).join("")}<ol class="numlist">${buyers.bullets.map((b) => `<li><span>${inline(b)}</span></li>`).join("")}</ol>
      <p style="margin-top:24px"><a class="btn" href="${site.intake.buy}" target="_blank" rel="noopener">Post a buy requirement ${arrow}</a></p></div>
    <div class="svc-col" id="sellers"><p class="eyebrow">Project developers &amp; sellers</p><h3>Authorisation first, before you spend</h3>${sellers.paragraphs.map((p) => `<p>${inline(p)}</p>`).join("")}<ol class="numlist">${sellers.bullets.map((b) => `<li><span>${inline(b)}</span></li>`).join("")}</ol>
      <p style="margin-top:24px"><a class="btn" href="${site.intake.sell}" target="_blank" rel="noopener">List your project ${arrow}</a></p></div>
  </div>
</div></section>

<section class="section section--forest"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow"><span class="n">04</span> Unit-level criteria</p><h2 class="h2">${esc(crit.heading)}</h2><p class="lede">${inline(crit.paragraphs[0])}</p></div></div>
  <div class="criteria">${CRITERIA.map(([h, d], i) => `<div><span class="n">${String(i + 1).padStart(2, "0")}</span><b>${h}</b><p>${d}</p></div>`).join("")}</div>
</div></section>

<section class="section"><div class="wrap split">
  <div><p class="eyebrow"><span class="n">05</span> Programmes</p><h2 class="h2" style="margin:18px 0 20px">${esc(progs.heading)}</h2><div class="prose">${progs.paragraphs.map((p) => `<p>${inline(p)}</p>`).join("")}</div></div>
  <div><p class="eyebrow"><span class="n">06</span> India</p><h2 class="h2" style="margin:18px 0 20px">${esc(india.heading)}</h2><div class="prose">${india.paragraphs.map((p) => `<p>${inline(p)}</p>`).join("")}</div></div>
</div></section>

<section class="section section--rule section--paper2"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow"><span class="n">07</span> Approach</p><h2 class="h2">How we work</h2></div></div>
  <div class="two-col-text" style="margin-bottom:40px">${how.paragraphs.map((p) => `<p>${inline(p.replace(/DSTechnoverse/g, "we"))}</p>`).join("")}</div>
  <div class="values">${how.bullets.map((b) => { const [h, d] = splitDash(b); return `<div><b>${esc(h.replace(/,$/, ""))}</b><p>${esc(d || "")}</p></div>`; }).join("")}</div>
</div></section>

<section class="section section--rule"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow"><span class="n">08</span> Supporting services</p><h2 class="h2">The data work carbon accounting depends on</h2><p class="lede">Delivered by the wider DSTechnoverse environmental analytics team.</p></div></div>
  <div class="support">${supporting.map(([slug, t, d]) => `<a href="https://dstechnoverse.com/services/${slug}" target="_blank" rel="noopener"><b>${t}</b><p>${d}</p><span class="ext">dstechnoverse.com ↗</span></a>`).join("")}</div>
</div></section>

<section class="section section--rule section--paper2"><div class="wrap split">
  <div><p class="eyebrow"><span class="n">09</span> FAQ</p><h2 class="h2" style="margin-top:18px">Questions operators and developers ask</h2><p class="lede" style="margin-top:18px">More in the <a href="/knowledge-base/corsia-faq/">full CORSIA FAQ</a>.</p></div>
  <div class="faq">${faq.paragraphs.map((p) => { const i = p.indexOf("? "); return i < 0 ? "" : `<details><summary>${esc(p.slice(0, i + 1))}</summary><p>${inline(p.slice(i + 2))}</p></details>`; }).join("")}</div>
</div></section>
${ctaBand()}`;

  emit("/services/", page({
    breadcrumbs: [{ name: "CORSIA Services", url: "/services/" }],
    path: "/services/",
    title: "CORSIA Carbon Credit Services",
    description: service.shortDescription,
    ogImage: AVIATION_IMG,
    body,
    jsonld: {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faq.paragraphs.filter((p) => p.includes("? ")).map((p) => {
        const i = p.indexOf("? ");
        return { "@type": "Question", name: p.slice(0, i + 1), acceptedAnswer: { "@type": "Answer", text: p.slice(i + 2).replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") } };
      }),
    },
  }));
}

// ---------------------------------------------------------------- calculator
function calculator() {
  const body = `
${phead({
  crumbs: [{ label: "Calculator" }],
  img: PHOTOS.calculator,
  eyebrow: "CORSIA offsetting estimator",
  title: "Estimate your offsetting requirement",
  lede: "A first-pass estimate using the CORSIA fuel conversion factors and the growth factor you enter. It is not a compliance calculation — your verified Annual Emissions Report and ICAO’s published factors govern.",
})}
<section class="section section--tight"><div class="wrap">
  <div class="calc" id="calc">
    <div class="calc__in">
      <span class="flabel">Emissions input</span>
      <div class="seg" role="group" aria-label="Input method"><button data-mode="fuel" aria-pressed="true">From fuel burned</button><button data-mode="co2" aria-pressed="false">From CO₂ directly</button></div>
      <div id="c-fuel-wrap" class="frow">
        <div class="fgroup"><label for="c-fuel">Fuel on in-scope international routes (tonnes)</label><input id="c-fuel" class="field" type="number" min="0" step="100" value="120000"></div>
        <div class="fgroup"><label for="c-fueltype">Fuel type</label><select id="c-fueltype" class="field"><option value="jet">Jet-A / Jet-A1 (3.16 tCO₂/t)</option><option value="avgas">AvGas / Jet-B (3.10 tCO₂/t)</option></select></div>
      </div>
      <div id="c-co2-wrap" class="fgroup hidden"><label for="c-co2">CO₂ emissions on in-scope routes (tonnes)</label><input id="c-co2" class="field" type="number" min="0" step="1000" value="379200"></div>
      <div class="frow">
        <div class="fgroup"><label for="c-gf">Growth factor for the year (%)</label><input id="c-gf" class="field" type="number" min="0" max="100" step="0.01" value="5"><p class="hint">Illustrative. Use ICAO’s published sectoral growth factor for the compliance year.</p></div>
        <div class="fgroup"><label for="c-saf">Eligible-fuel reduction claimed (tCO₂)</label><input id="c-saf" class="field" type="number" min="0" step="100" value="0"><p class="hint">Emissions reductions from CORSIA Eligible Fuels, if any.</p></div>
      </div>
      <div class="frow">
        <div class="fgroup"><label for="c-price">Assumed unit price (USD / tCO₂e)</label><input id="c-price" class="field" type="number" min="0" step="0.5" value="18"><p class="hint">Eligible units trade at a premium to general voluntary credits.</p></div>
        <div class="fgroup"><label for="c-fx">USD → INR rate</label><input id="c-fx" class="field" type="number" min="0" step="0.1" value="84"></div>
      </div>
    </div>
    <div class="calc__out" aria-live="polite">
      <p class="eyebrow">Estimate</p>
      <div class="out-big"><div class="k">Units to cancel</div><div class="v" id="o-net">—</div></div>
      <div class="out-row"><span>In-scope CO₂ emissions</span><b id="o-em">—</b></div>
      <div class="out-row"><span>Requirement before fuel reductions</span><b id="o-gross">—</b></div>
      <div class="out-row"><span>Eligible-fuel reduction</span><b id="o-saf">—</b></div>
      <div class="out-row"><span>Indicative cost</span><b id="o-cost">—</b></div>
      <div class="out-row"><span></span><b id="o-cost-inr" style="color:var(--on-forest-2)">—</b></div>
      <p id="o-threshold" class="hidden" style="margin:18px 0 0;color:var(--brass-soft);font-size:.9rem">Below 10,000 tCO₂ a year from international flights, operators are outside CORSIA’s offsetting requirements. Check your position before relying on this.</p>
      <div class="formula">requirement = emissions × growth factor − eligible-fuel reductions<br>emissions = fuel (t) × fuel conversion factor</div>
      <p style="margin-top:24px;display:flex;gap:10px;flex-wrap:wrap"><a id="o-wa" class="btn btn--light" href="#" target="_blank" rel="noopener">Get a proper assessment ${arrow}</a><a class="btn btn--line-light" href="/knowledge-base/corsia-offsetting-requirement-calculation/">How the calculation works</a></p>
    </div>
  </div>
</div></section>
<section class="section section--rule section--tight"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">What this leaves out</p><h2 class="h2">Why the real number will differ</h2></div></div>
  <div class="values">
    <div><b>Route scope</b><p>Only flights between participating States count, and participation changes by year. Your emissions on covered routes may be well below total international emissions.</p></div>
    <div><b>Sectoral vs individual</b><p>From 2030 part of the requirement is calculated on your own growth rather than the sector’s. This estimator uses a single factor.</p></div>
    <div><b>Verified data</b><p>The obligation is built on your verified Annual Emissions Report and the monitoring method in your approved Emissions Monitoring Plan.</p></div>
    <div><b>Unit eligibility</b><p>Only CORSIA Eligible Emissions Units with the right vintage and a corresponding adjustment discharge the obligation.</p></div>
  </div>
</div></section>
${ctaBand()}`;
  emit("/calculator/", page({ path: "/calculator/", breadcrumbs: [{ name: "Calculator", url: "/calculator/" }], title: "CORSIA Offsetting Requirement Calculator", description: "Estimate your CORSIA offsetting requirement from fuel burned or CO₂ emissions, growth factor and eligible-fuel reductions — with an indicative cost in USD and INR.", body }));
}

// ---------------------------------------------------------------- knowledge base
function knowledgeBase() {
  const body = `
${phead({
  crumbs: [{ label: "Knowledge Base" }],
  img: PHOTOS.kb,
  eyebrow: `<span class="n">${kb.length}</span> reference articles`,
  title: "The CORSIA <em class=\"it\">knowledge base</em>",
  lede: "A structured reference for aircraft operators, project developers and compliance teams — how the scheme works, what the obligations are, and what makes a unit eligible.",
  extra: `<div class="kb-search"><label class="sr-only" for="kb-search">Search the knowledge base</label>${searchIcon}<input id="kb-search" type="search" placeholder="Search — e.g. corresponding adjustment, vintage, DGCA" autocomplete="off" data-index="/search-index.json"><ul id="kb-results" class="kb-results"></ul></div>`,
})}
<section class="section section--tight"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow"><span class="n">${KB_TOPICS.length}</span> topics</p><h2 class="h2">Browse by topic</h2><p class="lede">Pick a part of the scheme. Each topic opens its own page with every article on it, in reading order.</p></div></div>
  <div class="kbt-grid">${KB_TOPICS.map((t, i) => topicCard(t, i)).join("")}</div>
</div></section>
<section class="section section--rule section--tight"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">New to CORSIA?</p><h2 class="h2">Start here</h2><p class="lede">Three articles, read in this order, give you the whole scheme in about twenty minutes.</p></div></div>
  <ol class="kb-path">${["what-is-corsia", "how-corsia-works", "corsia-eligible-emissions-units"].map((s, i) => { const a = kb.find((x) => x.slug === s); return a ? `<li><a href="/knowledge-base/${a.slug}/"><span class="kb-path__n">Step ${i + 1}</span><b>${esc(a.title.split(":")[0])}</b><span class="kb-path__x">${esc(a.excerpt)}</span><span class="kb-path__m">${readMins(a.body)} min read →</span></a></li>` : ""; }).join("")}</ol>
</div></section>
<section class="section section--rule section--paper2"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">Go further</p><h2 class="h2">Practical guides in Insights</h2><p class="lede">${insights.length} longer pieces on buying, selling, compliance practice and the Indian carbon market.</p></div><a class="btn btn--ghost" href="/insights/">Browse insights ${arrow}</a></div>
  <div class="acards">${insights.filter((a) => a.topic === "Airline Compliance").slice(0, 3).map((a) => articleCard(a, "insights")).join("")}</div>
</div></section>
${ctaBand()}`;
  emit("/knowledge-base/", page({ path: "/knowledge-base/", breadcrumbs: [{ name: "Knowledge Base", url: "/knowledge-base/" }], title: "CORSIA Knowledge Base", description: `A ${kb.length}-article reference on CORSIA: scope, phases, growth factors, MRV, eligible emissions units, corresponding adjustments, registries, eligible fuels, pricing and India.`, body }));

  // One page per topic
  KB_TOPICS.forEach((t, ti) => {
    const list = topicArticles(t);
    const related = topicRelated(t);
    const prevT = KB_TOPICS[ti - 1], nextT = KB_TOPICS[ti + 1];
    const body = `
<section class="phead kbt-head"><div class="wrap">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/knowledge-base/">Knowledge Base</a><span>/</span><span>${esc(t.section)}</span></nav>
  <div class="kbt-head__row">
    ${topicIcon(t, "kbt-ico kbt-ico--lg")}
    <div>
      <p class="eyebrow">Topic ${String(ti + 1).padStart(2, "0")} of ${KB_TOPICS.length} · ${list.length} articles</p>
      <h1 class="h1">${esc(t.section)}</h1>
      <p class="lede">${esc(t.blurb)}</p>
    </div>
  </div>
</div></section>
<section class="section section--tight"><div class="wrap kbt-layout">
  <aside class="kbt-side" aria-label="Knowledge base topics">
    <p class="side-label">All topics</p>
    ${KB_TOPICS.map((x) => `<a href="/knowledge-base/topic/${x.slug}/"${x.slug === t.slug ? ' aria-current="page"' : ""}>${topicIcon(x, "kbt-ico kbt-ico--sm")}<span>${esc(x.section)}</span><small>${topicArticles(x).length}</small></a>`).join("")}
    <a class="kbt-side__all" href="/knowledge-base/">← Knowledge base home</a>
  </aside>
  <div>
    <ol class="kbt-list">${list.map((a, i) => `<li><a href="/knowledge-base/${a.slug}/">
      <span class="kbt-list__n">${String(i + 1).padStart(2, "0")}</span>
      <span class="kbt-list__body"><b>${esc(a.title)}</b><span>${esc(a.excerpt)}</span><small>${readMins(a.body)} min read</small></span>
      <span class="kbt-list__go" aria-hidden="true">→</span>
    </a></li>`).join("")}</ol>
    ${related.length ? `<div class="kbt-related"><h2 class="h3">Related guides from Insights</h2><div class="kbt-related__grid">${related.map((a) => `<a href="/insights/${a.slug}/"><small>${esc(a.topic)}</small><b>${esc(a.title)}</b></a>`).join("")}</div></div>` : ""}
    <div class="pager">
      ${prevT ? `<a href="/knowledge-base/topic/${prevT.slug}/"><span>← Previous topic</span><b>${esc(prevT.section)}</b></a>` : "<div></div>"}
      ${nextT ? `<a class="next" href="/knowledge-base/topic/${nextT.slug}/"><span>Next topic →</span><b>${esc(nextT.section)}</b></a>` : ""}
    </div>
  </div>
</div></section>
${ctaBand()}`;
    emit(`/knowledge-base/topic/${t.slug}/`, page({
      path: `/knowledge-base/topic/${t.slug}/`,
      title: `${t.section} — CORSIA Knowledge Base`,
      description: t.blurb,
      body,
      breadcrumbs: [{ name: "Knowledge Base", url: "/knowledge-base/" }, { name: t.section, url: `/knowledge-base/topic/${t.slug}/` }],
      jsonld: { "@context": "https://schema.org", "@type": "CollectionPage", name: `${t.section} — CORSIA Knowledge Base`, description: t.blurb, url: `${site.url}/knowledge-base/topic/${t.slug}/`, isPartOf: { "@id": `${site.url}/#website` },
        hasPart: list.map((a) => ({ "@type": "TechArticle", headline: a.title, url: `${site.url}/knowledge-base/${a.slug}/` })) },
    }));
  });

  kb.forEach((a, i) => {
    const r = renderMarkdown(a.body);
    const prev = kb[i - 1], next = kb[i + 1];
    const nav = KB_TOPICS.map((t) => `<p class="side-label"><a class="kbnav__topic" href="/knowledge-base/topic/${t.slug}/">${esc(t.section)}</a></p>${topicArticles(t).map((x) => `<a href="/knowledge-base/${x.slug}/"${x.slug === a.slug ? ' aria-current="page"' : ""}>${esc(x.title.split(":")[0])}</a>`).join("")}`).join("");
    const t = topicOf(a.section);
    const body = `
<div class="wrap"><div class="doc-grid" style="padding-top:clamp(28px,4vw,48px)">
  <aside class="kbnav" aria-label="Knowledge base">${nav}</aside>
  <article>
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/knowledge-base/">Knowledge Base</a><span>/</span><a href="/knowledge-base/topic/${t.slug}/">${esc(a.section)}</a></nav>
    <h1 class="h1" style="margin:18px 0 18px">${esc(a.title)}</h1>
    <p class="lede">${esc(a.excerpt)}</p>
    <div class="art-meta"><a class="art-meta__topic" href="/knowledge-base/topic/${t.slug}/">${topicIcon(t, "kbt-ico kbt-ico--xs")}${esc(a.section)}</a><span>${r.minutes} min read</span><span>Article ${String(a.order).padStart(2, "0")} of ${kb.length}</span></div>
    <hr style="border:0;border-top:1px solid var(--line);margin:28px 0 36px">
    <div class="prose">${r.html}</div>
    <div class="pager">
      ${prev ? `<a href="/knowledge-base/${prev.slug}/"><span>← Previous</span><b>${esc(prev.title)}</b></a>` : "<div></div>"}
      ${next ? `<a class="next" href="/knowledge-base/${next.slug}/"><span>Next →</span><b>${esc(next.title)}</b></a>` : ""}
    </div>
    <div class="callout"><div><h3>Need this applied to your position?</h3><p>We assess operators’ obligations and developers’ eligibility pathways directly.</p></div><a class="btn btn--light" href="/contact/?topic=corsia">Talk to the desk ${arrow}</a></div>
  </article>
  <aside class="toc" aria-label="On this page">${r.toc.length ? `<p class="side-label">On this page</p>${r.toc.map((t) => `<a href="#${t.id}" class="lvl${t.depth}">${esc(t.text)}</a>`).join("")}` : ""}</aside>
</div></div>
<div style="height:80px"></div>`;
    emit(`/knowledge-base/${a.slug}/`, page({
      path: `/knowledge-base/${a.slug}/`, title: a.metaTitle || a.title, description: a.metaDescription || a.excerpt, body, ogType: "article", ogImage: a.ogImage,
      breadcrumbs: [{ name: "Knowledge Base", url: "/knowledge-base/" }, { name: t.section, url: `/knowledge-base/topic/${t.slug}/` }, { name: a.title, url: `/knowledge-base/${a.slug}/` }],
      jsonld: [articleLd(a, `/knowledge-base/${a.slug}/`, "TechArticle", a.section), ...(FAQ_PAGES.has(a.slug) ? [faqLd(a.body)].filter(Boolean) : [])],
    }));
  });
}

// ---------------------------------------------------------------- insights
function insightsPages() {
  const tc = (t) => insights.filter((a) => a.topic === t).length;
  const body = `
${phead({
  crumbs: [{ label: "Insights" }],
  img: PHOTOS.insights,
  eyebrow: `<span class="n">${insights.length}</span> articles`,
  title: "Insights from the <em class=\"it\">carbon desk</em>",
  lede: "Practical guides on CORSIA compliance, buying and selling credits, pricing, due diligence and India’s carbon market.",
})}
<section class="section section--tight" id="insights"><div class="wrap">
  <div class="chips" role="group" aria-label="Topic" style="margin-bottom:40px">
    <button class="chip" data-topic="All" aria-pressed="true">All <span>${insights.length}</span></button>
    ${topics.map((t) => `<button class="chip" data-topic="${esc(t)}" aria-pressed="false">${esc(t)} <span>${tc(t)}</span></button>`).join("")}
  </div>
  <h2 class="sr-only">All articles</h2>
  <div class="acards">${insights.map((a) => articleCard(a, "insights")).join("")}</div>
  <div class="more"><button id="ins-more" class="btn btn--ghost">Load more</button></div>
</div></section>
${ctaBand()}`;
  emit("/insights/", page({ path: "/insights/", breadcrumbs: [{ name: "Insights", url: "/insights/" }], title: "Insights", description: "Guides and analysis on CORSIA compliance, carbon credit buying and selling, pricing, due diligence and the Indian carbon market.", body }));

  insights.forEach((a) => {
    const r = renderMarkdown(a.body);
    const related = insights.filter((x) => x.topic === a.topic && x.slug !== a.slug).slice(0, 3);
    const body = `
<div class="wrap">
  <header class="art-head" style="max-width:1040px">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/insights/">Insights</a><span>/</span><a href="/insights/?topic=${encodeURIComponent(a.topic)}">${esc(a.topic)}</a></nav>
    <h1 class="h1">${esc(a.title)}</h1>
    <p class="lede">${esc(a.excerpt)}</p>
    <div class="art-meta"><span>${dateLong(a.date)}</span><span>${r.minutes} min read</span><span>By the CORSIA Carbon Credit desk</span></div>
  </header>
  <div class="doc-grid doc-grid--2">
    <article>
      <div class="art-cover"><img src="${a.image}" alt="" width="1200" height="630"></div>
      <div class="prose">${r.html}</div>
      ${a.tags?.length ? `<div class="tags">${a.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
    </article>
    <aside class="toc" aria-label="On this page">${r.toc.filter((t) => t.depth === 2).length ? `<p class="side-label">On this page</p>${r.toc.filter((t) => t.depth === 2).map((t) => `<a href="#${t.id}">${esc(t.text)}</a>`).join("")}` : ""}</aside>
  </div>
</div>
${related.length ? `<section class="section section--rule section--paper2" style="margin-top:80px"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">Keep reading</p><h2 class="h2">More on ${esc(a.topic)}</h2></div><a class="btn btn--ghost" href="/insights/?topic=${encodeURIComponent(a.topic)}">All ${esc(a.topic)} ${arrow}</a></div>
  <div class="acards">${related.map((x) => articleCard(x, "insights")).join("")}</div>
</div></section>` : ""}
${ctaBand()}`;
    emit(`/insights/${a.slug}/`, page({
      path: `/insights/${a.slug}/`, title: a.metaTitle || a.title, description: a.metaDescription || a.excerpt, body, ogType: "article", ogImage: a.ogImage,
      breadcrumbs: [{ name: "Insights", url: "/insights/" }, { name: a.title, url: `/insights/${a.slug}/` }],
      jsonld: articleLd(a, `/insights/${a.slug}/`, "Article", a.topic),
    }));
  });
}

// ---------------------------------------------------------------- about
function about() {
  const a = site.address;
  const body = `
${phead({
  crumbs: [{ label: "About" }],
  img: PHOTOS.about,
  eyebrow: `A DSTechnoverse desk · since ${site.parent.founded}`,
  title: "Carbon credits run on data. <em class=\"it\">We start there.</em>",
  lede: "Fuel records, growth factors, unit serial numbers and registry balances decide whether a compliance filing holds up. Getting those numbers right is most of our job.",
})}
<section class="section"><div class="wrap split">
  <div>
    <p class="eyebrow"><span class="n">01</span> Who we are</p>
    <h2 class="h2" style="margin-top:18px">Built inside an environmental data consultancy.</h2>
  </div>
  <div class="prose">
    <p>${esc(site.name)} is the carbon markets desk of <a href="${site.parent.url}" target="_blank" rel="noopener">DSTechnoverse</a>, founded in ${site.parent.founded} in Indore, Madhya Pradesh. Over the last decade DSTechnoverse has grown from a software and digital agency into an environmental data and analytics consultancy — air quality analysis, AERMOD dispersion modelling, EIA data work, socio-economic surveys and statistical analysis — serving ${site.clients} clients.</p>
    <p>That background shapes how we approach carbon credits. We work on both sides of the market: aircraft operators managing CORSIA compliance, companies retiring credits against their claims, and project developers trying to place units with buyers who will actually accept them.</p>
    <p>We are also open about what nobody knows yet. ICAO still revises programme approvals and vintage windows, host governments handle authorisation very differently, and the rules for the second phase are still being negotiated. We tell clients where the ground is firm and where it isn’t.</p>
  </div>
</div></section>

<div class="wrap"><div class="figures" style="border-top:1px solid var(--line)">
  <div class="figure"><div class="figure__n">${site.parent.founded}</div><div class="figure__l">DSTechnoverse founded, Indore</div></div>
  <div class="figure"><div class="figure__n">${site.clients}</div><div class="figure__l">Clients across the wider firm</div></div>
  <div class="figure"><div class="figure__n">${projects.length}</div><div class="figure__l">Projects on the marketplace</div></div>
  <div class="figure"><div class="figure__n">${kb.length + insights.length}</div><div class="figure__l">Published guides on carbon markets</div></div>
</div></div>

<section class="section"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow"><span class="n">02</span> Principles</p><h2 class="h2">How we work</h2></div></div>
  <div class="values">
    <div><b>Will it work? First.</b><p>Our first answer tells you whether the route you have in mind can work at all, before you pay anyone to pursue it.</p></div>
    <div><b>A written trail</b><p>Every recommendation is written down with its reasons, so it still makes sense to a verifier or auditor years later.</p></div>
    <div><b>Buyers and sellers</b><p>Working with both tells us what supply really exists and what buyers will accept.</p></div>
    <div><b>Risks spelled out</b><p>Vintage, authorisation, approval and price risk are set out in writing, not buried in a footnote.</p></div>
  </div>
</div></section>

<section class="section section--rule section--paper2"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow"><span class="n">03</span> People</p><h2 class="h2">The team</h2></div><a class="btn btn--ghost" href="${site.parent.url}/team" target="_blank" rel="noopener">Full DSTechnoverse team ↗</a></div>
  <div class="team">${site.team.map((m) => `<div class="member"><img src="${m.image}" alt="${esc(m.name)}" loading="lazy"><div><h3>${esc(m.name)}</h3><p class="role">${esc(m.role)}</p><p>${esc(m.bio)}</p><div class="links">${m.links.map((l) => `<a class="link" href="${l.url}" target="_blank" rel="noopener">${l.name}</a>`).join("")}</div></div></div>`).join("")}</div>
</div></section>

<section class="section section--rule"><div class="wrap split">
  <div><p class="eyebrow"><span class="n">04</span> Office</p><h2 class="h2" style="margin-top:18px">Indore, Madhya Pradesh</h2><p class="lede" style="margin-top:18px">We work with operators and developers across India and internationally.</p></div>
  <ul class="cinfo">
    <li><span class="k">Address</span><span class="v">${a.line1}, ${a.line2}, ${a.city}, ${a.region} ${a.postcode}</span></li>
    <li><span class="k">Phone</span><a href="${site.phoneHref}">${site.phone}</a></li>
    <li><span class="k">Email</span><a href="mailto:${site.email}">${site.email}</a></li>
  </ul>
</div></section>
${ctaBand()}`;
  emit("/about/", page({ path: "/about/", breadcrumbs: [{ name: "About", url: "/about/" }], title: "About", description: `${site.name} is the carbon markets desk of DSTechnoverse, an environmental data and analytics consultancy in Indore founded in ${site.parent.founded}.`, body }));
}

// ---------------------------------------------------------------- contact
function contact() {
  const a = site.address;
  const projMap = Object.fromEntries(projects.map((p) => [p.slug, p.name]));
  const body = `
${phead({
  crumbs: [{ label: "Contact" }],
  img: PHOTOS.contact,
  eyebrow: "Contact the desk",
  title: "Tell us what you need.",
  lede: "Buying, selling, or working out a CORSIA obligation — describe your position and we’ll respond with an assessment rather than a brochure.",
})}
<section class="section section--tight"><div class="wrap contact-grid">
  <div>
    <ul class="cinfo">
      <li><span class="k">Phone / WhatsApp</span><a href="${site.phoneHref}">${site.phone}</a></li>
      <li><span class="k">Email</span><a href="mailto:${site.email}">${site.email}</a></li>
      <li><span class="k">Office</span><span class="v">${a.line1}<br>${a.line2}<br>${a.city}, ${a.region} ${a.postcode}</span></li>
      <li><span class="k">Hours</span><span class="v">${site.hours}</span></li>
      <li><span class="k">Structured intake</span><a href="${site.intake.buy}" target="_blank" rel="noopener">Post a buy requirement ↗</a><br><a href="${site.intake.sell}" target="_blank" rel="noopener">List inventory ↗</a></li>
    </ul>
    <div class="map"><iframe title="Office location" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=${encodeURIComponent(`${a.line1}, ${a.line2}, ${a.city} ${a.postcode}`)}&z=15&output=embed"></iframe></div>
  </div>
  <form class="form" id="enquiry" data-email="${site.email}" data-projects="${esc(JSON.stringify(projMap))}" novalidate>
    <div class="fgroup"><label for="f-topic">I want to</label>
      <select id="f-topic" name="topic" class="field">
        <option value="buy">Buy carbon credits</option>
        <option value="corsia">Meet a CORSIA obligation (aircraft operator)</option>
        <option value="sell">Sell credits / list a project</option>
        <option value="develop">Develop a new carbon project</option>
        <option value="question">Ask a question</option>
      </select></div>
    <div class="frow">
      <div class="fgroup"><label for="f-name">Name</label><input id="f-name" name="name" class="field" required autocomplete="name"></div>
      <div class="fgroup"><label for="f-company">Organisation</label><input id="f-company" name="company" class="field" autocomplete="organization"></div>
    </div>
    <div class="frow">
      <div class="fgroup"><label for="f-email">Email</label><input id="f-email" name="email" type="email" class="field" required autocomplete="email"></div>
      <div class="fgroup"><label for="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" class="field" autocomplete="tel"></div>
    </div>
    <div class="fgroup"><label for="f-volume">Indicative volume (tCO₂e, optional)</label><input id="f-volume" name="volume" class="field" inputmode="numeric"></div>
    <div class="fgroup"><label for="f-message">Your requirement</label><textarea id="f-message" name="message" class="field" required placeholder="Programmes and vintages you can accept, timing, CORSIA or Article 6 conditions…"></textarea></div>
    <div class="form__actions">
      <button class="btn" type="submit" value="whatsapp"><span class="btn-wa-ico">${waIcon}</span>Send via WhatsApp</button>
      <button class="btn btn--ghost" type="submit" value="email">Send by email</button>
    </div>
    <p class="form__ok">Your message is ready in WhatsApp or your email app — press send there and we’ll reply within one working day.</p>
    <p class="small muted" style="margin:16px 0 0">Nothing you type here is stored on this website. See our <a href="/privacy/">privacy note</a>.</p>
  </form>
</div></section>`;
  emit("/contact/", page({ path: "/contact/", breadcrumbs: [{ name: "Contact", url: "/contact/" }], title: "Contact", description: `Contact the ${site.name} desk in Indore — ${site.phone}, ${site.email}.`, body }));
}

// ---------------------------------------------------------------- legal + 404
function legal() {
  const privacy = `
${phead({ crumbs: [{ label: "Privacy" }], title: "Privacy note" })}
<section class="section section--tight"><div class="wrap"><div class="prose legal">
<p>This website is operated by DSTechnoverse, ${site.address.line1}, ${site.address.line2}, ${site.address.city} ${site.address.postcode}, India.</p>
<h2 id="forms">Enquiry forms</h2><p>The contact form does not send data to our servers. When you press send, it opens WhatsApp or your email app with your message pre-filled; nothing is transmitted until you send it there. We then hold your message and contact details only to respond to you and to carry out any work you ask for.</p>
<h2 id="third-parties">Third-party services</h2><p>Pages load fonts from Google Fonts, project photographs from Unsplash and, on the contact page, a Google Maps embed. These providers receive your IP address when your browser requests their content. The buyer and seller intake forms run on a separate platform at ${site.intake.home.replace(/^https:\/\//, "").replace(/\/$/, "")}, which has its own terms.</p>
<h2 id="storage">Browser storage</h2><p>The marketplace remembers whether you prefer grid or table view in your browser’s local storage. No tracking cookies are set by this site.</p>
<h2 id="contact">Contact</h2><p>For any request about your data, email <a href="mailto:${site.email}">${site.email}</a>.</p>
</div></div></section>`;
  emit("/privacy/", page({ path: "/privacy/", breadcrumbs: [{ name: "Privacy", url: "/privacy/" }], title: "Privacy", body: privacy }));

  const terms = `
${phead({ crumbs: [{ label: "Terms" }], title: "Terms of use" })}
<section class="section section--tight"><div class="wrap"><div class="prose legal">
<h2 id="listings">Listings are indicative</h2><p>Prices, volumes, vintages and delivery terms shown on the marketplace are indicative. No listing is an offer capable of acceptance. Availability, registry status and — for CORSIA use — programme approval, vintage eligibility and host-State authorisation are confirmed in writing before any contract.</p>
<h2 id="no-payment">No payments on this site</h2><p>This website does not take payments. Transactions are documented and executed separately, with transfer and retirement recorded on the relevant registry.</p>
<h2 id="information">Information, not advice</h2><p>The knowledge base, insights and calculator are general information. CORSIA rules are set by ICAO and implemented by national authorities, and they change. Check the official documents and take advice on your specific position before relying on anything here.</p>
<h2 id="icao">No affiliation</h2><p>CORSIA is a scheme of the International Civil Aviation Organization. This website is independent and is not affiliated with or endorsed by ICAO, any registry or any crediting programme named on it.</p>
<h2 id="law">Governing law</h2><p>These terms are governed by the laws of India, with courts at Indore, Madhya Pradesh having jurisdiction.</p>
</div></div></section>`;
  emit("/terms/", page({ path: "/terms/", breadcrumbs: [{ name: "Terms", url: "/terms/" }], title: "Terms", body: terms }));

  const nf = `
<section class="phead" style="border:0;padding-bottom:120px"><div class="wrap">
  <p class="eyebrow"><span class="n">404</span> Not found</p>
  <h1 class="display" style="margin:22px 0">This page has been <em class="it">retired.</em></h1>
  <p class="lede">The link may be old, or the listing may have sold out.</p>
  <div class="hero__actions"><a class="btn" href="/">Home ${arrow}</a><a class="btn btn--ghost" href="/marketplace/">Marketplace</a><a class="btn btn--ghost" href="/knowledge-base/">Knowledge base</a></div>
</div></section>`;
  const html = page({ path: "/404.html", title: "Page not found", body: nf, noindex: true });
  fs.writeFileSync(path.join(OUT, "404.html"), html);
}

// ---------------------------------------------------------------- assets, index, sitemap
function assets() {
  fs.mkdirSync(path.join(OUT, "assets"), { recursive: true });
  const css = fs.readFileSync(path.join(SRC, "assets/css/main.css"), "utf8")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{};])\s*/g, "$1")
    .trim();
  fs.writeFileSync(path.join(OUT, "assets/main.css"), css);
  fs.copyFileSync(path.join(SRC, "assets/js/main.js"), path.join(OUT, "assets/main.js"));
  fs.cpSync(path.join(SRC, "public"), OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, "favicon.svg"),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><rect width="34" height="34" rx="7" fill="#10261f"/><g color="#ece6d6" transform="translate(3 3) scale(.824)">${mark("").replace(/^<svg[^>]*>|<\/svg>$/g, "")}</g></svg>`);

  const strip = (md) => md.replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/[#*_>|:`-]+/g, " ");
  const idx = [
    ...kb.map((a) => ({ title: a.title, url: `/knowledge-base/${a.slug}/`, group: `Knowledge base · ${a.section}`, text: (a.excerpt + " " + strip((a.body.match(/^#{2,3} .+$/gm) || []).join(" "))).toLowerCase() })),
    ...insights.map((a) => ({ title: a.title, url: `/insights/${a.slug}/`, group: `Insights · ${a.topic}`, text: (a.excerpt + " " + (a.tags || []).join(" ") + " " + strip((a.body.match(/^#{2,3} .+$/gm) || []).join(" "))).toLowerCase() })),
    ...projects.map((p) => ({ title: p.name, url: `/marketplace/${p.slug}/`, group: `Marketplace · ${p.category}`, text: [p.summary, p.country, p.registry, p.methodology].join(" ").toLowerCase() })),
  ];
  fs.writeFileSync(path.join(OUT, "search-index.json"), JSON.stringify(idx));

  // Articles report the date their file last changed; every other page the build date.
  const lastmodOf = (p) => {
    const m = p.match(/^\/(knowledge-base|insights)\/([^/]+)\/$/);
    const a = m && (m[1] === "insights" ? insights : kb).find((x) => x.slug === m[2]);
    if (!a) return today;
    return [a.date, datesOf(a).last].filter(Boolean).sort().pop();
  };
  fs.writeFileSync(path.join(OUT, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${site.url}${p}</loc><lastmod>${lastmodOf(p)}</lastmod></url>`).join("\n")}\n</urlset>\n`);
  fs.writeFileSync(path.join(OUT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
}

// ---------------------------------------------------------------- run
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
home();
marketplace();
services();
calculator();
knowledgeBase();
insightsPages();
about();
contact();
legal();
assets();
console.log(`Built ${pages.length} pages → dist/`);
