import { inferAsyncReturnType } from "@trpc/server";
import { type CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";

// Context
export async function createContext({ req, res }: CreateFastifyContextOptions) {
  async function getSession() {
    const token = req.headers.authorization?.split(" ")[1] ?? "";
    let payload = null;

    if (token) {
      try {
        // Verify token
        // Verify payload
        payload = { id: "1", username: "Mr. Bean" };
      } catch (err) {}
    }

    return payload;
  }

  const user = await getSession();

  return { user, req, res }; // User | null
}

export type Context = inferAsyncReturnType<typeof createContext>;
