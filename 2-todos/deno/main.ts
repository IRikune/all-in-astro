import { Hono} from "hono";
import { validator } from "hono/validator";
import { monotonicUlid } from "@std/ulid/monotonic-ulid";
import { tasks } from "./routes/tasks.ts";
import { user } from "./routes/user.ts";
import { validLoginForm } from "./schemas/user.ts";
import { HTTPException } from "hono/http-exception";
import { getEmailAndPassword, getUserByEmail } from "./models/user.ts";
import { cors } from 'hono/cors';

export const ulid = monotonicUlid;

const app = new Hono()
  .route("/tasks/", tasks)
  .route("/users/", user);
  app.use(cors({ origin: 'http://localhost:4321' }));
export const kv = await Deno.openKv();

app.get("/", (c) => {
  return c.text("Hello Hono 2222!");
});


app.post("/login",
  validator("form",(value) =>{
    
    const valid = validLoginForm.safeParse(value);
    if(!valid.success) {
      throw new HTTPException(402, {message:"hola"})
    }
    return valid.data
  }),
  async (c) => {
    const body = c.req.valid("form");

    const isThisUser = await getUserByEmail(body.email);

    if(!isThisUser.ok) {
      throw new HTTPException(401, {message:"User not found"});
    }
    const user = isThisUser.data;
    if(user?.password !== body.password) {
      throw new HTTPException(401, {message:"Invalid password"});
    }
    return c.json({message:"Login successful"});
  }
);
Deno.serve(app.fetch);
