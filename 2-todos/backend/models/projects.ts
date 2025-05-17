import { kv } from "../main.ts";
import { monotonicUlid as ulid } from "@std/ulid";
import type { KvResult, NewProject, Project } from "../types/mod.ts";

interface GetManyProjectsProps {
  userID: Project["creator"];
}
export async function getManyProjects(
  { userID }: GetManyProjectsProps,
): Promise<KvResult<Project[]>> {
  const key = ["projects", userID];
  const iter = kv.list<Project>({ prefix: key });
  const projects: Project[] = [];
  for await (const project of iter) projects.push(project.value);
  if (projects.length === 0) return { ok: false, data: null };
  return { data: projects, ok: true };
}

interface GetProjectByIDProps {
  projectID: Project["id"];
}

export async function getProject({
  projectID,
}: GetProjectByIDProps): Promise<KvResult<Project>> {
  const key = ["projects", projectID];
  const entry = await kv.get<Project>(key);
  const project = entry?.value;
  if (project === null) return { ok: false, data: null };
  return { ok: true, data: project };
}

interface CreateProjectProps {
  newProject: NewProject;
}

export async function createProject({
  newProject,
}: CreateProjectProps): Promise<KvResult<Project["id"]>> {
  const projectID = ulid();
  const projectKey = ["projects", projectID];
  const userProjectKey = ["projects", newProject.creator, projectID];
  const project: Project = { ...newProject, id: projectID };
  const res = await kv.atomic()
    .check({ key: projectKey, versionstamp: null })
    .check({ key: userProjectKey, versionstamp: null })
    .set(projectKey, project)
    .set(userProjectKey, project)
    .commit();
  if (!res.ok) return { ok: false, data: null };
  return { data: projectID, ok: res.ok };
}

interface UpdateProjectProps {
  project: Project;
}

export async function updateProject(
  { project }: UpdateProjectProps,
): Promise<KvResult<Project["id"]>> {
  const projectKey = ["projects", project.id];
  const userProjectKey = ["projects", project.creator, project.id];
  const res = await kv.atomic()
    .set(projectKey, project)
    .set(userProjectKey, project)
    .commit();
  if (!res.ok) return { ok: false, data: null };
  return { data: project.id, ok: res.ok };
}

interface DeleteUserProjectProps {
  userID: Project["creator"];
  projectID: Project["id"];
}

export async function deleteUserProject(
  { projectID, userID }: DeleteUserProjectProps,
): Promise<KvResult<Project["id"]>> {
  const userProjectKey = ["projects", userID, projectID];
  const res = await kv.atomic()
    .delete(userProjectKey)
    .commit();
  if (!res.ok) return { ok: false, data: null };
  return { data: projectID, ok: res.ok };
}

interface DeleteCompleteProjectProps {
  userID: Project["creator"];
  projectID: Project["id"];
}

export async function deleteCompleteProject(
  { projectID, userID }: DeleteCompleteProjectProps,
): Promise<KvResult<Project["id"]>> {
  const projectKey = ["projects", projectID];
  const userProjectKey = ["projects", userID, projectID];
  const res = await kv.atomic()
    .delete(userProjectKey)
    .delete(projectKey)
    .commit();
  if (!res.ok) return { ok: false, data: null };
  return { data: projectID, ok: res.ok };
}
