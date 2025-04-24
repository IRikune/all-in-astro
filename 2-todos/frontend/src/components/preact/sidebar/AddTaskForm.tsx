import { signal } from '@preact/signals';
import type { Task } from '../../../../../backend/types/mod.ts';
import { CalendarIcon } from '../icons/CalendarIcon.tsx';
import { PriorityIcon } from '../icons/PriorityIcon.tsx';
import { ClockIcon } from '../icons/ClockIcon.tsx';
import { BookMarkIcon } from '../icons/BookMarkIcon.tsx';
import { InboxIcon } from '../icons/InboxIcon.tsx';
import { ChevronIcon } from '../icons/ChevronIcon.tsx';
import { taskError, useCreateTask } from '../../../hooks/mod.ts';
import { handleSubmit } from '../../../hooks/mod.ts';
import type { JSX } from 'preact/jsx-runtime';

const title = signal('');
const creator = signal('');
const titleError = signal(false);
const description = signal('');
const priority = signal(4);
const descriptionError = signal(false);

function addTaskHandle(event: JSX.TargetedEvent<HTMLFormElement>) {
	event.preventDefault();
	const form = event.currentTarget as HTMLFormElement;

	const result = {
		title: title.value,
		creator: '01JQSD6YFW3KHJ0NDZMRQ8960D', //userID.value,
		content: undefined,
		completed: false,
		comments: [],
		date: {
			created: new Date(),
			completed: undefined,
			expected: undefined,
		},
		priority: priority.value,
	};
	const formData = new FormData(form);
	useCreateTask(JSON.stringify(result));
}

export function AddTaskForm({ close = 'add-task-modal', ...props }) {
	return (
		<form class="flex flex-col p-2" onSubmit={addTaskHandle}>
			<input
				class="focus:outline-0 text-xl"
				placeholder="Go for a walk tomorrow p1"
				type="text"
				name="title"
				onInput={(e) => {
					title.value = e.currentTarget.value;
				}}
			/>
			<input
				class="focus:outline-0 text-sm"
				placeholder="Description"
				type="text"
				name="content"
			/>
			<section class="flex *:items-center *:cursor-pointer *:p-2 text-xs mt-2">
				<label class="mr-1" for="add-task-date">
					<input
						type="datetime-local"
						class="appearance-none flex items-center border border-neutral-300 rounded-lg p-1 px-2 text-neutral-700 hover:bg-neutral-100 transition duration-300"
						name="data"
					/>
				</label>
				<label class="mr-1" for="add-task-priority">
					<div class="flex items-center border border-neutral-300 rounded-lg p-1 px-2 text-neutral-700 hover:bg-neutral-100 transition duration-300">
						<h2 class="">Priority</h2>
						<PriorityIcon class="size-3" />
					</div>
				</label>
				<label class="w-fit mr-1" for="add-task-reminder">
					<div class="flex items-center border border-neutral-300 rounded-lg p-1 px-2 text-neutral-700 hover:bg-neutral-100 transition duration-300">
						<h2 class="mr-1">Reminders</h2>
						<ClockIcon class="size-3" />
					</div>
				</label>
				<label class="select-none" for="add-task-label">
					<div class="flex items-center border border-neutral-300 rounded-lg p-1 px-2 text-neutral-700 hover:bg-neutral-100 transition duration-300">
						<h2 class="mr-1">Labels</h2>
						<BookMarkIcon class="size-3" />
					</div>
				</label>
			</section>
			<hr class="text-neutral-300 my-2" />
			<section class="flex justify-between items-center pt-2">
				<label class="cursor-pointer text-sm select-none" for="add-task-group">
					<div class="flex items-center text-xs font-medium text-neutral-700 hover:bg-neutral-200 p-2 rounded-lg transition-colors duration-300">
						<InboxIcon class="size-3" />
						<h2 class="ml-1">Group</h2>
						<ChevronIcon class="size-4" />
					</div>
				</label>
				<div class="flex items-center gap-2">
					<label class="cursor-pointer" for={close}>
						<div class="flex items-center bg-neutral-200 rounded-lg p-2 hover:bg-neutral-300 px-3 transition duration-300 text-xs font-medium">
							<h2 class="mr-1">Close</h2>
						</div>
					</label>
					<button
						class="bg-theme-red-100 disabled:opacity-50 p-2 px-3 rounded-lg text-xs text-white cursor-pointer hover:saturate-[85%] transition duration-300 font-medium"
						type="submit"
						disabled={title.value.length === 0}
					>
						Add task
					</button>
				</div>
			</section>
		</form>
	);
}
