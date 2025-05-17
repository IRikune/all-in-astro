import { monotonicUlid as ulid } from "@std/ulid";
import { kv } from "../main.ts";
import type { KvResult, NewTask, Task, User } from "../types/mod.ts";

interface GetTasksOptions {
  userID: User["id"];
}

export async function getManyTasks({
  userID,
}: GetTasksOptions): Promise<KvResult<Task[]>> {
  const key = ["tasks", userID];
  const iter = kv.list<Task>({ prefix: key });
  const tasks: Task[] = [];
  for await (const task of iter) tasks.push(task.value);
  if (tasks.length === 0) return { ok: false, data: null };
  return {
    ok: true,
    data: tasks,
  };
}

interface CreateTaskOptions {
  task: NewTask;
}

export async function createTask({
  task,
}: CreateTaskOptions): Promise<KvResult<Task["id"]>> {
  const taskID = ulid();
  const newTask = { ...task, id: taskID };
  const taskByCreator = ["tasks", task.creator, taskID];
  const taskByID = ["tasks", taskID];
  const res = await kv
    .atomic()
    .check({ key: taskByID, versionstamp: null })
    .check({ key: taskByCreator, versionstamp: null })
    .set(taskByCreator, newTask)
    .set(taskByID, newTask)
    .commit();
  if (!res.ok) return { ok: false, data: null };
  return {
    ok: res.ok,
    data: taskID,
  };
}

interface GetTaskOptions {
  taskID: Task["id"];
}

export async function getTask({
  taskID,
}: GetTaskOptions): Promise<KvResult<Task>> {
  const key = ["tasks", taskID];
  const entry = await kv.get<Task>(key);
  const task = entry?.value;
  if (task === null) return { ok: false, data: null };
  return { ok: true, data: task };
}

interface DeleteUserTaskOptions {
  userID: User["id"];
  taskID: Task["id"];
}

export async function deleteUserTask({
  taskID,
  userID,
}: DeleteUserTaskOptions): Promise<KvResult<Task["id"]>> {
  const taskByCreatorKey = ["tasks", userID, taskID];
  const res = await kv.atomic()
    .delete(taskByCreatorKey)
    .commit();
  if (!res.ok) return { ok: false, data: null };
  return {
    ok: res.ok,
    data: taskID,
  };
}

export async function deleteCompleteTask({
  taskID,
  userID,
}: DeleteUserTaskOptions): Promise<KvResult<Task["id"]>> {
  const taskByIDKey = ["tasks", taskID];
  const taskByCreatorKey = ["tasks", userID, taskID];
  const res = await kv
    .atomic()
    .delete(taskByCreatorKey)
    .delete(taskByIDKey)
    .commit();
  if (!res.ok) return { ok: false, data: null };
  return {
    ok: res.ok,
    data: taskID,
  };
}

interface UpdateTaskOptions {
  task: Task;
}

export async function updateTask({
  task,
}: UpdateTaskOptions): Promise<KvResult<Task["id"]>> {
  const key = ["tasks", task.id];
  const creatorKey = ["tasks", task.creator, task.id];
  const res = await kv
    .atomic()
    .set(key, task)
    .set(creatorKey, task)
    .commit();
  if (!res.ok) return { ok: false, data: null };
  return {
    ok: res.ok,
    data: task.id,
  };
}
