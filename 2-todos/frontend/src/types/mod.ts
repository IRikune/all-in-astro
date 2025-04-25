export interface NewTask {
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
}

interface Comment {
	id?: string;
	creator: string;
	content: string;
	createdAt: number;
}


export interface Task extends NewTask {
	id: string,
	subTasks?: NewTask[];
}

export interface User {
	name: string;
	email: string;
	password: string;
	avatar?: string;
}
export enum Priority {
	high = 1,
	important = 2,
	medium = 3,
	low =  4,
}

export type Result<T> =
  | { ok: boolean; data: T; message: string; versionstamp?: string }
  | { ok: boolean; data: null; message: string };