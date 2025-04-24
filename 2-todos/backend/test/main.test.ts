import { assertEquals } from "https://deno.land/std@0.150.0/testing/asserts.ts"

const ENDPOINT = Deno.env.get("ENDPOINT") || "http://localhost:8000/"

Deno.test("Check if the server is running", async () => {
    const res = await fetch(ENDPOINT)
    const text = await res.text()
    assertEquals(text, "Server is running")
})
