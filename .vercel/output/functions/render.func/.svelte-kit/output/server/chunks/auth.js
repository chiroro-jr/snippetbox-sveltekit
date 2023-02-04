import { r as redirect } from "./index.js";
import { p as prisma } from "./database.js";
import status from "http-status";
async function authenticateUser(event) {
  const { cookies } = event;
  const sessionId = cookies.get("_session");
  if (!sessionId) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: { sessionId },
    select: {
      id: true
    }
  });
  if (!user) {
    return null;
  }
  return user;
}
function checkAuth(locals) {
  if (!locals.user) {
    throw redirect(status.SEE_OTHER, "/signin");
  }
}
export {
  authenticateUser as a,
  checkAuth as c
};
