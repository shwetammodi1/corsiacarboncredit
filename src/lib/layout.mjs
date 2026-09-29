import { site, nav } from "../data/site.js";

export const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export const fmt = (n, d = 0) =>
  Number(n).toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });

export const arrow = `<span class="arrow" aria-hidden="true">→</span>`;

export const mark = (cls = "brand__mark") => `<svg class="${cls}" viewBox="0 0 34 34" aria-hidden="true">
  <circle cx="17" cy="17" r="15.6" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <path d="M22.6 11.2a8.2 8.2 0 1 0 0 11.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M13.5 17H28" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="28.4" cy="17" r="2" fill="currentColor"/>
</svg>`;

const brand = () => `<a class="brand" href="/" aria-label="${esc(site.name)} — home">
  ${mark()}
  <span class="brand__text"><span class="brand__top">CORSIA</span><span class="brand__main">Carbon Credit</span></span>
</a>`;

const searchIcon = `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="8.5" cy="8.5" r="6"/><path d="m13 13 5 5"/></svg>`;
export { searchIcon };


export const waIcon = `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.02 3C8.84 3 3 8.83 3 16c0 2.3.6 4.54 1.75 6.52L3 29l6.65-1.72A12.98 12.98 0 0 0 16.02 29C23.2 29 29 23.17 29 16S23.2 3 16.02 3Zm0 23.76c-1.95 0-3.86-.52-5.53-1.51l-.4-.24-3.95 1.02 1.05-3.84-.26-.4A10.7 10.7 0 0 1 5.28 16c0-5.93 4.82-10.75 10.74-10.75 5.93 0 10.74 4.82 10.74 10.75 0 5.92-4.81 10.76-10.74 10.76Zm5.9-8.05c-.32-.16-1.91-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.22-.37.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.8-2.23-.18-.32-.02-.5.15-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.11 1.31 3.32c.16.22 2.26 3.45 5.48 4.84.77.33 1.37.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.62-.37Z"/></svg>`;

export const waLink = (text) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

function header(path) {
  const cur = (href) => (path.startsWith(href) ? ' aria-current="page"' : "");
  return `<a class="skip" href="#main">Skip to content</a>
<div class="strip"><div class="wrap">
  <div class="strip__l"><span class="strip__parent">A <a href="${site.parent.url}" target="_blank" rel="noopener">DSTechnoverse</a> desk</span><span class="hide-sm">Indore, India · since ${site.parent.founded}</span></div>
  <div class="strip__r"><a href="https://wa.me/${site.whatsapp}" target="_blank" rel="noopener">WhatsApp</a><a href="${site.phoneHref}">${site.phone}</a><a href="mailto:${site.email}">${site.email}</a></div>
</div></div>
<header class="header"><div class="wrap">
  ${brand()}
  <nav class="nav" aria-label="Main">${nav.map((n) => `<a href="${n.href}"${cur(n.href)}>${n.label}</a>`).join("")}</nav>
  <div class="header__cta"><a class="btn btn--sm" href="/contact/">Talk to the desk</a></div>
  <button class="menu-btn" aria-expanded="false" aria-controls="mnav">Menu</button>
</div>
<nav class="mobile-nav" id="mnav" data-open="false" aria-label="Mobile">
  ${nav.map((n) => `<a href="${n.href}">${n.label}</a>`).join("")}
  <a href="/contact/">Contact</a>
  <div class="mobile-nav__cta"><a class="btn" href="/marketplace/">Browse credits</a><a class="btn btn--ghost" href="${site.phoneHref}">Call</a></div>
</nav>
</header>`;
}

export function ctaBand({ title = `Tell us where you stand.<br><em class="it">We’ll tell you what’s achievable.</em>`, text } = {}) {
  return `<section class="cta-band"><div class="cta-band__bg"><img src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=70" alt="" loading="lazy"></div><div class="wrap">
  <div>
    <p class="eyebrow" style="color:var(--on-forest-2)">Start a conversation</p>
    <h2 style="margin-top:18px">${title}</h2>
    <p>${text || "Whether you are an operator with an offsetting obligation, a company retiring credits, or a developer with units to place — the first call is an honest assessment, not a sales pitch."}</p>
  </div>
  <div class="cta-band__act">
    <div class="row">
      <a class="btn btn--light" href="/contact/">Send an enquiry ${arrow}</a>
      <a class="btn btn--line-light" href="${waLink("Hi, I'd like to discuss carbon credits.")}" target="_blank" rel="noopener"><span class="btn-wa-ico">${waIcon}</span>WhatsApp us</a>
    </div>
    <div class="cta-band__phone">or call <a href="${site.phoneHref}">${site.phone}</a> · ${site.hours}</div>
  </div>
</div></section>`;
}

