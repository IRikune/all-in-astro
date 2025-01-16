import type { Note } from "../types/mod.ts";
import { kv } from "../main.ts";

export async function getNotes({ id = "public" }) {
  const key = ["notes", id];
  const iter = kv.list<Note>({ prefix: key });
  const notes: Note[] = [];
  for await (const note of iter) notes.push(note.value);
  return notes;
}
