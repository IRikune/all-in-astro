import { Hono } from "hono";
import { tasks } from "./routes/tasks.ts";
import { user } from "./routes/user.ts";
import { auth } from "./routes/auth.ts";
import { cors } from "hono/cors";

const app = new Hono()
  .use(cors({ origin: "http://localhost:4321" }))
  .route("/tasks/", tasks)
  .route("/users/", user)
  .route("/auth/", auth);

export const kv = await Deno.openKv();

app.get("/", (c) => {
  return c.text("Hello Hono 2222!");
});

Deno.serve(app.fetch);
