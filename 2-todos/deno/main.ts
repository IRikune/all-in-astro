import { Hono } from "hono";
import { notes } from "./routes/notes.ts";

const app = new Hono();
export const kv = await Deno.openKv();

app.route("notes", notes);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

Deno.serve(app.fetch);
