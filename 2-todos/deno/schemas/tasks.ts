import { z } from "zod";

const commentSchema = z.object({
  id: z.string().ulid().optional(),
  creator: z.string().ulid(),
  content: z.string(),
  createdAt: z.number(),
});

export const subTaskSchema = z.object({
  id: z.string().ulid().optional(),
  creator: z.string().ulid(),
  title: z.string(),
  content: z.string(),
  completed: z.boolean(),
  comments: z.array(commentSchema).optional(),
  date: z.object({
    created: z.number(),
    completed: z.number(),
    expected: z.number(),
  }),
  priority: z.number().min(1).max(4),
});

export const taskSchema = z.object({
  id: z.string().ulid().optional(),
  creator: z.string().ulid(),
  title: z.string(),
  content: z.string(),
  completed: z.boolean(),
  comments: z.array(commentSchema),
  subTasks: subTaskSchema.array().optional(),
  date: z.object({
    created: z.number(),
    completed: z.number(),
    expected: z.number(),
  }),
  priority: z.number().min(1).max(4),
});
