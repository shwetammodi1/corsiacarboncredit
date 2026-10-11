import test from "node:test";
import assert from "node:assert/strict";
import { onRequest } from "../functions/_middleware.js";

// Pages that "exist" for these tests; anything else gets a 404 from next().
const EXISTING = new Set(["/", "/blog/", "/knowledge-base/", "/knowledge-base/using-the-marketplace/", "/knowledge-base/topic/buying-credits/", "/marketplace/assam-agroforestry/"]);
const run = (url) => onRequest({
  request: new Request(url),
  next: async () => new Response("page", { status: EXISTING.has(new URL(url).pathname) ? 200 : 404 }),
});

const redirects = [
  ["https://www.corsiacarboncredit.in/knowledge-base/?q=x", "https://corsiacarboncredit.in/knowledge-base/?q=x"],
  ["http://www.corsiacarboncredit.in/", "https://corsiacarboncredit.in/"],
  ["https://corsiacarboncredit.pages.dev/marketplace/assam-agroforestry/", "https://corsiacarboncredit.in/marketplace/assam-agroforestry/"],
  // retired /insights/ posts
  ["https://corsiacarboncredit.in/insights", "https://corsiacarboncredit.in/blog/"],
  ["https://corsiacarboncredit.in/insights/?topic=Case%20Studies", "https://corsiacarboncredit.in/blog/"],
  ["https://corsiacarboncredit.in/insights/what-is-corsia-complete-guide/", "https://corsiacarboncredit.in/blog/"],
  ["https://www.corsiacarboncredit.in/insights/additionality-in-carbon-credits-explained/", "https://corsiacarboncredit.in/blog/"],
  // pages that no longer exist go to the section home
  ["https://corsiacarboncredit.in/blog/additionality-in-carbon-credits-explained/", "https://corsiacarboncredit.in/blog/"],
  ["https://corsiacarboncredit.in/knowledge-base/what-is-corsia/", "https://corsiacarboncredit.in/knowledge-base/"],
  ["https://corsiacarboncredit.in/knowledge-base/topic/foundations/", "https://corsiacarboncredit.in/knowledge-base/"],
];
for (const [from, to] of redirects) {
  test(`301 ${from}`, async () => {
    const res = await run(from);
    assert.equal(res.status, 301);
    assert.equal(res.headers.get("location"), to);
  });
}

for (const url of [
  "https://corsiacarboncredit.in/blog/",
  "https://corsiacarboncredit.in/knowledge-base/using-the-marketplace/",
  "https://corsiacarboncredit.in/knowledge-base/topic/buying-credits/",
  "https://4f0ebebf.corsiacarboncredit.pages.dev/",
]) {
  test(`served as is: ${url}`, async () => {
    const res = await run(url);
    assert.equal(res.status, 200);
  });
}

test("other missing pages keep their 404", async () => {
  const res = await run("https://corsiacarboncredit.in/no-such-page/");
  assert.equal(res.status, 404);
});
