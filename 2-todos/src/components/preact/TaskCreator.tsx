import type { InputHTMLAttributes } from 'preact/compat';
import { AddTask } from './AddInlineTask';
import { Input } from './Input';
import type { JSX } from 'preact/jsx-runtime';
import { Button } from './Button';
import { signal } from '@preact/signals';

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
				<form onSubmit={handleSubmit} class=" flex flex-col W-2 gap-2 p-2 ">
					<label class={'select-none'} for={'AddTask'}>
						X
					</label>
					<div class="flex flex-col gap-2 w-full h-full" />
					<Input
						id="taskName"
						placeholder="Enter task name"
						autoComplete={'off'}
						type="text"
						autoCorrect={'false'}
						class="peer w-full h-[10%] outline-0 placeholder-gray-400 appearance-none "
						onInput={handleInputDescription}
					/>
					{descriptionError}
					<Input
						type="text"
						onInput={handleInputText}
						id="taskDescription"
						placeholder="Enter task description"
						class=" peer w-full h-[10%] outline-0 placeholder-gray-400  appearance-none "
						autoComplete={'off'}
					/>
					{textError}
					<div class="flex gap-2">
						<Button class=" border-1 w-20 h-7 p-1 border-gray-300 ">
							Today
						</Button>
						<Button class=" border-1 w-20 h-7 p-1 border-gray-300 ">
							Priorit
						</Button>
						<Button class=" border-1 w-20 h-7 p-1 border-gray-300 ">
							recordatorio
						</Button>
						<Button class=" border-1 w-20 h-7 p-1 border-gray-300 ">...</Button>
					</div>
					<hr />
					<div class={'flex justify-between items-center'}>
						<div class="flex gap-2 w-[20%]">
							<Button>Cansel</Button>
							<Button>Anadir tarea</Button>
						</div>
					</div>
					<div class="flex flex-col gap-2" />
					<button
						type={'submit'}
						class="bg-blue-500 text-white rounded-md p-2 w-[60%] h-[8%] mx-auto"
					>
						Create Task
					</button>
				</form>
			</div>
		</>
	);
}
