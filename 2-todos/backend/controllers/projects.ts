import { createFactory } from "hono/factory";
import { validator } from "hono/validator";
import { HTTPException } from "hono/http-exception";
import {
  createProject,
  deleteCompleteProject,
  deleteUserProject,
  getManyProjects,
  getProject,
  updateProject,
} from "../models/projects.ts";
import {
  newProjectSchema,
  projectIDSchema,
  userIDSchema,
} from "../schemas/mod.ts";
import type { Project, Result } from "../types/mod.ts";

const factory = createFactory();

export const getManyProjectsHandlers = factory.createHandlers(
  validator("param", (value) => {
    const parsed = userIDSchema.safeParse(value.userID);
    if (!parsed.success) {
      throw new HTTPException(400, { message: "Project ID is invalid" });
    }
    return parsed.data;
  }),
  async (c) => {
    const userID = c.req.valid("param");
    const projects = await getManyProjects({ userID });
    if (projects.data === null || !projects.ok) {
      throw new HTTPException(400, { message: "Projects not found" });
    }
    const result: Result<Project[]> = {
      ok: projects.ok,
      data: projects.data,
      message: "Projects found",
    };
    return c.json(result);
  },
);

export const getProjectHandlers = factory.createHandlers(
  validator("param", (value) => {
    const parsed = projectIDSchema.safeParse(value.projectID);
    if (!parsed.success) {
      throw new HTTPException(400, { message: "Project ID is invalid" });
    }
    return parsed.data;
  }),
  async (c) => {
    const projectID = c.req.valid("param");
    const project = await getProject({ projectID });
    if (project.data === null || !project.ok) {
      throw new HTTPException(400, { message: "Project not found" });
    }
    const result: Result<Project> = {
      ok: project.ok,
      data: project.data,
      message: "Project found succesfully",
    };
    return c.json(result);
  },
);

export const createProjectHandlers = factory.createHandlers(
  validator("json", (value) => {
    const parsed = newProjectSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  async (c) => {
    const newProject = c.req.valid("json");
    const project = await createProject({ newProject });
    const result: Result<Project["id"]> = {
      ok: project.ok,
      data: project.data,
      message: "Project created succesfully",
    };
    return c.json(result);
  },
);

export const updateProjectHandlers = factory.createHandlers(
  validator("param", (value) => {
    const parsed = projectIDSchema.safeParse(value.projectID);
    if (!parsed.success) {
      throw new HTTPException(400, { message: "Project ID is invalid" });
    }
    return parsed.data;
  }),
  validator("json", (value) => {
    const parsed = newProjectSchema.safeParse(value);
    if (!parsed.success) {
      throw new HTTPException(400, parsed.error);
    }
    return parsed.data;
  }),
  async (c) => {
    const projectID = c.req.valid("param");
    const validProject = c.req.valid("json");
    const project = await getProject({ projectID });
    if (project.data === null || !project.ok) {
      throw new HTTPException(400, { message: "Project not found" });
    }
    const newProject: Project = {
      ...project.data,
      ...validProject,
    };
    const updatedProject = await updateProject({ project: newProject });
    const result: Result<Project["id"]> = {
      ok: updatedProject.ok,
      data: updatedProject.data,
      message: "Project updated succesfully",
    };
    return c.json(result);
  },
);

export const deleteProjectHandlers = factory.createHandlers(
  validator("param", (value) => {
    const parsedProjectID = projectIDSchema.safeParse(value.projectID);
    const parsedUserID = userIDSchema.safeParse(value.userID);
    if (!parsedProjectID.success) {
      throw new HTTPException(400, { message: "Project ID is invalid" });
    }
    if (!parsedUserID.success) {
      throw new HTTPException(400, { message: "User ID is invalid" });
    }
    return { projectID: parsedProjectID.data, userID: parsedUserID.data };
  }),
  async (c) => {
    const { projectID, userID } = c.req.valid("param");
    const project = await getProject({ projectID });
    if (project.data === null || !project.ok) {
      throw new HTTPException(400, { message: "Project not found" });
    }
    if (project.data.collaborators) {
      const res = await deleteUserProject({ projectID, userID });
      const result: Result<Project["id"]> = {
        ok: res.ok,
        data: res.data,
        message: "Project deleted from user",
      };
      return c.json(result);
    }
    const res = await deleteCompleteProject({ projectID, userID });
    const result: Result<Project["id"]> = {
      ok: res.ok,
      data: res.data,
      message: "Project deleted completely",
    };
    return c.json(result);
  },
);
