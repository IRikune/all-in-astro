import type { Project, Result } from '../types/mod';

export async function useGetManyProjects({
	userID,
}: { userID: string }): Promise<Result<Project[]>> {
	const res = await fetch(`http://localhost:8000/users/${userID}/projects`);
	const data = await res.json();
	return data;
}
