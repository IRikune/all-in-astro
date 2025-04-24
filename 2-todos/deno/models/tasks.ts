import { monotonicUlid as ulid } from "@std/ulid";
import type {
  DenoKVCommit,
  NewTask,
  Result,
  Task,
  User,
} from "../types/mod.ts";
import { kv } from "../main.ts";

interface GetTasksOptions {
  userID: User["id"];
}

export async function getManyTask(
  { userID }: GetTasksOptions,
): Promise<Result<Task[]>> {
  const key = ["tasks", userID];
  const iter = kv.list<Task>({ prefix: key });
  const tasks: Task[] = [];
  for await (const task of iter) tasks.push(task.value);
  const result = { ok: true, data: tasks } as Result<Task[]>;
  return result;
}

interface CreateTaskOptions {
  task: NewTask;
}

export async function createTask({ task }: CreateTaskOptions) {
  if (!task.title) return { ok: false, error: "Task title is required" };
  if (!task.date) return { ok: false, error: "Task date is required" };
  const taskID = ulid();
  const newTask = { ...task, id: taskID };
  const taskByCreator = ["tasks", task.creator, taskID];
  const taskByID = ["tasks", taskID];
  const res = await kv.atomic()
    .check({ key: taskByID, versionstamp: null })
    .check({ key: taskByCreator, versionstamp: null })
    .set(taskByCreator, newTask)
    .set(taskByID, newTask)
    .commit();
  return res;
}

interface GetTaskOptions {
  taskID: Task["id"];
}

export async function getTask(
  { taskID }: GetTaskOptions,
): Promise<Result<Task>> {
  if (!taskID) return { ok: false, data: null, error: "Task ID is required" };
  const key = ["tasks", taskID];
  const entry = await kv.get<Task>(key);
  const task = entry?.value;
  const result = { ok: true, data: task } as Result<Task>;
  return result;
}

interface DeleteTaskOptions {
  userID: User["id"];
  taskID: Task["id"];
}

interface DeleteTaskOptions {
  userID: User["id"];
  taskID: Task["id"];
}

export async function deleteTask(
  { userID, taskID }: DeleteTaskOptions,
): Promise<Result<Task["id"]>> {
  if (!taskID) return { ok: false, data: null, error: "Task ID is required" };
  const key = [userID, "tasks", taskID];
  await kv.delete(key);
  const result = { ok: true, data: taskID } as Result<Task["id"]>;
  return result;
}

interface UpdateTaskOptions {
  taskID: Task["id"];
  newTask: Task;
}

export async function updateTask(
  { taskID, newTask }: UpdateTaskOptions,
): Promise<Result<DenoKVCommit>> {
  if (!taskID) return { ok: false, data: null, error: "Task ID is required" };
  if (!newTask.id) {
    return { ok: false, data: null, error: "Task ID is required" };
  }
  const key = ["tasks", taskID];
  const creatorKey = ["tasks", newTask.creator, taskID];
  const res = await kv.atomic()
    .set(key, newTask)
    .set(creatorKey, newTask)
    .commit();
  const result = { ok: true, data: res } as Result<DenoKVCommit>;
  return result;
}

interface DeleteTasksOptions {
  userID: User["id"];
}

export async function deleteTasks(
  { userID }: DeleteTasksOptions,
): Promise<Result<User["id"]>> {
  const listTasks = kv.list({ prefix: ["tasks", userID] });
  for await (const task of listTasks) {
    kv.delete(task.key);
  }
  const result = { ok: true, data: userID } as Result<User["id"]>;
  return result;
}
