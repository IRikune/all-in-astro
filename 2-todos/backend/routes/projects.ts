import { Hono } from "hono";
import {
  createProjectHandlers,
  getProjectHandlers,
  updateProjectHandlers,
} from "../controllers/projects.ts";

export const projects = new Hono();

projects.get("/:projectID", ...getProjectHandlers);

projects.post("/", ...createProjectHandlers);

projects.patch("/:projectID", ...updateProjectHandlers);
