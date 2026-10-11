// One canonical host. www and the production pages.dev address redirect permanently to
// https://corsiacarboncredit.in, keeping the path and query. Preview deployments
// (<hash>.corsiacarboncredit.pages.dev) are left alone so they can still be reviewed.
const CANONICAL_HOST = "corsiacarboncredit.in";
const REDIRECT_HOSTS = new Set(["www.corsiacarboncredit.in", "corsiacarboncredit.pages.dev"]);

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  let moved = false;
  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    moved = true;
  }
  // The blog used to live under /insights/, and those early posts have been retired.
  if (/^\/insights(\/.*)?$/.test(url.pathname)) {
    url.pathname = "/blog/";
    url.search = "";
    moved = true;
  }
  if (moved) return Response.redirect(url.toString(), 301);

  const res = await next();
  // A blog post or knowledge base page that no longer exists sends visitors to the section
  // home instead of a dead end (old article URLs from before the knowledge base was rebuilt).
  if (res.status === 404) {
    if (/^\/blog\/[^/]+\/?$/.test(url.pathname)) return Response.redirect(`https://${url.host}/blog/`, 301);
    if (/^\/knowledge-base\/(topic\/)?[^/]+\/?$/.test(url.pathname)) return Response.redirect(`https://${url.host}/knowledge-base/`, 301);
  }
  return res;
}
