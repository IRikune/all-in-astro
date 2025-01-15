import { Hono } from "hono";
import { notes } from "./routes/notes.ts";

export const kv = await Deno.openKv();
const app = new Hono();

app.route("notes", notes);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

Deno.serve(app.fetch);
