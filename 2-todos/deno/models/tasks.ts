import { monotonicUlid } from "@std/ulid";
import type {
  createTaskOptions,
  getTaskOptions,
  Task,
  updateTaskOptions,
} from "../types/mod.ts";
import { kv } from "../main.ts";

export async function getTasks(userID: string) {
  const key = [userID, "tasks"];
  const iter = kv.list<Task>({ prefix: key });
  const tasks: Task[] = [];
  for await (const task of iter) tasks.push(task.value);
  return tasks;
}
export async function createTask({ userID, task }: createTaskOptions) {
  if (!task.title) return { ok: false, error: "Task title is required" };
  if (!task.date) return { ok: false, error: "Task date is required" };
  const taskID = monotonicUlid();
  const newTask = { ...task, id: taskID };
  const key = [userID, "tasks", taskID];
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
  const key = [userID, "tasks", taskID];
  await kv.delete(key);
  const result = { ok: true, data: taskID };
  return result;
}
export async function updateTask(
  { userID, taskID, newTask }: updateTaskOptions,
) {
  if (!taskID) return { ok: false };
  const key = [userID, "tasks", taskID];
  const res = await kv.set(key, newTask);
  return res;
}
export async function deleteTasks(userID: string) {
  const listTasks = kv.list({ prefix: [userID, "tasks"] });
  for await (const task of listTasks) {
    kv.delete(task.key);
  }

  const result = { ok: true, data: userID };
  return result;
}
