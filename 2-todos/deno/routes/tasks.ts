import { Hono } from "hono";
import {
  createTaskHandlers,
  deleteTaskHandlers,
  getTaskHandlers,
  updateTaskHandlers,
} from "../controllers/tasks.ts";

export const tasks = new Hono();

tasks.get("/", (c) => {
  const result = { ok: true, data: "Task base endpoint" };
  return c.json(result);
});

tasks.get("/:taskID", ...getTaskHandlers);

tasks.post("/", ...createTaskHandlers);

tasks.delete("/:userID/:taskID", ...deleteTaskHandlers);

tasks.patch("/:taskID", ...updateTaskHandlers);
