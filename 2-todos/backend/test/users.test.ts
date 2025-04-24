import { assertObjectMatch } from "https://deno.land/std@0.150.0/testing/asserts.ts";
import type { NewUser, User } from "../types/mod.ts";

const ENDPOINT = Deno.env.get("ENDPOINT") || "http://localhost:8000/";

const user = {
  name: "Testing",
  email: "testing@test.com",
  password: "test.test",
  avatar: "https://astro.build/assets/logo.svg",
} as NewUser;

let createdUser = {} as User;

Deno.test("Should the user create endpoint return a response with user data", async () => {
  const res = await fetch(`${ENDPOINT}users/`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  createdUser = { ...data };

  const expectedResponse = {
    ok: true,
    data: { id: data.id },
    message: "User created",
    versionstamp: data.versionstamp,
  };

  // remove the user
  await fetch(`${ENDPOINT}users/${data.id}/`, {
    method: "DELETE",
  });
  assertObjectMatch(expectedResponse, data);
});

Deno.test("Should the user delete endpoint return a response with user deleted data", async () => {
  const res = await fetch(`${ENDPOINT}users/${createdUser.id}/`, {
    method: "DELETE",
  });
  const data = await res.json();
  const expectedResponse = {
    ok: true,
    data: {
      id: createdUser.id,
    },
    message: "User deleted",
  };
  assertObjectMatch(expectedResponse, data);
});

Deno.test("Should the user update endpoint return a response with user updated data", async () => {
  const newUser = {
    name: "Test",
    email: "test2@test.com",
    password: "test.test",
    avatar: "https://astro.build/assets/logo.svg",
  } as NewUser;
  const res = await fetch(`${ENDPOINT}users/${createdUser.id}/`, {
    method: "PATCH",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  const expectedResponse = {
    ok: true,
    data: {
      id: createdUser.id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      avatar: newUser.avatar,
    },
    message: "User updated",
  };
  assertObjectMatch(expectedResponse, data);
});
