import { p as prisma } from "../../../../../chunks/database.js";
import { e as error } from "../../../../../chunks/index.js";
import dayjs from "dayjs";
import status from "http-status";
const load = async ({ params }) => {
  const snippet = await prisma.snippet.findUnique({
    where: { id: Number(params.id) }
  });
  if (!snippet) {
    throw error(status.NOT_FOUND, {
      message: `Snippet with ID = ${params.id} not found`
    });
  }
  return {
    snippet: {
      ...snippet,
      expiresAt: dayjs(snippet?.expiresAt).format("DD MMM YYYY [a]t HH:mm"),
      createdAt: dayjs(snippet?.createdAt).format("DD MMM YYYY [a]t HH:mm")
    }
  };
};
export {
  load
};
