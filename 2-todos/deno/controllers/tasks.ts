import { createFactory } from "hono/factory";
import { validator } from "hono/validator";
import { HTTPException } from "hono/http-exception";
import {
  createTask,
  deleteTask,
  getManyTask,
  getTask,
  updateTask,
} from "../models/tasks.ts";
import { newTaskSchema, taskIDSchema, taskSchema } from "../schemas/tasks.ts";
import { userIDSchema } from "../schemas/users.ts";

const factory = createFactory();

export const getTaskHandlers = factory.createHandlers(
  validator("param", (value) => {
    const parsed = taskIDSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, { message: "taskID invalid" });
    }
    return parsed.data;
  }),
  async (c) => {
    const taskID = c.req.valid("param");
    const task = await getTask({ taskID });
    return c.json(task);
  },
);

export const getManyTaskHandlers = factory.createHandlers(
  validator("param", (value) => {
    const parsed = userIDSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, { message: "Invalid userID" });
    }
    return parsed.data;
  }),
  async (c) => {
    const userID = c.req.valid("param");
    const tasks = await getManyTask({ userID });
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
    const result = await createTask({ task });
    if (!result.ok) {
      throw new HTTPException(400, { message: "Task creation failed" });
    }
    return c.json(result);
  },
);

export const deleteTaskHandlers = factory.createHandlers(
  validator("param", (value) => {
    const parsedUserID = userIDSchema.safeParse(value.userID);
    const parsedTaskID = taskIDSchema.safeParse(value.taskID);
    if (!parsedUserID.success) {
      throw new HTTPException(400, { message: "user invalitor" });
    }
    if (!parsedTaskID.success) {
      throw new HTTPException(400, { message: "taskID invalid" });
    }
    return { userID: parsedUserID.data, taskID: parsedTaskID.data };
  }),
  async (c) => {
    const { taskID, userID } = c.req.valid("param");
    const result = await deleteTask({ userID, taskID });
    return c.json(result);
  },
);

export const updateTaskHandlers = factory.createHandlers(
  validator("param", (value) => {
    const parsed = taskIDSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, { message: "task invalitor" });
    }

    return parsed.data;
  }),
  validator("json", (value) => {
    const parse = taskSchema.safeParse(value);
    if (!parse.success) {
      throw new HTTPException(400, parse.error);
    }
    return parse.data;
  }),
  async (c) => {
    const taskID = c.req.valid("param");
    const newTask = c.req.valid("json");
    const updatedTask = await updateTask({
      taskID,
      newTask,
    });
    return c.json(updatedTask);
  },
);
