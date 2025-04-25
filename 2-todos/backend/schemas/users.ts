import { z } from "zod";

export const userIDSchema = z.string().ulid();

export const newUserSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8),
  avatar: z.string(),
});

export const userSchema = newUserSchema.extend({
  id: z.string().ulid(),
});

export const postUserSchema = userSchema.extend({
  id: z.never().optional(),
}).strict();

export const updateUserOptionsSchema = z.object({
  userID: z.string(),
  User: userSchema,
});

export const emailSchema = z.string().email();
