import { Hono } from "hono";
import {
  createCommentHandlers,
  createTaskHandlers,
  deleteTaskHandlers,
  getManyTasksHandlers,
  getTaskHandlers,
  updateTaskHandlers,
} from "../controllers/tasks.ts";

export const tasks = new Hono();

tasks.get("/", (c) => {
  const result = { ok: true, data: "Task base endpoint" };
  return c.json(result);
});

tasks.get("/:taskID", ...getTaskHandlers);

tasks.get("/users/:userID", ...getManyTasksHandlers);

tasks.post("/", ...createTaskHandlers);

tasks.delete("/:taskID/:userID", ...deleteTaskHandlers);

tasks.patch("/:taskID", ...updateTaskHandlers);

tasks.post("/:taskID/comments/", ...createCommentHandlers);
