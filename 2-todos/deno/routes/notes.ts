import { Hono } from "hono";
import { getNotes } from "../models/notes.ts";

export const notes = new Hono();

notes.get("/notes/:userID?", async (c) => {
  const userID = c.req.param("userID");
  const notes = await getNotes({ userID });
  const result = { ok: true, data: notes };
  return c.json(result);
});
