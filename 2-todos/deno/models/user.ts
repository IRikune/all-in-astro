import { kv, ulid } from "../main.ts";
import type { User } from "../types/mod.ts";

export async function getUser({ userID }: { userID: string }) {
  const key = ["users", userID];
  const entry = await kv.get<User>(key);
  const user = entry?.value;
  const result = { ok: true, data: user };
  return result;
}

export async function createUser({ user }: { user: User }) {
  const userID = ulid();
  const newUser = { ...user, id: userID };
  const key = ["users", userID];
  const res = await kv.atomic()
    .check({ key, versionstamp: null })
    .set(key, newUser)
    .commit();
  return res;
}

export async function updateUser(
  { userID, newUser }: { userID: string; newUser: User },
) {
  const key = ["users", userID];
  const res = await kv.set(key, newUser);
  return res;
}

export async function deleteUser({ userID }: { userID: string }) {
  const key = ["users", userID];
  await kv.delete(key);
  const result = { ok: true, data: userID };
  return result;
}
