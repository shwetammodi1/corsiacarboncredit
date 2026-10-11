// Which Sanity project and dataset this studio edits.
// The website reads the same values from SANITY_PROJECT_ID and SANITY_DATASET in Cloudflare Pages.
//
// gai5n7ff is the DSTechnoverse Sanity project. The carbon site keeps its content in a separate
// dataset ("corsia") so its posts never mix with dstechnoverse.com's "production" dataset.
// To use a different project, change the default here or set SANITY_STUDIO_PROJECT_ID.
export const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "gai5n7ff";
export const dataset = process.env.SANITY_STUDIO_DATASET || "corsia";
