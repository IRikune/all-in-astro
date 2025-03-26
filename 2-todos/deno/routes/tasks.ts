import { Hono } from "hono";
import { validator } from "hono/validator";
import { HTTPException } from "hono/http-exception";
import { baseSchema, postTaskSchema, userIDSchema, taskPatchSchema } from "../schemas/tasks.ts";
import { deleteTask, createTask, getTasks, deleteTasks, updateTask } from "../models/tasks.ts";

export const tasks = new Hono();

tasks.get("/", async (c) => {
  const result = await { ok: true, data: "Hello, world!" };
  return c.json(result);
});

tasks.get("/:userID?", async (c) => {
  const userID = c.req.param("userID") as string;
  const tasks = await getTasks( userID );
  const result = { ok: true, data: tasks };
  return c.json(result);
});

tasks.post(
  "/:userID",
  validator("json", (value) => {
    const parsed = postTaskSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  validator("param", (value) => {
    const parsed = userIDSchema.safeParse(value.userID);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  async (c) => {
    const userID = c.req.valid("param");
    const task = c.req.valid("json");
    const result = await createTask({ userID, task });
    if (!result) {
      throw new HTTPException(400, { message: "Task creation failed" });
    }
    return c.json(result);
  },
);
tasks.put("/:userID",
  validator("param", (value) => {
    const parse = userIDSchema.safeParse(value.userID);
    if (!parse.success) {
      throw new HTTPException(400, {message: "user invalitor"})
    }
    return parse.data

  }),
  async (c) => {
    const userID = c.req.valid("param")
    const deleteTas = await deleteTasks(userID)
    return c.json(deleteTas)
  }
)

tasks.patch("/:userID/tasks/:taskID",
  validator("param",(value)=>{
    const parse = taskPatchSchema.safeParse(value);
    if (!parse.success) {
      throw new HTTPException(400, {message: "user invalitor"})
    }
    return parse.data

  }),
  validator("json",(value)=>{
    const parse = baseSchema.safeParse(value);
    if (!parse.success) {
      throw new HTTPException(400, {message: "user invalitor"})
    }
    return parse.data
  })
  ,
  
  async (c) => {
    const {userID, taskID} = c.req.valid("param")
    const json = c.req.valid("json")

    const upDatedTask = await updateTask({userID: userID, taskID : taskID, newTask: json})
    return c.json(upDatedTask)
  }

)
const hola = {
  "code": "invalid_type",
  "expected": "string",
  "received": "number",
  "path": [ "name" ],
  "message": "Expected string, received number"
} 
function fun(value: object) {
  return `expected ${value.expected} received ${value.received}`
}
fun(hola)
/*
tarea de creacion
{
  "creator":"01JQ78S7GWQBFQ4VGN41GR1M87",
      "title": "Completar informe anual y mensual",
      "content": "Revisar y finalizar el informe mensual de ventas.",
      "completed": false,
      "comments": [],
      "subTasks": [],
      "date": {
        "created" :1633072800000,
        "completed": 0,
        "expected": 1633332000000
      },
      "priority": 1
    }



 {
  "creator":"yo mismossss",
      "title": "Completar informe mensual",
      "content": "Revisar y finalizar el informe mensual de ventas.",
      "completed": false,
      "comments": [
        {
          "id": "c1",
          "creator": "u1",
          "content": "No olvides incluir los datos de la última semana.",
          "createdAt": 1633072800000
        }
      ],
      "subTasks": [
        {
          "id": "s1",
          "title": "Recopilar datos de ventas",
          "creator":"yo mismossss",
          "content": "Obtener los datos de ventas de todos los departamentos.",
          "completed": true,
          "comments": [],
          "date": {
            "created": 1633072800000,
            "completed": 1633159200000,
            "expected": 1633159200000
          },
          "priority": "Priority.medium"
        },
        {
          "id": "s2",
          "title": "Revisar cifras con el equipo",
          "creator":"yo",
          "content": "Reunirse con el equipo para validar las cifras.",
          "completed": false,
          "comments": [],
          "date": {
            "created": 1633072800000,
            "completed": 0,
            "expected": 1633245600000
          },
          "priority": "Priority.high"
        }
      ],
      "date": {
        "created" :1633072800000,
        "completed": 0,
        "expected": 1633332000000
      },
      "priority": "Priority.high"
    }
*/
