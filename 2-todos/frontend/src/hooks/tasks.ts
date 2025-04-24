const API_URL = 'http://localhost:3000/tasks/';

interface useGetTasksOptions {
	id?: string;
}

export async function useGetTasks({ id }: useGetTasksOptions) {
	const response = await fetch(`${API_URL}${id}`);
	const data = await response.json();
	return data;
}

export async function useCreateTask(task: string) {}
