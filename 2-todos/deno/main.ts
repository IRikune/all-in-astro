import { Hono } from "hono";

export const kv = Deno.openKv();
const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

Deno.serve(app.fetch);
