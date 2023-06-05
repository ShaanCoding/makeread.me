import { type inferAsyncReturnType } from "@trpc/server";
import { type CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import prisma from "../services/prisma.service";
import { User } from "@prisma/client";

export function createContext({ req, res }: CreateFastifyContextOptions) {
  const user = req.user as Omit<User, "password"> | undefined;
  return { req, res, prisma, user };
}

export type Context = inferAsyncReturnType<typeof createContext>;
