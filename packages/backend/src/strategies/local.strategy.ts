import { Strategy as LocalStrategy } from "passport-local";
import argon2 from "argon2";
import prisma from "../services/prisma.service";
import createHttpError from "http-errors";

const invalidCredentials = createHttpError[400]("Invalid email or password");
const unknownError = createHttpError[500]("Unknown error");

/**
 * Used to authenticate a user using a username and password.
 */
export default new LocalStrategy(async (email, password, cb) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      cb(invalidCredentials, false);
      return;
    }
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      cb(invalidCredentials, false);
      return;
    }

    const { password: _password, ...rest } = user;
    cb(undefined, rest);
  } catch (error) {
    cb(unknownError, false);
  }
});
