import { defineField } from "sanity";

// Fields shared by blog posts and knowledge base articles.
export const groups = [
  { name: "content", title: "Content", default: true },
  { name: "seo", title: "SEO" },
];

export const title = defineField({
  name: "title",
  type: "string",
  group: "content",
  description: "Shown as the page heading. Keep the main keyword (e.g. CORSIA, carbon credit).",
  validation: (Rule) => [Rule.required(), Rule.max(110).warning("Titles over 110 characters get cut off in Google.")],
});

// The URL of the page. Lowercase words joined by hyphens.
export const slug = defineField({
  name: "slug",
  type: "slug",
  group: "content",
  description: "Becomes the page URL. Don't change it after publishing — old links would break.",
  options: {
    source: "title",
    maxLength: 90,
    slugify: (input) => input.toLowerCase().normalize("NFKD").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 90),
  },
  validation: (Rule) =>
    Rule.required().custom((value) => (!value?.current || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current) ? true : "Use lowercase letters, numbers and hyphens only")),
});

export const excerpt = defineField({
  name: "excerpt",
  type: "text",
  rows: 3,
  group: "content",
  description: "One or two sentences summing up the article. Shown on cards and used as the Google description unless you set one under SEO.",
  validation: (Rule) => [Rule.required(), Rule.max(230).warning("Keep it under about 230 characters.")],
});

export const coverImage = defineField({
  name: "coverImage",
  type: "image",
  group: "content",
  options: { hotspot: true },
  description: "Wide image, at least 1200 × 630. Also used when the page is shared on WhatsApp or LinkedIn.",
  fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
});

export const body = defineField({ name: "body", type: "richBody", group: "content", validation: (Rule) => Rule.required() });

export const metaTitle = defineField({
  name: "metaTitle",
  type: "string",
  group: "seo",
  title: "SEO title",
  description: "Optional. Replaces the title in Google results. Aim for 50–60 characters.",
  validation: (Rule) => Rule.max(65).warning("Google usually shows about 60 characters."),
});

export const metaDescription = defineField({
  name: "metaDescription",
  type: "text",
  rows: 3,
  group: "seo",
  title: "SEO description",
  description: "Optional. Replaces the excerpt in Google results. Aim for 140–160 characters.",
  validation: (Rule) => Rule.max(160).warning("Google usually shows about 155–160 characters."),
});
