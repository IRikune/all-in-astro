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
type getNoteOptions = {
  userID: string;
  noteID: string;
};

export async function createNote({ userID, note }: addNoteOptions) {
  if (!note.title) return { ok: false };
  if (!note.date) return { ok: false };
  const noteID = monotonicUlid();
  const newNote = { ...note, id: noteID };
  const key = ["notes", userID, noteID];
  const res = await kv.atomic()
    .check({ key, versionstamp: null })
    .set(key, newNote)
    .commit();
  return res;
}

export async function getNote({ userID, noteID }: getNoteOptions) {
  if (!noteID) return { ok: false };
  const key = ["notes", userID, noteID];
  const res = await kv.get(key);
  return res;
}

export async function updateNote({ userID, note }: addNoteOptions) {
  if (!note.id) return { ok: false };
  const key = ["notes", userID, note.id];
  const res = await kv.set(key, note);
  return res;
}
