import { initTRPC } from "@trpc/server";
import { createContext } from "./context";
import SuperJSON from "superjson";

export const t = initTRPC.context<typeof createContext>().create({
  transformer: SuperJSON,
});
