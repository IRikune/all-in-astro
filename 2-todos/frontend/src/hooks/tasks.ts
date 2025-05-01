import type { NewTask, Result, Task } from "../types/mod";
import { Endpoints } from "../stores/mod";
import { tasks } from "../stores/mod";

const API_URL = 'http://localhost:8000/tasks/';

interface useGetTasksOptions {
	userID: string;
}

export async function useGetManyTasks({ userID }: useGetTasksOptions): Promise<Result<Task[]>> {
	const response = await fetch(`${Endpoints.tasks}users/${userID}`);
	const data = await response.json();
	return data
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

interface useDeleteTaskOptions {
	id: string;
}

export async function useDeleteTask({ id }: useDeleteTaskOptions): Promise<Result<Task["id"]>> {
	
}