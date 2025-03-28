import { Hono } from "hono";
import { validator } from "hono/validator";
import { HTTPException } from "hono/http-exception";
import { postUserSchema, validId } from "../schemas/user.ts";
import { createUser, deleteUser, getUser, updateUser } from "../models/user.ts";
import { userIDSchema } from "../schemas/user.ts";
export const user = new Hono();

user.get(
  "/:userID",
  validator("param", (value) => {
    const valid = validId.safeParse(value);
    if (!valid.success) {
      throw new HTTPException(402, valid.error);
    }
    return valid.data;
  }),
  async (c) => {
    const { userID } = c.req.valid("param");
    const user = await getUser({ userID: userID });
    return c.json(user);
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
    const user = c.req.valid("json");
    const result = await createUser({ user });
    return c.json(result);
  },
);

user.put(
  "/:userID",
  validator("param", (value) => {
    const valid = validId.safeParse(value);
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
    const userId = c.req.valid("param");
    const { ok } = await updateUser({ updatedUser: user, userID: userId });
    const response = {
      ok,
      message: ok ? "User updated" : "User not found",
    };
    return c.json(response);
  },
);
