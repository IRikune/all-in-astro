import { Hono } from "hono";
import { tasks } from "./routes/tasks.ts";

const app = new Hono();
export const kv = await Deno.openKv();

app.route("/tasks/", tasks);

app.get("/", (c) => {
  return c.text("Hello Hono 2222!");
});

Deno.serve(app.fetch);
