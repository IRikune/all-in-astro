import { Hono } from "hono";
import { validator } from "hono/validator";
import { HTTPException } from "hono/http-exception";
import { postUserSchema } from "../schemas/user.ts";
import { ulid } from "../main.ts";

export const user = new Hono();

user.get("/", (c) => {
  return c.text("Hello, world!");
});
user.post(
  "/",
  validator("json", (value, _c) => {
    const parsed = postUserSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  async (c) => {
    const user = c.req.valid("json");
    const fullUser = {
      id: ulid(),
      ...user,
    };
    return c.json(fullUser);
  },
);
