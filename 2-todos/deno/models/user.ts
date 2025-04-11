import type { newUser, Result, User, UserID } from "../types/mod.ts";
import { monotonicUlid as ulid } from "@std/ulid/monotonic-ulid";
import { kv } from "../main.ts";

export async function getUserByID(userID: string): Promise<Result<User>> {
  const key = ["users", userID];
  const entry = await kv.get<User>(key);
  const user = entry?.value;
  const result = { ok: true, data: user } as Result<User>;
  return result;
}

export async function getUsers(): Promise<Result<User[]>> {
  const entries = kv.list<User>({ prefix: ["users"] });
  const listUsers = [];
  for await (const user of entries) {
    listUsers.push(user.value);
  }
  if (listUsers.length === 0) {
    const result = { ok: false, data: null, error: "No users found" } as Result<
      User[]
    >;
    return result;
  }
  const result = { ok: true, data: listUsers } as Result<User[]>;
  return result;
}

export async function getUserByEmail(email: string): Promise<Result<User>> {
  const key = ["users", email];
  const entry = await kv.get<User>(key);
  const user = entry?.value;
  if (user === null) {
    const result = { ok: false, data: null, error: "User not found" } as Result<
      User
    >;
    return result;
  }
  const result = { ok: true, data: user } as Result<User>;
  return result;
}

export async function createUser(user: newUser) {
  const userID = ulid();
  const newUser = { ...user, id: userID };
  const userKey = ["users", userID];
  const emailKey = ["users", user.email];

  const result = await kv.atomic()
    .check({ key: userKey, versionstamp: null })
    .check({ key: emailKey, versionstamp: null })
    .set(userKey, newUser)
    .set(emailKey, newUser)
    .commit();

  return result;
}

export async function updateUser(
  userID: string,
  newUser: newUser,
) {
  const key = ["users", userID];
  const user = await kv.get<User>(key);
  const result = await kv.atomic()
    .check(user)
    .set(key, newUser)
    .commit();
  return result;
}

export async function deleteUser(userID: UserID): Promise<Result<UserID>> {
  const key = ["users", userID];
  await kv.delete(key);
  const result = { ok: true, data: userID } as Result<UserID>;
  return result;
}
