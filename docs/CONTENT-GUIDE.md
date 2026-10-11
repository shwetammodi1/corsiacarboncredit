# Blog aur Knowledge Base mein naya content kaise jodein

Site par do tarah ke articles hain:

| Kya | Website par kahan | Abhi kitne |
|---|---|---|
| **Blog posts** | `corsiacarboncredit.in/blog/<slug>/` | 0 (naye posts aane baaki hain) |
| **Knowledge base articles** | `corsiacarboncredit.in/knowledge-base/<slug>/` | 32 |

Naya article jodne ke **do tareeke** hain. Dono saath-saath chal sakte hain.

- **Tareeka A — Markdown file (abhi se kaam karta hai):** GitHub par ek file banao, site 1–2 minute mein update.
- **Tareeka B — Sanity Studio (connect karne ke baad):** Word jaisa editor, "Publish" dabao, site 1–2 minute mein update.

Purane `/insights/...` aur hataaye gaye blog/knowledge base links apne aap section ke home page (`/blog/` ya `/knowledge-base/`) par pahunch jaate hain. Jab tak blog mein ek bhi post nahi hai, `/blog/` page Google se chhupa (noindex) rehta hai; pehla post aate hi apne aap index ho jaata hai.

---

## Tareeka A — Markdown file se (GitHub par, bina kuch install kiye)

1. GitHub par repo kholo: https://github.com/shwetammodi1/corsiacarboncredit
2. Blog ke liye `src/content/insights/` folder kholo. Knowledge base ke liye `src/content/knowledge-base/`.
3. `_template.md` kholo aur uska poora text copy karo.
4. Folder mein wapas aao → **Add file → Create new file**.
5. File ka naam do — yahi page ka URL banega. Chhote akshar, shabdon ke beech hyphen, aur aakhir mein `.md`:
   `corsia-penalties-explained.md` → `corsiacarboncredit.in/blog/corsia-penalties-explained/`
6. Template paste karo, upar ka hissa (front matter) bharo, neeche article likho, aur `<!-- ... -->` wala comment hata do.
7. **Commit changes** dabao. Cloudflare 1–2 minute mein site dobara bana dega.

**Front matter ke niyam:**
- Har value double quotes mein likho: `title: "..."`
- Blog ka `topic` inmein se hi ek hona chahiye: `CORSIA Fundamentals`, `Airline Compliance`, `Carbon Market Guides`, `Buying Credits`, `Case Studies`, `India Carbon Market`
- Knowledge base ka `section` inmein se hi ek hona chahiye: `Marketplace Basics`, `Buying Credits`, `Selling & Listing`, `Project Types`, `CORSIA for Airlines`, `Quality & Registries`, `Reference`. Abhi 1–32 tak `order` lag chuka hai, naye article ke liye 33 se aage do.
- `metaTitle` / `metaDescription` khaali chhod sakte ho. Tab Google mein `title` / `excerpt` dikhega.
- `_` se shuru hone wali files (jaise `_template.md`) publish nahi hoti.

**Article ke andar likhne ka tareeka:** `## Heading`, `### Sub-heading`, `**bold**`, `- bullet`, `1. numbered`, `[link text](/knowledge-base/corsia-explained-for-airlines/)`, tables, aur `::: accordion Sawaal? ... :::` (khulne-band hone wala panel). Template mein sabka example hai.

---

## Tareeka B — Sanity Studio se

### Ek baar ka setup (developer kare, lagbhag 20 minute)

**1. Content ke liye alag dataset banao**

DSTechnoverse ka Sanity project `gai5n7ff` hai, aur uske `production` dataset mein dstechnoverse.com ke 48 blog posts hain. Carbon site ke posts unse alag rakhne ke liye ek naya dataset `corsia` banao. Warna DSTechnoverse ke posts is site par bhi aa jaayenge aur duplicate content ho jaayega.

- https://www.sanity.io/manage → project **gai5n7ff** → **Datasets** → **Add dataset**
- Name: `corsia`, Visibility: **Public**
- (Ya terminal se: `npx sanity dataset create corsia --visibility public`)

