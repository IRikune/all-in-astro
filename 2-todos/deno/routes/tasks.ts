import { Hono } from "hono";
import { validator } from "hono/validator";
import { HTTPException } from "hono/http-exception";
import { newTaskSchema, taskIDSchema, taskSchema } from "../schemas/tasks.ts";
import {
  createTask,
  deleteTask,
  getManyTask,
  getTask,
  updateTask,
} from "../models/tasks.ts";
import { userIDSchema } from "../schemas/users.ts";

export const tasks = new Hono();

tasks.get("/", (c) => {
  const result = { ok: true, data: "Task base endpoint" };
  return c.json(result);
});

tasks.get(
  "/:taskID",
  validator("param", (value) => {
    const parsed = taskIDSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, { message: "taskID invalid" });
    }
    return parsed.data;
  }),
  async (c) => {
    const taskID = c.req.valid("param");
    const tasks = await getTask({ taskID });
    const result = { ok: true, data: tasks };
    return c.json(result);
  },
);

tasks.post(
  "/",
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
tasks.delete(
  "/:userID/:taskID",
  validator("param", (value) => {
    const parseuserID = userIDSchema.safeParse(value.userID);
    const parsetaskID = taskIDSchema.safeParse(value.taskID);
    if (!parseuserID.success) {
      throw new HTTPException(400, { message: "user invalitor" });
    }
    if (!parsetaskID.success) {
      throw new HTTPException(400, { message: "taskID invalid" });
    }
    return { userID: parseuserID.data, taskID: parsetaskID.data };
  }),
  async (c) => {
    const { taskID, userID } = c.req.valid("param");
    const result = await deleteTask({ userID, taskID });
    return c.json(result);
  },
);

tasks.patch(
  "/:taskID",
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
