import { createFactory } from "hono/factory";
import { validator } from "hono/validator";
import { newUserSchema, userIDSchema } from "../schemas/mod.ts";
import { HTTPException } from "hono/http-exception";
import {
  createUser,
  deleteUser,
  getUserByID,
  updateUser,
} from "../models/user.ts";
import type { Result, User } from "../types/mod.ts";

const factory = createFactory();

export const getUserHandlers = factory.createHandlers(
  validator("param", (value) => {
    const { userID } = value;
    const valid = userIDSchema.safeParse(userID);
    if (!valid.success) {
      throw new HTTPException(402, valid.error);
    }
    return valid.data;
  }),
  async (c) => {
    const userID = c.req.valid("param");
    const user = await getUserByID({ userID });
    if (!user.ok || !user.data) {
      throw new HTTPException(404, { message: "User not found" });
    }
    const result: Result<User> = {
      ok: true,
      data: user.data,
      message: "User found",
    };
    return c.json(result);
  },
);

export const createUserHandlers = factory.createHandlers(
  validator("json", (value) => {
    const parsed = newUserSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  async (c) => {
    const newUser = c.req.valid("json");
    const user = await createUser({ user: newUser });
    if (!user.ok) {
      throw new HTTPException(400, { message: "User already exists" });
    }
    const result: Result<User["id"]> = {
      ok: user.ok,
      data: user.data,
      message: "User created",
    };
    return c.json(result);
  },
);

export const deleteUserHandlers = factory.createHandlers(
  validator("param", (value) => {
    const valid = userIDSchema.safeParse(value);
    if (!valid.success) {
      throw new HTTPException(402, valid.error);
    }
    return valid.data;
  }),
  async (c) => {
    const userID = c.req.valid("param");
    const response = await deleteUser({ userID });
    if (!response.ok || !response.data) {
      throw new HTTPException(400, { message: "User not found" });
    }
    const result: Result<User["id"]> = {
      ok: response.ok,
      data: response.data,
      message: "User deleted",
    };
    return c.json(result);
  },
);

export const updateUserHandlers = factory.createHandlers(
  validator("json", (value) => {
    const parsed = newUserSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(402, parsed.error);
    }
    return parsed.data;
  }),
  validator("param", (value) => {
    const parsed = userIDSchema.safeParse(value.userID);
    if (!parsed.success) {
      throw new HTTPException(400, { message: "user invalitor2" });
    }
    return parsed.data;
  }),
  async (c) => {
    const user = c.req.valid("json");
    const userID = c.req.valid("param");
    const updatedUser = await updateUser({ userID, newUser: user });
    return c.json(updatedUser);
  },
);
