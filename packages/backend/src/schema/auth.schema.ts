import { z } from "zod";
import validator from "validator";

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});
