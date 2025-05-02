import { signal } from '@preact/signals';
import { PriorityIcon } from '../icons/PriorityIcon.tsx';
import { ClockIcon } from '../icons/ClockIcon.tsx';
import { BookMarkIcon } from '../icons/BookMarkIcon.tsx';
import { InboxIcon } from '../icons/InboxIcon.tsx';
import { ChevronIcon } from '../icons/ChevronIcon.tsx';
import type { JSX } from 'preact/jsx-runtime';
import { Priority, type NewTask, type Task } from '../../../types/mod';
import { useCreateTask } from '../../../hooks/tasks.ts';
import { userID, tasks } from '../../../stores/mod';

const title = signal<NewTask['title']>('');
const description = signal<NewTask['content']>('');
const expectedDate = signal<NewTask['date']['expected']>(0);
const priority = signal<NewTask['priority']>(Priority.low);
const labels = signal<NewTask['categories']>([]);

async function addTaskHandler(event: JSX.TargetedEvent<HTMLFormElement>) {
	event.preventDefault();
	const $modal = document.getElementById('add-task-modal') as
		HTMLInputElement;
	const currentTask = {
		title: title.value,
		creator: userID,
		date: {
			created: Date.now(),
			expected: expectedDate.value,
		},
		priority: priority.value,
		content: description.value,
		completed: false,
	}
	const result = await useCreateTask({ newTask: currentTask });
	const newTask: Task = {
		...currentTask,
		id: result.data || "",
	}
	tasks.value = [...tasks.value, newTask];
	$modal.checked = false;
	title.value = '';
	description.value = '';
	expectedDate.value = 0;
	priority.value = Priority.low;
	labels.value = [];
}

export function AddTaskForm({ close = 'add-task-modal', ...props }) {
	return (
		<form class="flex flex-col p-2" onSubmit={addTaskHandler}>
			<input
				class="focus:outline-0 text-xl"
				placeholder="Go for a walk tomorrow p1"
				type="text"
				name="title"
				required
				value={title.value}
				onInput={(e) => {
					title.value = e.currentTarget.value;
				}}
			/>
			<input
				class="focus:outline-0 text-sm"
				placeholder="Description"
				type="text"
				value={description.value}
				onInput={(e) => {
					description.value = e.currentTarget.value;
				}}
				name="content"
			/>
			<section class="flex *:items-center *:cursor-pointer *:p-2 text-xs mt-2">
				<label class="mr-1" for="add-task-date">
					<input
						type="datetime-local"
						value={expectedDate.value}
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
						class="bg-theme-red-100 disabled:opacity-50 p-2 px-3 rounded-lg text-xs text-white cursor-pointer hover:saturate-[85%] transition duration-300 font-medium motion-duration-300 motion-ease-spring-bounciest"
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
