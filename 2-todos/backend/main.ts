import { Hono } from "hono";
import { tasks } from "./routes/tasks.ts";
import { users } from "./routes/users.ts";
import { auth } from "./routes/auth.ts";
import { cors } from "hono/cors";
import { projects } from "./routes/projects.ts";

const app = new Hono()
  .use(cors())
  .route("/tasks/", tasks)
  .route("/users/", users)
  .route("/auth/", auth)
  .route("/projects/", projects);

export const kv = await Deno.openKv();

app.get("/", (c) => {
  return c.text("Server is running");
});

Deno.serve(app.fetch);
