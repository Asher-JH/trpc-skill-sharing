import { initTRPC, TRPCError } from "@trpc/server";

import { ProcedureMeta } from "./types/trpc";
import { Context } from "./create-context";

const t = initTRPC.context<Context>().meta<ProcedureMeta>().create();

// trpc main functions
export const router = t.router;
export const middleware = t.middleware;

// Public router
export const publicProcedure = t.procedure;

// Authenticated router
export const protectedProcedure = t.procedure.use(
  middleware(async ({ ctx, meta, next }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Not authorised" });
    }

    return next({
      ctx: {
        user: ctx.user, // ctx.user wont be null anymore
      },
    });
  })
);
