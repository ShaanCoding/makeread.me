import { z } from "zod";

export const UserSchema = z.string().describe("userId");
