import { t } from "../trpc";
import { loggedInProcedure, publicProcedure } from "../trpc/utils";
import { TRPCError } from "@trpc/server";
import argon2 from "argon2";
import { LoginSchema, RegisterSchema } from "../schema/auth.schema";

const authRouter = t.router({
  // login: publicProcedure.input(),
  logout: loggedInProcedure.mutation(({ ctx }) => {
    ctx.req.logOut();

    return {
      message: "Logged out",
    };
  }),
  register: publicProcedure
    .input(RegisterSchema)
    .mutation(async ({ ctx, input }) => {
      const { email, password: passwordInput } = input;

      const userExists = await ctx.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (userExists) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "User already exists",
        });
      }

      const passwordHash = await argon2.hash(passwordInput);

      const customer = await ctx.prisma.user.create({
        data: {
          email,
          password: passwordHash,
        },
      });

      const user = await ctx.prisma.user.findUnique({
        where: {
          userId: customer.userId,
        },
      });

      if (!user) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "User does not exist",
        });
      }

      const { password, ...userdata } = user;

      ctx.req.session.set("passport", user.userId);

      return userdata;
    }),

  login: publicProcedure.input(LoginSchema).mutation(async ({ ctx, input }) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        email: input.email,
      },
    });

    if (!user) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "User does not exist",
      });
    }

    const validPassword = await argon2.verify(user.password, input.password);

    if (!validPassword) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Invalid password",
      });
    }

    ctx.req.session.set("passport", user.userId);

    const { password, ...userdata } = user;

    return userdata;
  }),
});

export const authRouterDefinition = authRouter;
