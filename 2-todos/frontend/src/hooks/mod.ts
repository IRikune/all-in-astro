import { signal } from '@preact/signals';
import { error } from '../components/preact/FormLogin';
import type { Task as TaskType } from '../../../backend/types/mod';
import { formatDistanceToNow } from "date-fns";

interface useFormatedDateOptions {
    date: number;
}

export const useFormatedDate = ({ date }: useFormatedDateOptions): string => {
    const parsedDate = new Date(date);
    const parsedDateString = formatDistanceToNow(parsedDate, {addSuffix: true});
    return parsedDateString;
}
enum endPoints {
	users = 'http://localhost:8000/users',
	tasks = 'http://localhost:8000/tasks',
	login = 'http://localhost:8000/login',
}
export const taskError = signal('');
export const taskCreated = signal(false);

export const listTasks = signal<TaskType[]>([]);

export const handleSubmit = (
	event: SubmitEvent,
	funcSubmit: (form: FormData) => void,
) => {
	event.preventDefault();
	const form = event.currentTarget as HTMLFormElement;
	const formData = new FormData(form);
	funcSubmit(formData);
};

export function useRegister(data: FormData) {
	if (!data) return;
	fetch(endPoints.users, {
		method: 'POST',
		body: data,
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(
					`Network response was not ok status:${response.status}`,
				);
			}
			return response.json();
		})
		.catch((error) => {
			console.error(error);
		});
}

//funcion optener usuario
export function useLogin(bodyContent: FormData) {
	fetch(endPoints.login, {
		method: 'POST',
		body: bodyContent,
	})
		.then((response) => {
			if (!response.ok) {
				const responseError = `Error ${response.status}`;
				error.value = responseError;
				throw new Error(
					`Network response was not ok status:${response.status}`,
				);
			}
			console.log('respuesta:', response);
			return response.json();
		})
		.catch((error) => {
			console.error(error);
		});
}

export function useCreateTask(bodyContent: string) {
	fetch('http://localhost:8000/tasks/01JQSD6YFW3KHJ0NDZMRQ8960D', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: bodyContent,
	})
		.then((response) => {
			if (!response.ok) {
				const responseError = `Error ${response.status}`;
				taskError.value = responseError;
				taskCreated.value = false;
			}

			taskCreated.value = true;
		})
		.catch((error) => {
			taskError.value = error;
			taskCreated.value = false;
		});
}

export function getTasks() {
	fetch('http://localhost:8000/tasks/01JQSD6YFW3KHJ0NDZMRQ8960D', {
		method: 'GET',
	})
		.then((response) => {
			console.log(response);
			if (!response.ok) {
				const responseError = `Error ${response.status}`;
				taskError.value = responseError;
				taskCreated.value = false;
			}
		})
		.catch((error) => {
			taskError.value = error;
			taskCreated.value = false;
		});
}
