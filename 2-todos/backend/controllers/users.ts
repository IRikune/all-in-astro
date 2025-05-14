import { createFactory } from "hono/factory";
import { validator } from "hono/validator";
import { newUserSchema, userIDSchema } from "../schemas/mod.ts";
import { HTTPException } from "hono/http-exception";
import {
  createUser,
  deleteUser,
  getUserByID,
  updateUser,
} from "../models/user.ts";
import type {
  NewProject,
  NewTask,
  Project,
  Result,
  User,
} from "../types/mod.ts";
import { createTask } from "../models/tasks.ts";
import { getInitialTasks } from "../utils/mod.ts";
import { createProject } from "../models/projects.ts";

const factory = createFactory();

export const getUserHandlers = factory.createHandlers(
  validator("param", (value) => {
    const { userID } = value;
    const valid = userIDSchema.safeParse(userID);
    if (!valid.success) {
      throw new HTTPException(402, valid.error);
    }
    return valid.data;
  }),
  async (c) => {
    const userID = c.req.valid("param");
    const user = await getUserByID({ userID });
    if (!user.ok || !user.data) {
      throw new HTTPException(404, { message: "User not found" });
    }
    const result: Result<User> = {
      ok: true,
      data: user.data,
      message: "User found",
    };
    return c.json(result);
  },
);

export const createUserHandlers = factory.createHandlers(
  validator("json", (value) => {
    const parsed = newUserSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  async (c) => {
    // Valid and create initial user
    const validUser = c.req.valid("json");
    const user = await createUser({ user: validUser });
    if (!user.ok || !user.data) {
      throw new HTTPException(400, { message: "User already exists" });
    }
    // Create initial tasks
    const initialTasks: Array<NewTask> = getInitialTasks({ userID: user.data });
    const tasksPromises = initialTasks.map(async (task) => {
      const res = await createTask({ task });
      if (!res.ok || res.data === null) return "";
      return res.data;
    });
    const createdTasks = await Promise.all(tasksPromises);
    // Create initial project
    const newProject: NewProject = {
      title: "My space",
      description: "This is your space to store your tasks",
      creator: user.data,
      tasks: createdTasks,
    };
    const res = await createProject({ newProject });
    if (!res.ok || res.data === null) {
      throw new HTTPException(400, { message: "Project already exists" });
    }
    const createdProject: Project = {
      ...newProject,
      id: res.data,
    };
    // updated final user
    const initialUser: User = {
      ...validUser,
      id: user.data,
      projects: [createdProject],
      groups: ["Carnivores 🦖", "Herbivores 🦕"],
      categories: ["Food", "Todos", "Projects", "Dreams"],
    };
    const userResult = await updateUser({
      userID: user.data,
      newUser: initialUser,
    });
    if (!userResult.ok) {
      throw new HTTPException(400, { message: "Unable to update user" });
    }
    const result: Result<User["id"]> = {
      ok: user.ok,
      data: userResult.data,
      message: "User created",
    };
    return c.json(result);
  },
);

export const deleteUserHandlers = factory.createHandlers(
  validator("param", (value) => {
    const valid = userIDSchema.safeParse(value);
    if (!valid.success) {
      throw new HTTPException(402, valid.error);
    }
    return valid.data;
  }),
  async (c) => {
    const userID = c.req.valid("param");
    const response = await deleteUser({ userID });
    if (!response.ok || !response.data) {
      throw new HTTPException(400, { message: "User not found" });
    }
    const result: Result<User["id"]> = {
      ok: response.ok,
      data: response.data,
      message: "User deleted",
    };
    return c.json(result);
  },
);

export const updateUserHandlers = factory.createHandlers(
  validator("json", (value) => {
    const parsed = newUserSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(402, parsed.error);
    }
    return parsed.data;
  }),
  validator("param", (value) => {
    const parsed = userIDSchema.safeParse(value.userID);
    if (!parsed.success) {
      throw new HTTPException(400, { message: "user invalitor2" });
    }
    return parsed.data;
  }),
  async (c) => {
    const user = c.req.valid("json");
    const userID = c.req.valid("param");
    const updatedUser = await updateUser({ userID, newUser: user });
    return c.json(updatedUser);
  },
);
