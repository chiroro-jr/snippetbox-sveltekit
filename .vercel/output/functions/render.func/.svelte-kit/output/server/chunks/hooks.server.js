import { a as authenticateUser } from "./auth.js";
const handle = async ({ event, resolve }) => {
  event.locals.user = await authenticateUser(event);
  return await resolve(event);
};
const handleError = async ({ error }) => {
  console.dir(error);
  return {
    message: "Something went wrong. Try again later."
  };
};
export {
  handle,
  handleError
};
