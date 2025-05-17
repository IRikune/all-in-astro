import { z } from "zod";
export const userIDSchema = z.string().ulid();

export const newUserSchema = z.object({
  id: z.unknown(),
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8),
  avatar: z.string(),
});
export const userSchema = z.object({
  id: z.string().ulid(),
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8),
  avatar: z.string(),
});
