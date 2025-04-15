import { createFactory } from "hono/factory";
import { validator } from "hono/validator";
import { postUserSchema, userIDSchema } from "../schemas/users.ts";
import { HTTPException } from "hono/http-exception";
import {
  createUser,
  deleteUser,
  getUserByID,
  updateUser,
} from "../models/user.ts";

const factory = createFactory();

export const getUserHandlers = factory.createHandlers(
  validator("param", (value) => {
    const valid = userIDSchema.safeParse(value);
    if (!valid.success) {
      throw new HTTPException(402, valid.error);
    }
    return valid.data;
  }),
  async (c) => {
    const userID = c.req.valid("param");
    const result = await getUserByID({ userID });
    return c.json(result);
  },
);

export const createUserHandlers = factory.createHandlers(
  validator("json", (value) => {
    const parsed = postUserSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  async (c) => {
    const newUser = c.req.valid("json");
    const result = await createUser({ user: newUser });
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
    const result = await deleteUser({ userID });
    return c.json(result);
  },
);

export const updateUserHandlers = factory.createHandlers(
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
    const updatedUser = await updateUser({ userID, newUser: user });
    return c.json(updatedUser);
  },
);
