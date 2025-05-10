import { Endpoints } from '../stores/mod';
import { normalizeObject } from '../utils/mod';
import type { NewTask, Result, Task, NewComment } from '../types/mod';

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
interface useDeleteTaskOptions {
	id: string;
}

interface useCompareTaskOptions {
	firstTask: Task;
	secondTask: Task;
}

interface useCompareTaskOptions {
	firstTask: Task;
	secondTask: Task;
}
interface usePostCommentOptions {
	taskID: string;
	comment: string;
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

// export function usePostComments({ task, comment }: usePostCommentOptions) {
// 	const comments = task.comments || [];
// 	const newComment = {
// 		creator: task?.creator,
// 		content: comment,
// 		createdAt: Date.now(),
// 	};
// 	const newCommets = [...comments, newComment];

// 	const newTask = {
// 		...task,
// 		comments: newCommets,
// 	};
// 	return newTask;
// }

// export async function usePostComment({
// 	taskID,
// 	comment,
// }: usePostCommentOptions) {
// 	const isTask = await useGetTask({ id: taskID });
// 	if (!isTask.ok) {
// 		return { ok: false, data: null };
// 	}
// 	const task = isTask.data;
// 	const comments = isTask.data?.comments || [];
// 	const newComment = {
// 		creator: task?.creator,
// 		content: comment,
// 		createdAt: Date.now(),
// 	};
// 	const newCommets = [...comments, newComment];

// 	const newTask = {
// 		...task,
// 		comments: newCommets,
// 	};

// 	const res = await useUpdateTask({ id: taskID, newTask });
// 	const result = { ok: true, data: 'comment created' };
// 	return result;
// }

interface useCreateCommentOptions {
	taskID: Task['id'];
	comment: NewComment;
}

export async function useCreateComment() {}
