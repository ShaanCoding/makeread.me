import { z } from "zod";
import { t } from "../trpc";
import { loggedInProcedure, publicProcedure } from "../trpc/utils";
import { TRPCError } from "@trpc/server";
import { UserSchema } from "../schema/user.schema";

export const userRouterDefinition = t.router({
  me: publicProcedure.query(({ ctx }) => {
    return ctx.user;
  }),
});
