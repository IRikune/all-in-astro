import { Endpoints } from '../stores/mod';
import { normalizeObject } from '../utils/mod';
import type { NewTask, Result, Task, NewComment, Comment } from '../types/mod';

interface useGetTasksOptions {
	userID: string;
}

export async function useGetManyTasks({
	userID,
}: useGetTasksOptions): Promise<Result<Task[]>> {
	const response = await fetch(`${Endpoints.tasks}users/${userID}`);
	const data = await response.json();
	return data;
}

interface useGetTaskOptions {
	id: Task['id'];
}

export async function useGetTask({
	id,
}: useGetTaskOptions): Promise<Result<Task>> {
	const response = await fetch(`${Endpoints.tasks}${id}`);
	const data = await response.json();
	return data;
}

interface useCreateTaskOptions {
	newTask: NewTask;
}

export async function useCreateTask({
	newTask,
}: useCreateTaskOptions): Promise<Result<Task['id']>> {
	const body = JSON.stringify(newTask);
	const response = await fetch(Endpoints.tasks, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body,
	});
	const data = await response.json();
	return data;
}

interface useUpdateTaskOptions {
	id: Task['id'];
	newTask: NewTask;
}

export async function useUpdateTask({
	id,
	newTask,
}: useUpdateTaskOptions): Promise<Result<Task['id']>> {
	const body = JSON.stringify(newTask);
	const response = await fetch(`${Endpoints.tasks}${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body,
	});
	const data = await response.json();
	return data;
}

interface useCompareTaskOptions {
	firstTask: Task;
	secondTask: Task;
}

interface useCompareTaskOptions {
	firstTask: Task;
	secondTask: Task;
}
export function useCompareTask({
	firstTask,
	secondTask,
}: useCompareTaskOptions): boolean {
	const normalizedFirstTask = normalizeObject(firstTask);
	const normalizedSecondTask = normalizeObject(secondTask);
	const taskSet = new Set([normalizedFirstTask, normalizedSecondTask]);
	return taskSet.size === 1;
}
interface useCreateCommentOptions {
	taskID: Task['id'];
	comment: NewComment;
}

export async function useCreateComment({
	taskID,
	comment,
}: useCreateCommentOptions): Promise<Result<Comment['id']>> {
	const ENDPOINT = `${Endpoints.tasks}${taskID}/comments/`;
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(comment),
	};
	const response = await fetch(ENDPOINT, options);
	const data = await response.json();
	console.log({ data });
	return data;
}
