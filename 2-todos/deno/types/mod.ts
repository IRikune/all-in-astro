import type { z } from 'zod';
import type {
	userSchema,
	newUserSchema,
	userIDSchema,
	updateUserOptionsSchema,
} from '../schemas/user.js';
import type {
	subTaskSchema,
	taskSchema,
	commentSchema,
	postTaskSchema,
	taskIDSchema,
	createTaskOptionsSchema,
	getTaskOptionsSchema,
	updateTaskOptionsSchema,
} from '../schemas/tasks.js';

//#region task
export type Comment = z.infer<typeof commentSchema>;
export type Task = z.infer<typeof taskSchema>;
export type SubTask = z.infer<typeof subTaskSchema>;
export type PostTask = z.infer<typeof postTaskSchema>;
export type TaskID = z.infer<typeof taskIDSchema>;
export type createTaskOptions = z.infer<typeof createTaskOptionsSchema>;
export type getTaskOptions = z.infer<typeof getTaskOptionsSchema>;
export type updateTaskOptions = z.infer<typeof updateTaskOptionsSchema>;

export enum Priority {
	low = 4,
	medium = 3,
	high = 2,
	important = 1,
}

//#region user
export type User = z.infer<typeof userSchema>;
export type newUser = z.infer<typeof newUserSchema>;
export type UserID = z.infer<typeof userIDSchema>;
export type updateUserOptions = z.infer<typeof updateUserOptionsSchema>;
