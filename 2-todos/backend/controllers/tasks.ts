import { createFactory } from "hono/factory";
import { validator } from "hono/validator";
import { HTTPException } from "hono/http-exception";
import { getUserByID } from "../models/user.ts";
import {
  createTask,
  deleteCompleteTask,
  deleteUserTask,
  getManyTasks,
  getTask,
  updateTask,
} from "../models/tasks.ts";
import {
  newCommentSchema,
  newTaskSchema,
  taskIDSchema,
} from "../schemas/tasks.ts";
import { userIDSchema } from "../schemas/users.ts";
import { monotonicUlid as ulid } from "@std/ulid";
import type { Comment, Result, Task } from "../types/mod.ts";

const factory = createFactory();

export const getTaskHandlers = factory.createHandlers(
  validator("param", (value) => {
    const parsed = taskIDSchema.safeParse(value?.taskID);
    if (!parsed.success) {
      throw new HTTPException(400, { message: "Task ID is invalid" });
    }
    return parsed.data;
  }),
  async (c) => {
    const taskID = c.req.valid("param");
    const task = await getTask({ taskID });
    return c.json(task);
  },
);

export const getManyTasksHandlers = factory.createHandlers(
  validator("param", (value) => {
    const parsed = userIDSchema.safeParse(value.userID);
    if (!parsed.success) {
      throw new HTTPException(400, { message: "User ID is Invalid" });
    }
    return parsed.data;
  }),
  async (c) => {
    const userID = c.req.valid("param");
    console.log(userID);
    const tasks = await getManyTasks({ userID });
    return c.json(tasks);
  },
);

export const createTaskHandlers = factory.createHandlers(
  validator("json", (value) => {
    const parsed = newTaskSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  async (c) => {
    const task = c.req.valid("json");
    const creator = await getUserByID({ userID: task.creator });
    console.log(creator);
    if (!creator.ok) {
      throw new HTTPException(400, { message: "Task creator not found" });
    }
    const taskResult = await createTask({ task });
    if (!taskResult.ok) {
      throw new HTTPException(400, { message: "Task already exists" });
    }
    const result: Result<Task["id"]> = {
      ok: taskResult.ok,
      data: taskResult.data,
      message: "Task created succesfull",
    };
    return c.json(result);
  },
);

export const deleteTaskHandlers = factory.createHandlers(
  validator("param", (value) => {
    const parsedUserID = userIDSchema.safeParse(value.userID);
    const parsedTaskID = taskIDSchema.safeParse(value.taskID);
    if (!parsedUserID.success) {
      throw new HTTPException(400, { message: "User ID is invalid" });
    }
    if (!parsedTaskID.success) {
      throw new HTTPException(400, { message: "Task ID is invalid" });
    }
    return { userID: parsedUserID.data, taskID: parsedTaskID.data };
  }),
  async (c) => {
    const { taskID, userID } = c.req.valid("param");
    const task = await getTask({ taskID });
    if (!task.ok) {
      throw new HTTPException(400, { message: "Task not found" });
    }
    if (task.data?.colaborators) {
      const res = await deleteUserTask({ taskID, userID });
      const result: Result<Task["id"]> = {
        ok: res.ok,
        data: res.data,
        message: "Task deleted from user",
      };
      return c.json(result);
    }
    const res = await deleteCompleteTask({ userID, taskID });
    const result: Result<Task["id"]> = {
      ok: res.ok,
      data: res.data,
      message: "Task deleted completely",
    };
    return c.json(result);
  },
);

export const updateTaskHandlers = factory.createHandlers(
  validator("param", (value) => {
    const parsed = taskIDSchema.safeParse(value.taskID);
    if (!parsed.success) {
      throw new HTTPException(400, { message: "Task ID is invalid" });
    }
    return parsed.data;
  }),
  validator("json", (value) => {
    const parse = newTaskSchema.safeParse(value);
    if (!parse.success) {
      throw new HTTPException(400, parse.error);
    }
    return parse.data;
  }),
  async (c) => {
    const taskID = c.req.valid("param");
    const validTask = c.req.valid("json");
    const task = await getTask({ taskID });
    if (!task.data) {
      throw new HTTPException(400, { message: "Task not found" });
    }
    const newTask: Task = {
      ...task.data,
      ...validTask,
    };
    const updatedTask = await updateTask({ task: newTask });
    const result: Result<Task["id"]> = {
      ok: updatedTask.ok,
      data: updatedTask.data,
      message: "Task updated succesfully",
    };
    return c.json(result);
  },
);

export const createCommentHandlers = factory.createHandlers(
  validator("json", (value) => {
    const parsed = newCommentSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  validator("param", (value) => {
    const parsed = taskIDSchema.safeParse(value.taskID);
    if (!parsed.success) {
      throw new HTTPException(400, { message: "Task ID is invalid" });
    }
    return parsed.data;
  }),
  async (c) => {
    const taskID = c.req.valid("param");
    const comment = c.req.valid("json");
    const currentTask = await getTask({ taskID });
    const currentComments = currentTask.data?.comments || [];
    const newTask = currentTask.data;
    const newCommentID = ulid();
    if (newTask === null) {
      throw new HTTPException(400, { message: "Task not found" });
    }
    const newComment = {
      id: newCommentID,
      ...comment,
    };
    const postTask: Task = {
      ...newTask,
      id: taskID,
      comments: [...currentComments, newComment],
    };
    const res = await updateTask({ task: postTask });
    const result: Result<Comment["id"]> = {
      ok: res.ok,
      data: newCommentID,
      message: "Comment created succesfully",
    };
    return c.json(result);
  },
);
