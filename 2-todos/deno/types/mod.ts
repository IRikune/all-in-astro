import { z } from "zod";
import {userSchema,newUserSchema,userIDSchema, updateUserOptions} from "../schemas/user.ts";
import {subTaskSchema,taskSchema,commentSchema,postTaskSchema,taskIDSchema, createTaskOptionsSchema, getTaskOptions, updateTaskOptionsSchema} from "../schemas/tasks.ts";

//#region task
export type Comment = z.infer<typeof commentSchema>;
export type Task =z.infer<typeof taskSchema>;
export type SubTask =z.infer<typeof subTaskSchema>;
export type PostTask = z.infer<typeof postTaskSchema>;
export type TaskID = z.infer<typeof taskIDSchema>;
export type createTaskOptions = z.infer<typeof createTaskOptionsSchema>;
export type getTaskOptions = z.infer<typeof getTaskOptions>
export type updateTaskOptions = z.infer<typeof updateTaskOptionsSchema>;

export enum Priority {
  low = 4,
  medium = 3,
  high = 2,
  important = 1,
}


//#region user
export type User = z.infer<typeof userSchema>;
export type newUser=z.infer<typeof newUserSchema>;
export type UserID = z.infer<typeof userIDSchema>;
export type updateUserOptions = z.infer<typeof updateUserOptions>;

