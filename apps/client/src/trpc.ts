import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import { AppRouter } from "server";

export const trpc = createTRPCReact<AppRouter>();

export const createTRPCClient = () =>
  trpc.createClient({
    links: [
      httpBatchLink({
        url: "http://localhost:5000/trpc",
        // optional
        headers() {
          return {
            authorization: "getToken()",
          };
        },
      }),
    ],
  });
