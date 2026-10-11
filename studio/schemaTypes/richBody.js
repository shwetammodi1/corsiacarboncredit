import { defineArrayMember, defineField, defineType } from "sanity";

// Text formatting the website knows how to render. Keep this in step with
// portableTextToMarkdown() in src/lib/sanity.mjs.
const link = {
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    defineField({
      name: "href",
      type: "url",
      title: "URL",
      description: "Full URL (https://…) or a page on this site, e.g. /knowledge-base/how-corsia-works/",
      validation: (Rule) => Rule.required().uri({ scheme: ["http", "https", "mailto", "tel"], allowRelative: true }),
    }),
  ],
};

const textBlock = (styles) =>
  defineArrayMember({
    type: "block",
    styles,
    lists: [
      { title: "Bullets", value: "bullet" },
      { title: "Numbered", value: "number" },
    ],
    marks: {
      decorators: [
        { title: "Bold", value: "strong" },
        { title: "Italic", value: "em" },
        { title: "Code", value: "code" },
      ],
      annotations: [link],
    },
  });

// Inside an accordion: paragraphs and lists only.
export const simpleBody = defineType({
  name: "simpleBody",
  title: "Text",
  type: "array",
  of: [textBlock([{ title: "Normal", value: "normal" }])],
});

export const richBody = defineType({
  name: "richBody",
  title: "Body",
  type: "array",
  of: [
    textBlock([
      { title: "Normal", value: "normal" },
      { title: "Heading 2 (section)", value: "h2" },
      { title: "Heading 3 (sub-section)", value: "h3" },
      { title: "Heading 4", value: "h4" },
      { title: "Quote", value: "blockquote" },
    ]),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt text", description: "Describe the image for screen readers and Google.", validation: (Rule) => Rule.required() })],
    }),
    defineArrayMember({ type: "table", title: "Table", description: "The first row is the header row." }),
    defineArrayMember({
      name: "accordion",
      type: "object",
      title: "Accordion (question and answer)",
      fields: [
        defineField({ name: "title", type: "string", title: "Question / heading", validation: (Rule) => Rule.required() }),
        defineField({ name: "body", type: "simpleBody", title: "Answer" }),
      ],
      preview: { select: { title: "title" }, prepare: ({ title }) => ({ title: title || "Accordion", subtitle: "Accordion" }) },
    }),
  ],
});
