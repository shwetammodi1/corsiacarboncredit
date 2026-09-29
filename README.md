# corsiacarboncredit.com

Carbon credit marketplace, CORSIA advisory and knowledge base, run by DSTechnoverse.

## Run it

```
npm install
npm run dev        # builds to dist/ and serves it at http://localhost:4321
npm run build      # build only
```

`dist/` is plain static HTML.

## Deploy

Hosted on Cloudflare Pages as the project `corsiacarboncredit` → https://corsiacarboncredit.pages.dev

```
npm run deploy     # builds and uploads to Cloudflare Pages
```

When the `corsiacarboncredit.com` domain is connected, change `url` in `src/data/site.js` and deploy again.

## Where to edit things

| What | File |
|---|---|
| Phone, email, address, socials, team, buy/sell intake links | `src/data/site.js` |
| Marketplace listings | `src/data/projects.json` |
| Knowledge base articles (30) | `src/content/knowledge-base/*.md` |
| Insights / blog posts (126) | `src/content/insights/*.md` |
| CORSIA services page copy | `src/data/corsia-service.json` |
| Page layouts | `build.mjs`, `src/lib/layout.mjs` |
| Styles / scripts | `src/assets/css/main.css`, `src/assets/js/main.js` |

To add an article, copy an existing `.md` file, change the front matter at the top and the text below it, then rebuild.
Each project in `projects.json` needs a unique `slug`. Its page is created at `/marketplace/<slug>/`.

## Content source

Articles, diagrams, listings and service copy were imported from dstechnoverse.com. The diagrams were recoloured to this site's palette.
