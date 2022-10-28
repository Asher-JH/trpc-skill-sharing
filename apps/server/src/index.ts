import fastify from "fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import cors from "@fastify/cors";

import { appRouter } from "./routers";
import { createContext } from "./create-context";

// Export typings for client to use
export type AppRouter = typeof appRouter;

// Create server
const server = fastify();

// Register TRPC
server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter, createContext },
});

server.register(cors, {
  origin: true,
});

(async () => {
  try {
    await server.listen({ port: 5000 });
    console.log("🚀 Server started");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
