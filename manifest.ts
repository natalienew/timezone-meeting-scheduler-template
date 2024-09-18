import { Manifest } from "deno-slack-sdk/mod.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "CHANGE THE NAME OF YOUR APP",
  description: "ADD A DESCRIPTION FOR YOUR APP",
  icon: "assets/default_new_app_icon.png",
  functions: [],
  workflows: [],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
  import { TimeZoneSchedulerFunction } from "./functions/timezone_scheduler_function.ts";
functions: [TimeZoneSchedulerFunction],
});
