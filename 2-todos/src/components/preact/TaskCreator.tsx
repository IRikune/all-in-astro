import type { InputHTMLAttributes } from 'preact/compat';
import { AddTask } from './AddInlineTask';
import { Input } from './Input';
import type { JSX } from 'preact/jsx-runtime';
import { Button } from './Button';
import { signal } from '@preact/signals';
import { AddTaskForm } from './sidebar/AddTaskForm';

const description = signal('');
const descriptionError = signal('');
const text = signal('');
const textError = signal('');

const handleSubmit = (event: SubmitEvent) => {
	event.preventDefault();
	const form = event.currentTarget as HTMLFormElement;
	if (!description.value) {
		descriptionError.value = 'la descriccion no debe estar vacia';
	}
	if (!description.value) {
		textError.value = 'la tarea no debe estar vacia';
		return;
	}
	const formData = new FormData(form);
};

const handleInputDescription = (event: JSX.TargetedEvent<HTMLInputElement>) => {
	description.value = event.currentTarget.value;
};
const handleInputText = (event: JSX.TargetedEvent<HTMLInputElement>) => {
	text.value = event.currentTarget.value;
};

export function TaskCreator() {
	return (
		<>
			<AddTask />
			<div
				class={
					'hidden content-visibility-auto peer-has-checked:block w-full h-auto overflow-hidden rounded-2xl bg-white shadow '
				}
			>
				<AddTaskForm close="AddTask" />
			</div>
		</>
	);
}
