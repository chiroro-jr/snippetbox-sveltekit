import { p as prisma } from "../../chunks/database.js";
import dayjs from "dayjs";
const load = async () => {
  const snippets = (await prisma.snippet.findMany({
    where: {
      expiresAt: {
        gt: new Date()
      }
    }
  })).map((snippet) => {
    return {
      ...snippet,
      createdAt: dayjs(snippet.createdAt).format("DD MMM YYYY [a]t HH:mm"),
      expiresAt: dayjs(snippet.expiresAt).format("DD MMM YYYY [a]t HH:mm")
    };
  });
  return {
    snippets
  };
};
export {
  load
};
