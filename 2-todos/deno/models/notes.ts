import { monotonicUlid } from "@std/ulid";
import type { Note } from "../types/mod.ts";
import { kv } from "../main.ts";

export async function getNotes({ id = "public" }) {
  const key = ["notes", id];
  const iter = kv.list<Note>({ prefix: key });
  const notes: Note[] = [];
  for await (const note of iter) notes.push(note.value);
  return notes;
}
type addNoteOptions = {
  userID: string;
  note: Note;
};

export async function updateNote({ userID, note }: addNoteOptions) {
  if (!note.id) return { ok: false };
  const key = ["notes", userID, note.id];
  const res = await kv.set(key, note);
  return res;
}
