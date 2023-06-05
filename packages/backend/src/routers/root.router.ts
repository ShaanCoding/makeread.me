import { t } from "../trpc";
import { authRouterDefinition } from "./auth.router";
import { userRouterDefinition } from "./user.router";

export const appRouter = t.router({
  auth: authRouterDefinition,
  users: userRouterDefinition,
});

// export type definition of API
export type AppRouter = typeof appRouter;
