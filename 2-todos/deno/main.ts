import { Hono } from "hono";
import { tasks } from "./routes/tasks.ts";

const app = new Hono();
export const kv = await Deno.openKv();

app.route("tasks", tasks);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

Deno.serve(app.fetch);
