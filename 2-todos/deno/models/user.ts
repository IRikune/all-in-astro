import { kv, ulid } from "../main.ts";
import type { User,newUser } from "../types/mod.ts";

export async function getUser({ userID }: { userID: string }) {
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

export async function createUser({ user }: { user: newUser }) {
  const userID = ulid();
  const newUser = { ...user, id: userID };
  const primarykey = ["users", userID];
  const emailkey = ["users", user.email];

  
  const res = await kv.atomic()
  .check({ key: primarykey, versionstamp: null })
  .check({ key: emailkey, versionstamp: null })
  .set(primarykey, newUser)
  .set(emailkey, newUser)
  .commit();

  return {resp:res, user : userID};
}

export async function updateUser(
  userID:string, upDatedUser: newUser 
) {
  const key = ["users", userID];
  const res = await kv.set(key, upDatedUser);
  return res;
}

export async function deleteUser({ userID }: { userID: string }) {
  const primaryKey = ["users", userID];
  const emailKey = ["users", userID];
  await kv.delete(key);
  const result = { ok: true, data: userID };
  return result;
}
