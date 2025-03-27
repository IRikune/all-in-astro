import { z } from "zod";
export const userIDSchema = z.string().ulid();

export const userSchema = z.object({
  id: z.string().ulid(),
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8),
  avatar: z.string(),
});
export const updateUserOptions = z.object({
  userID: z.string(),
  User:userSchema,
});
export const newUserSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8),
  avatar: z.string(),
});
export const postUserSchema = userSchema.extend({
  id: z.never().optional(),
});

export const validId = z.object({
  userID : z.string().ulid()
});

export const validLoginForm = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const validEmail=z.string().email();