import { Hono } from "hono";
import {
  createProjectHandlers,
  deleteProjectHandlers,
  getManyProjectsHandlers,
  getProjectHandlers,
  updateProjectHandlers,
} from "../controllers/projects.ts";

export const projects = new Hono();

projects.get("/users/:userID", ...getManyProjectsHandlers);

projects.get("/:projectID", ...getProjectHandlers);

projects.post("/", ...createProjectHandlers);

projects.patch("/:projectID", ...updateProjectHandlers);

projects.delete("/:projectID/:userID", ...deleteProjectHandlers);
