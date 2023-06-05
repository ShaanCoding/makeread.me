import { t } from "../trpc";
import { authRouterDefinition } from "./auth.router";

export const appRouter = t.router({
  auth: authRouterDefinition,
});

// export type definition of API
export type AppRouter = typeof appRouter;
