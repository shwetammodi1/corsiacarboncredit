import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "./env.js";

export default defineCliConfig({
  api: { projectId, dataset },
  // `npm run deploy` publishes the studio at https://<studioHost>.sanity.studio
  studioHost: "corsiacarboncredit",
  // Set by the first deploy so later deploys update the same studio without asking.
  deployment: { appId: "qhj7fh8108jh69gp5qi0dqmq" },
});
