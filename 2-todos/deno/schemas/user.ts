import { z } from "zod";

export const userSchema = z.object({
  id: z.string().ulid(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  avatar: z.string(),
});

export const postUserSchema = userSchema.extend({
  id: z.never().optional(),
});
