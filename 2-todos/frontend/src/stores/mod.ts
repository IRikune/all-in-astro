import { signal } from '@preact/signals';
import type { Task, User } from '../types/mod';

export const isOpenNavbar = signal(false);

export const userID = '01JV5MHNMBJW67FJYG5V4QVMAT';

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