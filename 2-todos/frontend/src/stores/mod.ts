import { signal } from '@preact/signals';
import type { Project, Task, User } from '../types/mod';

export const isOpenNavbar = signal(false);

export const userID = '01JV6ZJPKPT56V4R34J0NSGY04';

export const tasks = signal<Task[]>([]);

export const selectedTask = signal<Task>();

export enum Theme {
	LIGHT = "light",
	DARK = "dark",
}

export const theme = signal(Theme.LIGHT);

export enum Endpoints {
	users = 'http://localhost:8000/users/',
	tasks = 'http://localhost:8000/tasks/',
	login = 'http://localhost:8000/login/',
}

export const user = signal<User>({
	id: 'id.prueba',
	name: 'name.prueba',
	email: 'email.prueba',
	password: 'password.prueba',
	avatar: 'avatar.prueba',
});

export const projects = signal<Project[]>([]);

export const PRIORITIES = ['P1', 'P2', 'P3', 'P4'];
