export interface Task {
	id: string;
	title: string;
	creator: string;
	content?: string;
	completed: boolean;
	comments?: Comment[];
	date: {
		created: number;
		completed?: number;
		expected?: number;
	};
	categories?: string[];
	priority: number;
	collaborators?: string[];
	subTasks?: NewTask[];
}

export type NewTask = Omit<Task, 'id' | 'subTasks'>;

export interface Comment {
	id: string;
	creator: string;
	content: string;
	createdAt: number;
}

export type NewComment = Omit<Comment, 'id'>;

export interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	avatar?: string;
}

export type NewUser = Omit<User, 'id'>;

export enum Priority {
	high = 1,
	important = 2,
	medium = 3,
	low = 4,
}

export type Result<T> =
	| { ok: boolean; data: T; message: string; versionstamp?: string }
	| { ok: boolean; data: null; message: string };