Public ka matlab sirf itna hai ki *published* articles padhe ja sakte hain. Woh waise bhi website par sabko dikhte hain. Edit sirf login karne wale log kar sakte hain.

**2. Studio chalao aur online daalo**

```
cd studio
npm install
npx sanity login          # DSTechnoverse wale Sanity account se
npm run dev               # http://localhost:3333 par Studio khulega
npm run deploy            # Studio online: https://corsiacarboncredit.sanity.studio
```

Pehli baar `npm run dev` chalane par Sanity localhost ko allow karne (CORS) ke liye poochhega — **Yes** dabao.
Team ke doosre logon ko https://www.sanity.io/manage → project → **Members** se invite karo.

**3. Website ko Sanity se jodo (Cloudflare)**

Cloudflare → **Workers & Pages** → `corsiacarboncredit` → **Settings** → **Variables and Secrets** → *Production* mein ye do variables daalo:

| Variable | Value |
|---|---|
| `SANITY_PROJECT_ID` | `gai5n7ff` |
| `SANITY_DATASET` | `corsia` |

Phir **Deployments** → latest deployment → **Retry deployment**. Build log mein ek line aayegi: `Sanity gai5n7ff/corsia: N blog posts, N knowledge base articles`.

**4. "Publish" dabate hi site update ho — webhook**

1. Cloudflare → `corsiacarboncredit` → **Settings** → **Builds** → **Deploy hooks** → **Add deploy hook**. Name: `sanity`, Branch: `main`. Jo URL milega, use copy karo.
2. https://www.sanity.io/manage → project → **API** → **Webhooks** → **Create webhook**:
   - URL: upar wala deploy hook URL
   - Dataset: `corsia`
   - Trigger on: **Create, Update, Delete**
   - Filter: `_type in ["blog", "kbArticle"]`
   - HTTP method: **POST**
   - Save karo.

Ab Studio mein **Publish** dabane ke 1–2 minute baad article live ho jaayega.

### Roz ka kaam (content likhne wale ke liye)

1. https://corsiacarboncredit.sanity.studio kholo.
2. **Blog posts** ya **Knowledge base articles** → **+ (Create)**.
3. Bharo:
   - **Title** (heading) aur **Slug** (URL). "Generate" dabao, slug title se apne aap ban jaayega.
   - **Excerpt**
   - **Topic** (blog) ya **Topic + Order** (knowledge base)
   - **Cover image** (kam se kam 1200 × 630)
   - **Body** — headings, bold, links, images (alt text ke saath), table, aur accordion (sawaal-jawaab)
4. **SEO** tab mein chaho to alag Google title/description likho.
5. **Publish** dabao. Draft sirf Studio mein dikhta hai, website par nahi.

**Dhyan rakhein:**
- Publish karne ke baad **slug mat badlo** — purane links toot jaayenge.
- Agar "Published on" ki date aage ki hai, to post us din ke baad wale agle build mein dikhega. Turant chahiye to Cloudflare mein **Retry deployment** daba do.
- Kisi purane markdown article ko Sanity mein edit karna ho, to Sanity mein **same slug** se naya article banao. Sanity wala version website par purane wale ki jagah le lega.

---

## Agar kuch galat ho jaaye

- **Sanity band hai ya pahunch se bahar hai:** build jaan-boojh kar fail hota hai, aur website pichhla sahi version dikhati rahti hai. Koi article gayab nahi hota.
- **Galat topic/section:** blog post "Carbon Market Guides" mein chala jaata hai, aur build log mein warning aati hai. Knowledge base mein galat section hone par build ruk jaata hai aur error batata hai ki kaunsa article hai.
- **Slug mein capital ya space:** URL ke liye apne aap theek ho jaata hai, aur log mein warning aati hai.
- **Kuch bhi check karna ho:** Cloudflare → `corsiacarboncredit` → Deployments → latest → **View build log**.

Technical details (env variables, schema, converter) README aur `src/lib/sanity.mjs` mein hain.
