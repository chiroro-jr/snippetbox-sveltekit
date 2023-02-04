import { c as checkAuth } from "../../../../chunks/auth.js";
import { r as redirect } from "../../../../chunks/index.js";
import status from "http-status";
import { p as prisma } from "../../../../chunks/database.js";
const load = async ({ locals }) => {
  checkAuth(locals);
  throw redirect(status.SEE_OTHER, "/");
};
const actions = {
  default: async ({ locals, cookies }) => {
    checkAuth(locals);
    await prisma.user.update({
      where: { id: locals.user?.id },
      data: {
        sessionId: crypto.randomUUID()
      }
    });
    cookies.set("_session", "", {
      path: "/",
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "strict",
      expires: new Date(0)
    });
    throw redirect(status.SEE_OTHER, "/");
  }
};
export {
  actions,
  load
};
