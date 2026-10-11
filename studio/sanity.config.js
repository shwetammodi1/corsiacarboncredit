import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { table } from "@sanity/table";
import { schemaTypes } from "./schemaTypes/index.js";
import { projectId, dataset } from "./env.js";

export default defineConfig({
  name: "corsiacarboncredit",
  title: "CORSIA Carbon Credit",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.documentTypeListItem("blog").title("Blog posts"),
            S.documentTypeListItem("kbArticle").title("Knowledge base articles"),
          ]),
    }),
    table(),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
