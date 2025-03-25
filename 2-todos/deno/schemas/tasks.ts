import { z } from "zod";

export const userIDSchema = z.string().ulid();
export const taskIDSchema= z.object(
  {
    
  }
)

export const commentSchema = z.object({
  id: z.string().ulid().optional(),
  creator: z.string().ulid(),
  content: z.string(),
  createdAt: z.number(),
});

const baseSchema = z.object({
  id: z.string().ulid().optional(),
  title: z.string(),
  creator: userIDSchema,
  content: z.string().optional(),
  completed: z.boolean(),
  comments: z.array(commentSchema).optional(),
  date: z.object({
    created: z.number(),
    completed: z.number().optional(),
    expected: z.number().optional(),
  }),
  priority: z.number().min(1).max(4),
});

export const subTaskSchema = baseSchema.extend({});

export const taskSchema = baseSchema.extend({
  subTasks: subTaskSchema.array().optional(),
});

export const postTaskSchema = taskSchema.extend({
  id: z.never().optional(),
});
