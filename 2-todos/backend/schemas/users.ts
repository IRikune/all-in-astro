import { z } from "zod";
import { projectSchema } from "./projects.ts";

export const userIDSchema = z.string().ulid();

export const newUserSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8),
  avatar: z.string(),
});

export const userSchema = newUserSchema.extend({
  id: z.string().ulid(),
  projects: projectSchema.array().optional(),
}).strict();

export const emailSchema = z.string().email();
