import { TRPCError } from "@trpc/server";
import { t } from ".";
import { User } from "@prisma/client";

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized, but you can still access user session data if they
 * are logged in.
 */
export const publicProcedure = t.procedure;

/** Reusable middleware that enforces users are logged in before running the procedure. */
const enforceLoggedIn = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next();
});

/**
 * Protected (authenticated) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use this. It verifies
 * the session is valid and guarantees `ctx.session.user` is not null.
 *
 * @see https://trpc.io/docs/procedures
 */
export const loggedInProcedure = t.procedure.use(enforceLoggedIn);

// const enforceStaff = t.middleware(({ ctx, next }) => {
//   if (ctx.user?.userType !== "staff") {
//     throw new TRPCError({ code: "UNAUTHORIZED" });
//   }
//   return next();
// });

// export const staffProcedure = t.procedure.use(enforceStaff);

// const enforceCustomer = t.middleware(({ ctx, next }) => {
//   if (ctx.user?.userType !== "customer") {
//     throw new TRPCError({ code: "UNAUTHORIZED" });
//   }
//   return next();
// });

// export const customerProcedure = t.procedure.use(enforceCustomer);
