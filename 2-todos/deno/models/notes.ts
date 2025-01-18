import { monotonicUlid } from "@std/ulid";
import type {
  createNoteOptions,
  getNoteOptions,
  Note,
  updateNoteOptions,
} from "../types/mod.ts";
import { kv } from "../main.ts";

export async function getNotes({ userID = "public" }) {
  const key = ["notes", userID];
  const iter = kv.list<Note>({ prefix: key });
  const notes: Note[] = [];
  for await (const note of iter) notes.push(note.value);
  return notes;
}
export async function createNote({ userID, note }: createNoteOptions) {
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
  const entry = await kv.get<Note>(key);
  const note = entry?.value;
  const result = { ok: true, data: note };
  return result;
}

export async function deleteNote({ userID, noteID }: getNoteOptions) {
  if (!noteID) return { ok: false };
  const key = ["notes", userID, noteID];
  await kv.delete(key);
  const result = { ok: true, data: noteID };
  return result;
}
export async function updateNote(
  { userID, noteID, newNote }: updateNoteOptions,
) {
  if (!noteID) return { ok: false };
  const key = ["notes", userID, noteID];
  const res = await kv.set(key, newNote);
  return res;
}
