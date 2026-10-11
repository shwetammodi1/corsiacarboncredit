import test from "node:test";
import assert from "node:assert/strict";

process.env.SANITY_PROJECT_ID = "abc123";
process.env.SANITY_DATASET = "corsia";
const { portableTextToMarkdown: pt, imageUrl } = await import("../src/lib/sanity.mjs");
const { renderMarkdown } = await import("../src/lib/markdown.mjs");

const block = (text, extra = {}) => ({ _type: "block", style: "normal", markDefs: [], children: [{ _type: "span", text, marks: [] }], ...extra });

test("headings: h1 in the body becomes h2 (the page title is the only h1)", () => {
  assert.equal(pt([block("Intro", { style: "h1" }), block("Detail", { style: "h3" })]), "## Intro\n\n### Detail");
});

test("bold, italic and links", () => {
  const b = {
    _type: "block", style: "normal", markDefs: [{ _key: "l1", _type: "link", href: "https://icao.int" }],
    children: [
      { _type: "span", text: "See ", marks: [] },
      { _type: "span", text: "ICAO", marks: ["strong", "l1"] },
      { _type: "span", text: " and ", marks: [] },
      { _type: "span", text: "this", marks: ["em"] },
    ],
  };
  assert.equal(pt([b]), "See [**ICAO**](https://icao.int) and *this*");
});

test("lists stay together and number correctly", () => {
  const md = pt([
    block("First", { listItem: "number", level: 1 }),
    block("Second", { listItem: "number", level: 1 }),
    block("Nested", { listItem: "bullet", level: 2 }),
    block("After the list"),
  ]);
  assert.equal(md, "1. First\n2. Second\n   - Nested\n\nAfter the list");
  const html = renderMarkdown(md).html;
  assert.match(html, /<ol>[\s\S]*<li>First<\/li>[\s\S]*<ul>[\s\S]*Nested/);
});

test("markdown characters typed by an editor are shown, not interpreted", () => {
  const md = pt([block("Price is 5*3 = 15 and A_B [draft]"), block("1. not a list")]);
  const html = renderMarkdown(md).html;
  assert.match(html, /5\*3 = 15 and A_B \[draft\]/);
  assert.doesNotMatch(html, /<ol>/);
});

test("images, tables and accordions", () => {
  const md = pt([
    { _type: "image", alt: "Mangroves", asset: { _ref: "image-abcdef0123-1600x900-jpg" } },
    { _type: "table", rows: [{ cells: ["Phase", "Years"] }, { cells: ["Pilot", "2021–2023"] }] },
    { _type: "accordion", title: "Is SAF cheaper?", body: [block("Usually not yet.")] },
  ]);
  const html = renderMarkdown(md).html;
  assert.match(html, /<img src="https:\/\/cdn\.sanity\.io\/images\/abc123\/corsia\/abcdef0123-1600x900\.jpg\?w=1400&amp;auto=format" alt="Mangroves"/);
  assert.match(html, /<table>[\s\S]*<th>Phase<\/th>[\s\S]*<td>Pilot<\/td>/);
  assert.match(html, /<details><summary>Is SAF cheaper\?<\/summary><div><p>Usually not yet\.<\/p>/);
});

test("image URL builder", () => {
  assert.equal(imageUrl({ asset: { _ref: "image-ff00-1536x1024-webp" } }, { w: 1200, h: 630, fm: "jpg" }),
    "https://cdn.sanity.io/images/abc123/corsia/ff00-1536x1024.webp?w=1200&h=630&fit=crop&fm=jpg");
  assert.equal(imageUrl(undefined), "");
});
