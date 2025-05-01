import { signal } from '@preact/signals';
import type { Task } from '../types/mod';

export const isOpenNavbar = signal(false);

export const userID = '01JSQ04F625GGVDV5ZNENSDRRZ'

export const tasks = signal<Task[]>([]);

export const selectedTask = signal<Task>()

export enum Endpoints {
	users = 'http://localhost:8000/users/',
	tasks = 'http://localhost:8000/tasks/',
	login = 'http://localhost:8000/login/',
}