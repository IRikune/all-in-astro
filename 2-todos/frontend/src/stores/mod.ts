import { signal } from '@preact/signals';
import type { Task, User } from '../types/mod';

export const isOpenNavbar = signal(false);

export const userID = '01JV6ZJPKPT56V4R34J0NSGY04';

export const tasks = signal<Task[]>([]);

export const selectedTask = signal<Task>();

export enum Endpoints {
	users = 'http://localhost:8000/users/',
	tasks = 'http://localhost:8000/tasks/',
	login = 'http://localhost:8000/login/',
}

export const user = signal<User>({
	id: '',
	name: '',
	email: '',
	password: '',
	avatar: '',
});

export const projects = signal<string[]>([]);