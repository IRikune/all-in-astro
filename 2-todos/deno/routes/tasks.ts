import { Hono } from "hono";
import { validator } from "hono/validator";
import { HTTPException } from "hono/http-exception";
import { postTaskSchema, taskIDSchema, taskSchema } from "../schemas/tasks.ts";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../models/tasks.ts";
import { userIDSchema } from "../schemas/users.ts";

export const tasks = new Hono();

tasks.get("/", (c) => {
  const result = { ok: true, data: "Hello, world!" };
  return c.json(result);
});

tasks.get("/:userID", async (c) => {
  const userID = c.req.param("userID");
  const tasks = await getTasks(userID);
  const result = { ok: true, data: tasks };
  return c.json(result);
});

tasks.post(
  "/:userID",
  validator("json", (value) => {
    const parsed = postTaskSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  validator("param", (value) => {
    const parsed = userIDSchema.safeParse(value.userID);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  async (c) => {
    const userID = c.req.valid("param");
    const task = c.req.valid("json");
    const result = await createTask({ userID, task });
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
    const userAndTaskId = c.req.valid("param");
    const deleteTas = await deleteTask(userAndTaskId);
    return c.json(deleteTas);
  },
);

tasks.patch(
  "/:userID/:taskID",
  validator("param", (value) => {
    const parseUser = userIDSchema.safeParse(value.userID);
    const parseTask = taskIDSchema.safeParse(value.taskID);
    if (!parseUser.success) {
      throw new HTTPException(400, { message: "user invalitor" });
    }
    if (!parseTask.success) {
      throw new HTTPException(400, { message: "task invalitor" });
    }

    return { user: parseUser.data, task: parseTask.data };
  }),
  validator("json", (value) => {
    const parse = taskSchema.safeParse(value);
    if (!parse.success) {
      throw new HTTPException(400, parse.error);
    }
    return parse.data;
  }),
  async (c) => {
    const param = c.req.valid("param");
    const body = c.req.valid("json");

    const upDatedTask = await updateTask({
      userID: param.user,
      taskID: param.task,
      newTask: body,
    });
    return c.json(upDatedTask);
  },
);
