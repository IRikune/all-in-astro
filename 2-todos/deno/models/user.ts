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
  const key = ["users", userID];
  const listUsers = kv.list({ prefix: ["users"] });

  let isRepeat=false;
  for await (const user of listUsers) {
    const users = user.value as User;
    if(users.email === newUser.email){
      isRepeat=true;
      break;
    }
  }
  if(!isRepeat){
    const res = await kv.atomic()
    .check({ key, versionstamp: null })
    .set(key, newUser)
    .commit();
  
  return {resp:res, user : userID};
  }
  return 'Email already exists';
}

export async function updateUser(
  userID:string, upDatedUser: newUser 
) {
  const key = ["users", userID];
  const res = await kv.set(key, upDatedUser);
  return res;
}

export async function deleteUser({ userID }: { userID: string }) {
  const key = ["users", userID];
  await kv.delete(key);
  const result = { ok: true, data: userID };
  return result;
}
