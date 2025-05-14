import { z } from "zod";
import { taskSchema } from "./tasks.ts";
import { userIDSchema } from "./users.ts";

export const projectIDSchema = z.string().ulid();

export const newProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  creator: userIDSchema,
  tasks: taskSchema.array().optional(),
}).strict();

export const projectSchema = newProjectSchema.extend({
  id: projectIDSchema,
  collaborators: userIDSchema.array().optional(),
}).strict();
