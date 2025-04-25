import type { NewTask, Result, Task } from "../types/mod";
import { tasks } from "../stores/mod";

const API_URL = 'http://localhost:3000/tasks/';

interface useGetTasksOptions {
	id?: string;
}

export async function useGetTasks({ id }: useGetTasksOptions) {
	const response = await fetch(`${API_URL}${id}`);
	const data = await response.json();
	return data;
}

interface useCreateTaskOptions {
	newTask: NewTask;
}

export async function useCreateTask({ newTask }: useCreateTaskOptions): Promise<Result<Task["id"]>> {
	const body = JSON.stringify(newTask);
	const response = await fetch("http://localhost:8000/tasks/", {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body,
	})
	const data = await response.json();
	return data;
}
