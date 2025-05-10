import type { KvResult, NewUser, User } from "../types/mod.ts";
import { monotonicUlid as ulid } from "@std/ulid/monotonic-ulid";
import { kv } from "../main.ts";

interface GetUserByIDOptions {
  userID: User["id"];
}

export async function getUserByID({
  userID,
}: GetUserByIDOptions): Promise<KvResult<User>> {
  const key = ["users", userID];
  const user = await kv.get<User>(key);
  if (user.value === null) return { ok: false, data: user.value };
  const result = {
    ok: true,
    data: user.value,
    versionstamp: user.versionstamp,
  };
  return result;
}

export async function getUsers(): Promise<KvResult<User[]>> {
  const entries = kv.list<User>({ prefix: ["users"] });
  const listUsers = [];
  for await (const user of entries) {
    listUsers.push(user.value);
  }
  if (listUsers.length === 0) return { ok: false, data: null };
  const result = { ok: true, data: listUsers };
  return result;
}

interface GetUserByEmailOptions {
  email: User["email"];
}

export async function getUserByEmail({
  email,
}: GetUserByEmailOptions): Promise<KvResult<User>> {
  const key = ["users", email];
  const user = await kv.get<User>(key);
  if (user === null) return { ok: false, data: null };
  const result = { ok: true, data: user.value, versionstamp: "" };
  return result;
}

interface CreateUserOptions {
  user: NewUser;
}

export async function createUser(
  { user }: CreateUserOptions,
): Promise<KvResult<User["id"]>> {
  const userID = ulid();
  const newUser = { ...user, id: userID };
  const userKey = ["users", userID];
  const emailKey = ["users", user.email];
  const res = await kv
    .atomic()
    .check({ key: userKey, versionstamp: null })
    .check({ key: emailKey, versionstamp: null })
    .set(userKey, newUser)
    .set(emailKey, newUser)
    .commit();
  const result = {
    ok: res.ok,
    data: userID,
  };
  return result;
}

interface UpdateUserOptions {
  userID: User["id"];
  newUser: NewUser;
}

export async function updateUser(
  { userID, newUser }: UpdateUserOptions,
): Promise<KvResult<User["id"]>> {
  const key = ["users", userID];
  const user = await kv.get<User>(key);
  if (user.value === null) return { ok: false, data: null };
  const res = await kv
    .atomic()
    .check(user)
    .set(key, newUser)
    .commit();
  return {
    ok: res.ok,
    data: user.value.id,
    versionstamp: user.versionstamp,
  };
}

interface deleteUserOptions {
  userID: User["id"];
}

export async function deleteUser({
  userID,
}: deleteUserOptions): Promise<KvResult<User>> {
  const key = ["users", userID];
  const user = await kv.get<User>(key);
  if (user.value === null) return { ok: false, data: null };
  const res = await kv.atomic()
    .check(user)
    .delete(key)
    .commit();
  const result = { ok: res.ok, data: user.value };
  return result;
}
