import { router, publicProcedure } from "../trpc";

import { todoRouter } from "./todo";

export const appRouter = router({
  hello: publicProcedure.query(() => "👋 Hello world"),
  todo: todoRouter,
});
