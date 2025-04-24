interface BaseTask {
	id?: string;
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
}

interface Comment {
	id?: string;
	creator: string;
	content: string;
	createdAt: number;
}

interface SubTask extends BaseTask {}

export interface Task extends BaseTask {
	subTasks?: SubTask[];
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