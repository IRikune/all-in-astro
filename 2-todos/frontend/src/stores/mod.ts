import { signal } from '@preact/signals';
import type { Task } from '../types/mod';

export const isOpenNavbar = signal(false);

export const userID = '01JTRRQPE7AAHAV239AX113N0F';

export const tasks = signal<Task[]>([]);

export const selectedTask = signal<Task>();

export enum Endpoints {
	users = 'http://localhost:8000/users/',
	tasks = 'http://localhost:8000/tasks/',
	login = 'http://localhost:8000/login/',
}
