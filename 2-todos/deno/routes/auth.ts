import { Hono } from "hono";
import { validator } from "hono/validator";
import { authSchema } from "../schemas/auth.ts";
import { HTTPException } from "hono/http-exception";
import { getUserByEmail } from "../models/user.ts";

export const auth = new Hono();

auth.post(
  "/login",
  validator("form", (value) => {
    const { data, success } = authSchema.safeParse(value);
    if (!success) {
      throw new HTTPException(402, { message: "hola" });
    }
    return data;
  }),
  async (c) => {
    const body = c.req.valid("form");

    const user = await getUserByEmail(body.email);

    if (!user.ok) {
      throw new HTTPException(401, { message: "User not found" });
    }

    if (user.data?.password !== body.password) {
      throw new HTTPException(401, { message: "Invalid password" });
    }

    return c.json({ message: "Login successful" });
  },
);
