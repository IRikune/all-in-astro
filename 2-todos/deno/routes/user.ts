import { Hono } from "hono";
import { validator } from "hono/validator";
import { HTTPException } from "hono/http-exception";
import { postUserSchema, userIDSchema } from "../schemas/user.ts";
import {
  createUser,
  deleteUser,
  getUserByID,
  updateUser,
} from "../models/user.ts";

export const user = new Hono();

user.get(
  "/:userID",
  validator("param", (value) => {
    const valid = userIDSchema.safeParse(value);
    if (!valid.success) {
      throw new HTTPException(402, valid.error);
    }
    return valid.data;
  }),
  async (c) => {
    const userID = c.req.valid("param");
    const result = await getUserByID(userID);
    return c.json(result);
  },
);

user.post(
  "/",
  validator("json", (value) => {
    const parsed = postUserSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  async (c) => {
    const newUser = c.req.valid("json");

    const result = await createUser(
      newUser,
    );
    return c.json(result);
  },
);

user.put(
  "/:userID",
  validator("param", (value) => {
    const valid = userIDSchema.safeParse(value);
    if (!valid.success) {
      throw new HTTPException(402, valid.error);
    }
    return valid.data;
  }),
  async (c) => {
    const userID = c.req.valid("param");
    const result = await deleteUser(userID);
    return c.json(result);
  },
);
user.patch(
  "/:userID",
  validator("json", (value) => {
    const valid = postUserSchema.safeParse(value);
    if (!valid.success) {
      throw new HTTPException(402, valid.error);
    }
    return valid.data;
  }),
  validator("param", (value) => {
    const parsed = userIDSchema.safeParse(value.userID);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  async (c) => {
    const user = c.req.valid("json");
    const userID = c.req.valid("param");
    const updatedUser = await updateUser(userID, user);
    return c.json(updatedUser);
  },
);
