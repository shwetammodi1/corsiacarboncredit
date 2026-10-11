import { defineField, defineType } from "sanity";
import { groups, title, slug, excerpt, coverImage, body, metaTitle, metaDescription } from "./fields.js";

// Must match the `section` values of KB_TOPICS in build.mjs.
export const KB_SECTIONS = [
  "Marketplace Basics",
  "Buying Credits",
  "Selling & Listing",
  "Project Types",
  "CORSIA for Airlines",
  "Quality & Registries",
  "Reference",
];

export const kbArticle = defineType({
  name: "kbArticle",
  title: "Knowledge base article",
  type: "document",
  groups,
  fields: [
    title,
    slug,
    excerpt,
    defineField({
      name: "section",
      type: "string",
      group: "content",
      title: "Topic",
      description: "Which knowledge base topic page the article belongs to.",
      options: { list: KB_SECTIONS, layout: "dropdown" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      type: "number",
      group: "content",
      description: "Reading order. The existing articles use 1–32; use 33 and up, or a decimal like 12.5 to slot between two.",
      validation: (Rule) => Rule.required().min(0),
    }),
    coverImage,
    body,
    metaTitle,
    metaDescription,
  ],
  orderings: [{ title: "Reading order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", section: "section", order: "order" },
    prepare: ({ title, section, order }) => ({ title, subtitle: [order != null ? `#${order}` : null, section].filter(Boolean).join(" · ") }),
  },
});
