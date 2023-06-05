import { User } from "@prisma/client";

declare module "fastify" {
  interface PassportUser extends Omit<User, "password"> {}
}
