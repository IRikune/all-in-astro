import { kv, ulid } from "../main.ts";
import type { newUser, User, UserID } from "../types/mod.ts";

export async function getUser({ userID }: { userID: UserID }) {
  const key = ["users", userID];
  const entry = await kv.get<User>(key);
  const user = entry?.value;
  const result = { ok: true, data: user };
  return result;
}
export async function getUsers() {
  const entries = kv.list({ prefix: ["users"] });
  const listUsers = [];
  for await (const user of entries) {
    listUsers.push(user.value);
  }
  const result = { ok: true, data: listUsers };
  return result;
}

export async function getUserByEmail({ email }: { email: User["email"] }) {
  const key = ["users", email];
  const entry = await kv.get<User>(key);
  const user = entry?.value;
  const result = { ok: true, data: user };
  return result;
}

export async function createUser({ user }: { user: newUser }) {
  const userID = ulid();
  const newUser = { ...user, id: userID };
  const userKey = ["users", userID];
  const emailKey = ["users", user.email];

  const res = await kv.atomic()
    .check({ key: userKey, versionstamp: null })
    .check({ key: emailKey, versionstamp: null })
    .set(userKey, newUser)
    .set(emailKey, newUser)
    .commit();

  return { resp: res, user: userID };
}

export async function updateUser({ userID, updatedUser }: {
  userID: UserID;
  updatedUser: newUser;
}) {
  const key = ["users", userID];
  const res = await kv.set(key, updatedUser);
  return res;
}

export async function deleteUser({ userID }: { userID: UserID }) {
  const key = ["users", userID];
  await kv.delete(key);
  const result = { ok: true, data: userID };
  return result;
}