function footer() {
  const a = site.address;
  return `<footer class="footer"><div class="wrap">
  <div class="footer__grid">
    <div>
      ${brand()}
      <p class="footer__about">A carbon credit marketplace and CORSIA advisory desk operated by <a href="${site.parent.url}" target="_blank" rel="noopener">DSTechnoverse</a>, an environmental data and analytics consultancy in Indore.</p>
      <p style="margin-top:18px">${a.line1}, ${a.line2}<br>${a.city}, ${a.region} ${a.postcode}</p>
    </div>
    <div><h4>Market</h4><ul>
      <li><a href="/marketplace/">All listings</a></li>
      <li><a href="/marketplace/?category=Forestry">Forestry</a></li>
      <li><a href="/marketplace/?category=Renewable">Renewable</a></li>
      <li><a href="/marketplace/?category=Blue%20Carbon">Blue carbon</a></li>
      <li><a href="${site.intake.sell}" target="_blank" rel="noopener">List your project</a></li>
    </ul></div>
    <div><h4>CORSIA</h4><ul>
      <li><a href="/services/">Advisory services</a></li>
      <li><a href="/calculator/">Offsetting estimator</a></li>
      <li><a href="/knowledge-base/what-is-corsia/">What is CORSIA?</a></li>
      <li><a href="/knowledge-base/corsia-eligible-emissions-units/">Eligible units</a></li>
      <li><a href="/knowledge-base/corsia-in-india/">CORSIA in India</a></li>
    </ul></div>
    <div><h4>Learn</h4><ul>
      <li><a href="/knowledge-base/">Knowledge base</a></li>
      <li><a href="/insights/">Insights</a></li>
      <li><a href="/knowledge-base/corsia-glossary/">Glossary</a></li>
      <li><a href="/knowledge-base/corsia-faq/">FAQ</a></li>
    </ul></div>
    <div><h4>Company</h4><ul>
      <li><a href="/about/">About</a></li>
      <li><a href="/contact/">Contact</a></li>
      <li><a href="${site.parent.url}" target="_blank" rel="noopener">DSTechnoverse</a></li>
      ${site.social.map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></li>`).join("")}
    </ul></div>
  </div>
  <div class="footer__bottom">
    <p class="footer__legal">© ${new Date().getFullYear()} DSTechnoverse. CORSIA is a scheme of the International Civil Aviation Organization (ICAO); this site is independent and not affiliated with or endorsed by ICAO. Listings are indicative and subject to confirmation of availability, eligibility and registry status before contract.</p>
    <p><a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a></p>
  </div>
</div></footer>`;
}

export function page({ path, title, description, body, jsonld, ogImage, noindex }) {
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} — CORSIA-eligible & voluntary carbon credits`;
  const url = site.url + path;
  const desc = description || site.description;
  const og = ogImage && ogImage.startsWith("http") && !ogImage.endsWith(".svg")
    ? ogImage
    : "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&h=630&q=70";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
${noindex ? '<meta name="robots" content="noindex">' : ""}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#10261f">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/main.css?v=${BUILD_ID}">
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ""}
</head>
<body data-wa="${site.whatsapp}">
${header(path)}
<main id="main">
${body}
</main>
${footer()}
<a class="wa-float" href="${waLink(`Hi, I found you on ${site.name}${title ? ` (${title})` : ""}. I have a question about carbon credits.`)}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">${waIcon}<span class="wa-float__label">Chat on WhatsApp</span></a>
<script src="/assets/main.js?v=${BUILD_ID}" defer></script>
</body>
</html>
`;
}

const BUILD_ID = Date.now().toString(36);
