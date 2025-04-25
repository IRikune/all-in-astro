import { monotonicUlid as ulid } from "@std/ulid";
import { kv } from "../main.ts";
import type {
  DenoKVCommit,
  KvResult,
  NewTask,
  Task,
  User,
} from "../types/mod.ts";

interface GetTasksOptions {
  userID: User["id"];
}

export async function getManyTask({
  userID,
}: GetTasksOptions): Promise<KvResult<Task[]>> {
  const key = ["tasks", userID];
  const iter = kv.list<Task>({ prefix: key });
  const tasks: Task[] = [];
  for await (const task of iter) tasks.push(task.value);
  const result = { ok: true, data: tasks };
  return result;
}

interface CreateTaskOptions {
  task: NewTask;
}

export async function createTask(
  { task }: CreateTaskOptions,
): Promise<KvResult<Task["id"]>> {
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
  const result = { ok: res.ok, data: taskID };
  return result;
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
  const result = { ok: true, data: task };
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

export async function deleteTask({
  userID,
  taskID,
}: DeleteTaskOptions): Promise<KvResult<Task["id"]>> {
  const key = [userID, "tasks", taskID];
  await kv.delete(key);
  const result = { ok: true, data: taskID };
  return result;
}

interface UpdateTaskOptions {
  taskID: Task["id"];
  newTask: Task;
}

export async function updateTask({
  taskID,
  newTask,
}: UpdateTaskOptions): Promise<KvResult<DenoKVCommit>> {
  const key = ["tasks", taskID];
  const creatorKey = ["tasks", newTask.creator, taskID];
  const res = await kv
    .atomic()
    .set(key, newTask)
    .set(creatorKey, newTask)
    .commit();
  const result = { ok: true, data: res };
  return result;
}

interface DeleteTasksOptions {
  userID: User["id"];
}

export async function deleteTasks({
  userID,
}: DeleteTasksOptions): Promise<KvResult<User["id"]>> {
  const listTasks = kv.list({ prefix: ["tasks", userID] });
  for await (const task of listTasks) {
    kv.delete(task.key);
  }
  const result = { ok: true, data: userID };
  return result;
}
