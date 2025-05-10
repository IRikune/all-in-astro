import type { z } from "zod";
import { kv } from "../main.ts";
import type {
  newUserSchema,
  updateUserOptionsSchema,
  userIDSchema,
  userSchema,
} from "../schemas/users.ts";
import type {
  commentSchema,
  newTaskSchema,
<<<<<<< HEAD
  subTaskSchema,
=======
>>>>>>> Frontend-Issues
  taskIDSchema,
  taskSchema,
} from "../schemas/tasks.ts";

//#region task
export type Comment = z.infer<typeof commentSchema>;
export type Task = z.infer<typeof taskSchema>;
<<<<<<< HEAD
export type SubTask = z.infer<typeof subTaskSchema>;
=======
>>>>>>> Frontend-Issues
export type NewTask = z.infer<typeof newTaskSchema>;
export type TaskID = z.infer<typeof taskIDSchema>;

export enum Priority {
  low = 4,
  medium = 3,
  high = 2,
  important = 1,
}

//#region user
export type User = z.infer<typeof userSchema>;
export type NewUser = z.infer<typeof newUserSchema>;
export type UserID = z.infer<typeof userIDSchema>;
export type updateUserOptions = z.infer<typeof updateUserOptionsSchema>;

export type Result<T> =
<<<<<<< HEAD
  | { ok: true; data: T }
  | { ok: false; data: null; error: string };
=======
  | { ok: boolean; data: T; message: string; versionstamp?: string }
  | { ok: boolean; data: null; message: string };

export type KvResult<T> =
  | { ok: boolean; data: T; versionstamp?: string }
  | { ok: boolean; data: null };
>>>>>>> Frontend-Issues

const kvResult = await kv.atomic().commit();

export type DenoKVCommit = typeof kvResult;
