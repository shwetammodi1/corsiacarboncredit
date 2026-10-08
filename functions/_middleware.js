// One canonical host. www and the production pages.dev address redirect permanently to
// https://corsiacarboncredit.in, keeping the path and query. Preview deployments
// (<hash>.corsiacarboncredit.pages.dev) are left alone so they can still be reviewed.
const CANONICAL_HOST = "corsiacarboncredit.in";
const REDIRECT_HOSTS = new Set(["www.corsiacarboncredit.in", "corsiacarboncredit.pages.dev"]);

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
