import { Hono } from "hono";
import { monotonicUlid } from "@std/ulid/monotonic-ulid";
import { tasks } from "./routes/tasks.ts";
import { user } from "./routes/user.ts";

export const ulid = monotonicUlid;

const app = new Hono()
  .route("/tasks/", tasks)
  .route("/users/", user);
export const kv = await Deno.openKv();

app.get("/", (c) => {
  return c.text("Hello Hono 2222!");
});

Deno.serve(app.fetch);
