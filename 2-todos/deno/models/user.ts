import { kv, ulid } from "../main.ts";
import type { User,UserID,newUser } from "../types/mod.ts";

export async function getUser( userID : string ) {
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

export async function getUserByEmail(email: string) {
  const key = ["users", email];
  const entry = await kv.get<User>(key);
  const user = entry?.value;
  const result = { ok: true, data: user };
  return result;
}

export async function createUser( user : newUser ) {
  const userID = ulid();
  const newUser = { ...user, id: userID };
  const userKey = ["users", userID];
  const emailKey = ["users", user.email];
  
  const res = await kv.atomic()
  .check({ key:userKey, versionstamp: null })
  .check({ key:emailKey, versionstamp: null })
  .set(userKey, newUser)
  .set(emailKey, newUser)
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

export async function deleteUser( userID : UserID) {
  const key = ["users", userID];
  await kv.delete(key);
  const result = { ok: true, data: userID };
  return result;
}

export function getEmailAndPassword(formData : FormData){

  const toString = formData.entries().next().value[1].split('\r\n').concat('') as string[];
  console.log(toString[2]);
  console.log(toString[6]);
  
  const email = toString[2]
  const password = toString[6]
  return {email:email,password:password}
}