import { signal } from '@preact/signals';

enum endPoints {
	users = 'http://localhost:8000/users/',
	tasks = 'http://localhost:8000/tasks/',
	login = 'http://localhost:8000/login/',
}
export const listTasks = signal([]);