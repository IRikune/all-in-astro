import type { z } from "zod";
import type {
  commentSchema,
  newCommentSchema,
  newProjectSchema,
  newTaskSchema,
<<<<<<< HEAD
<<<<<<< HEAD
  subTaskSchema,
=======
>>>>>>> Frontend-Issues
=======
  newUserSchema,
  projectSchema,
>>>>>>> origin/master
  taskIDSchema,
  taskSchema,
  userIDSchema,
  userSchema,
} from "../schemas/mod.ts";

//#region task
export type Comment = z.infer<typeof commentSchema>;
export type NewComment = z.infer<typeof newCommentSchema>;
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

//#region projects
export type Project = z.infer<typeof projectSchema>;
export type NewProject = z.infer<typeof newProjectSchema>;

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
<<<<<<< HEAD
>>>>>>> Frontend-Issues

const kvResult = await kv.atomic().commit();

export type DenoKVCommit = typeof kvResult;
=======
>>>>>>> origin/master
