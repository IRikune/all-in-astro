import { z } from "zod";

//#region ID Schemas
export const userIDSchema = z.string().ulid();
export const projectIDSchema = z.string().ulid();
export const taskIDSchema = z.string().ulid();

//#region Comment Schemas
export const newCommentSchema = z.object({
  creator: z.string().ulid(),
  content: z.string(),
  createdAt: z.number(),
}).strict();

export const commentSchema = newCommentSchema.extend({
  id: z.string().ulid(),
});

//#region Task Schemas
export const newTaskSchema = z.object({
  title: z.string(),
  creator: userIDSchema,
  content: z.string().optional(),
  comments: z.array(commentSchema).optional(),
  date: z.object({
    created: z.number(),
    completed: z.number().optional(),
    expected: z.number().optional(),
  }),
  categories: z.array(z.string()).optional(),
  priority: z.number().min(1).max(4),
  colaborators: userIDSchema.array().optional(),
  group: z.string().optional(),
  project: projectIDSchema.optional(),
}).strict();

export const taskSchema = newTaskSchema.extend({
  id: z.string().ulid(),
  subTasks: newTaskSchema.array().optional(),
});

//#region Project Schemas
export const newProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  creator: userIDSchema,
  tasks: taskIDSchema.array().optional(),
}).strict();

export const projectSchema = newProjectSchema.extend({
  id: projectIDSchema,
  collaborators: userIDSchema.array().optional(),
}).strict();

//#region User Schemas
export const newUserSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8),
  avatar: z.string(),
  projects: projectSchema.array().optional(),
  categories: z.string().array().optional(),
  groups: z.string().array().optional(),
});

export const userSchema = newUserSchema.extend({
  id: z.string().ulid(),
}).strict();

//#region Misc Schemas
export const emailSchema = z.string().email();
