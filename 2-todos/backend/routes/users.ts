import { Hono } from "hono";
import {
  createUserHandlers,
  deleteUserHandlers,
  getUserHandlers,
  updateUserHandlers,
} from "../controllers/users.ts";
import {
  deleteProjectHandlers,
  getManyProjectsHandlers,
} from "../controllers/projects.ts";

export const users = new Hono();

users.get("/:userID", ...getUserHandlers);

users.post("/", ...createUserHandlers);

users.patch("/:userID", ...updateUserHandlers);

users.delete("/:userID", ...deleteUserHandlers);

users.get("/:userID/projects", ...getManyProjectsHandlers);

users.delete("/:userID/:projectID", ...deleteProjectHandlers);
