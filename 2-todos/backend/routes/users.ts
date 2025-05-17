import { Hono } from "hono";
import {
  createUserHandlers,
  deleteUserHandlers,
  getUserHandlers,
  updateUserHandlers,
} from "../controllers/users.ts";

export const users = new Hono();

users.get("/:userID", ...getUserHandlers);

users.post("/", ...createUserHandlers);

users.patch("/:userID", ...updateUserHandlers);

users.delete("/:userID", ...deleteUserHandlers);
