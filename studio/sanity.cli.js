import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "./env.js";

export default defineCliConfig({
  api: { projectId, dataset },
  // `npm run deploy` publishes the studio at https://<studioHost>.sanity.studio
  studioHost: "corsiacarboncredit",
});
