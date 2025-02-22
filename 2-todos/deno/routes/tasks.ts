import { Hono } from "hono";
import { validator } from "hono/validator";
import { HTTPException } from "hono/http-exception";
import { postTaskSchema, taskSchema, userIDSchema } from "../schemas/tasks.ts";
import { createTask, getTasks } from "../models/tasks.ts";

export const tasks = new Hono();

tasks.get("/tasks/:userID?", async (c) => {
  const userID = c.req.param("userID");
  const tasks = await getTasks({ userID });
  const result = { ok: true, data: tasks };
  return c.json(result);
});

tasks.post(
  "/tasks/:userID",
  validator("json", (value) => {
    const parsed = postTaskSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  validator("param", (value) => {
    const parsed = userIDSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  async (c) => {
    const userID = c.req.valid("param");
    const task = c.req.valid("json");
    const result = await createTask({ userID, task });
    return c.json(result);
  },
);
