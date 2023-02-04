import { c as checkAuth } from "../../../../chunks/auth.js";
import { r as redirect } from "../../../../chunks/index.js";
import status from "http-status";
const load = async ({ locals }) => {
  checkAuth(locals);
  throw redirect(status.SEE_OTHER, "/");
};
export {
  load
};
