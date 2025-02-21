import { monotonicUlid } from "@std/ulid";
import type {
  createTaskOptions,
  getTaskOptions,
  Task,
  updateTaskOptions,
} from "../types/mod.ts";
import { kv } from "../main.ts";

export async function getTasks({ userID = "public" }) {
  const key = ["tasks", userID];
  const iter = kv.list<Task>({ prefix: key });
  const tasks: Task[] = [];
  for await (const task of iter) tasks.push(task.value);
  return tasks;
}
export async function createTask({ userID, task }: createTaskOptions) {
  if (!task.title) return { ok: false };
  if (!task.date) return { ok: false };
  const taskID = monotonicUlid();
  const newTask = { ...task, id: taskID };
  const key = ["tasks", userID, taskID];
  const res = await kv.atomic()
    .check({ key, versionstamp: null })
    .set(key, newTask)
    .commit();
  return res;
}

export async function getTask({ userID, taskID }: getTaskOptions) {
  if (!taskID) return { ok: false };
  const key = ["tasks", userID, taskID];
  const entry = await kv.get<Task>(key);
  const task = entry?.value;
  const result = { ok: true, data: task };
  return result;
}

export async function deleteTask({ userID, taskID }: getTaskOptions) {
  if (!taskID) return { ok: false };
  const key = ["tasks", userID, taskID];
  await kv.delete(key);
  const result = { ok: true, data: taskID };
  return result;
}
export async function updateTask(
  { userID, taskID, newTask }: updateTaskOptions,
) {
  if (!taskID) return { ok: false };
  const key = ["notes", userID, taskID];
  const res = await kv.set(key, newTask);
  return res;
}
