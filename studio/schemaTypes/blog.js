import { defineField, defineType } from "sanity";
import { groups, title, slug, excerpt, coverImage, body, metaTitle, metaDescription } from "./fields.js";

// Must match INSIGHT_TOPICS in build.mjs.
export const INSIGHT_TOPICS = ["CORSIA Fundamentals", "Airline Compliance", "Carbon Market Guides", "Buying Credits", "Case Studies", "India Carbon Market"];

export const blog = defineType({
  name: "blog",
  title: "Blog post",
  type: "document",
  groups,
  fields: [
    title,
    slug,
    excerpt,
    defineField({
      name: "topic",
      type: "string",
      group: "content",
      description: "Which filter on the blog page this post appears under.",
      options: { list: INSIGHT_TOPICS, layout: "dropdown" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      group: "content",
      title: "Published on",
      description: "Posts with a future date stay hidden until that date's next build.",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    coverImage,
    defineField({ name: "tags", type: "array", group: "content", of: [{ type: "string" }], options: { layout: "tags" } }),
    body,
    metaTitle,
    metaDescription,
  ],
  orderings: [{ title: "Newest first", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", topic: "topic", date: "publishedAt", media: "coverImage" },
    prepare: ({ title, topic, date, media }) => ({ title, subtitle: [topic, date?.slice(0, 10)].filter(Boolean).join(" · "), media }),
  },
});
