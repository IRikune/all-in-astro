import { Hono } from "hono";
import { getTasks } from "../models/tasks.ts";

export const tasks = new Hono();

tasks.get("/tasks/:userID?", async (c) => {
  const userID = c.req.param("userID");
  const tasks = await getTasks({ userID });
  const result = { ok: true, data: tasks };
  return c.json(result);
});
