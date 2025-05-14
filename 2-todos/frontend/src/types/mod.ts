export type UserID = string;
export type ProjectID = string;
export type TaskID = string;
export type Email = string;
export interface Comment {
	id: string;
	creator: UserID;
	content: string;
	createdAt: number;
}

export type NewComment = Omit<Comment, 'id'>;
export interface NewProject {
	title: string;
	description: string;
	creator: UserID;
	tasks?: TaskID[];
}

export interface Project extends NewProject {
	id: ProjectID;
	collaborators?: UserID[];
}
export interface NewTask {
	title: string;
	creator: UserID;
	content?: string;
	comments?: Comment[];
	date: {
		created: number;
		completed?: number;
		expected?: number;
	};
	categories?: string[];
	priority: Priority;
	colaborators?: UserID[];
	group?: string;
	project?: ProjectID;
}
export interface Task extends NewTask {
	id: TaskID;
	subTasks?: NewTask[];
}
export interface NewUser {
	name: string;
	email: Email;
	password: string;
	avatar: string;
	projects?: Project[];
	categories?: string[];
	groups?: string[]; 
}

export interface User extends NewUser {
	id: UserID;
}

export enum Priority {
	high = 1,
	important = 2,
	medium = 3,
	low = 4,
}

export type Result<T> =
	| { ok: boolean; data: T; message: string; versionstamp?: string }
	| { ok: boolean; data: null; message: string };

