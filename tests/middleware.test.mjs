import test from "node:test";
import assert from "node:assert/strict";
import { onRequest } from "../functions/_middleware.js";

const run = (url) => onRequest({ request: new Request(url), next: async () => new Response("asset", { status: 200 }) });

const redirects = [
  ["https://www.corsiacarboncredit.in/insights/?topic=Case%20Studies", "https://corsiacarboncredit.in/insights/?topic=Case%20Studies"],
  ["http://www.corsiacarboncredit.in/", "https://corsiacarboncredit.in/"],
  ["https://corsiacarboncredit.pages.dev/marketplace/assam-agroforestry/", "https://corsiacarboncredit.in/marketplace/assam-agroforestry/"],
  ["https://corsiacarboncredit.in/blog", "https://corsiacarboncredit.in/insights/"],
  ["https://corsiacarboncredit.in/blog/", "https://corsiacarboncredit.in/insights/"],
  ["https://corsiacarboncredit.in/blog/what-is-corsia-complete-guide", "https://corsiacarboncredit.in/insights/what-is-corsia-complete-guide/"],
  ["https://www.corsiacarboncredit.in/blog/additionality-in-carbon-credits-explained/", "https://corsiacarboncredit.in/insights/additionality-in-carbon-credits-explained/"],
];
for (const [from, to] of redirects) {
  test(`301 ${from}`, async () => {
    const res = await run(from);
    assert.equal(res.status, 301);
    assert.equal(res.headers.get("location"), to);
  });
}

for (const url of [
  "https://corsiacarboncredit.in/knowledge-base/",
  "https://corsiacarboncredit.in/insights/blog-to-know/",
  "https://4f0ebebf.corsiacarboncredit.pages.dev/",
]) {
  test(`served as is: ${url}`, async () => {
    const res = await run(url);
    assert.equal(res.status, 200);
    assert.equal(res.headers.get("location"), null);
  });
}
