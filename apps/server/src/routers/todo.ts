import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

const todos: { name: string; isDone: boolean }[] = [];

export const todoRouter = router({
  get: publicProcedure.query(async ({ ctx }) => {
    const { user } = ctx;

    return todos;
  }),
  create: publicProcedure
    // Validations
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(({ input }) => {
      // Handle DB
      todos.push({ name: input.name, isDone: false });

      return;
    }),
  // Auth only action
  deleteAll: protectedProcedure
    .meta({
      allowedRoles: [],
    })
    .mutation(({ ctx }) => {
      const { user, req, res } = ctx;

      todos.length = 0;

      return;
    }),
});
