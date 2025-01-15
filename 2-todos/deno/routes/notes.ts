import { Hono } from "hono";

export const notes = new Hono();

notes.get("/", (c) => {
  return c.text("notes");
});
