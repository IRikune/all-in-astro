import { assertEquals, assertObjectMatch } from "https://deno.land/std@0.150.0/testing/asserts.ts"
import type { NewUser } from "../types/mod.ts";

const ENDPOINT = Deno.env.get("ENDPOINT") || "http://localhost:8000/"

Deno.test("Should the user endpoint return a response with user data", async () => {
    const user = {
        name: "Testing",
        email: "testing@test.com",
        password: "test.test",
        avatar: "https://astro.build/assets/logo.svg"
    } as NewUser

    const res = await fetch(`${ENDPOINT}users/`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await res.json()
    const expectedResponse = {
        ok: true,
        data: {
            id: data.id,
            name: user.name,
            email: user.email,
            password: user.password,
            avatar: user.avatar,
        },
        timestamp: data.timestamp
    }
    // remove the user
    await fetch(`${ENDPOINT}users/${data.id}/`, {
        method: "DELETE"
    })
    assertObjectMatch(expectedResponse, data)
})

