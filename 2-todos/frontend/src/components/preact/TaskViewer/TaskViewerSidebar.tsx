import type { JSX } from 'preact/jsx-runtime';
import { BookMarkIcon } from '../icons/BookMarkIcon';
import { InboxIcon } from '../icons/InboxIcon';
import { Modal } from '../Modal';
import { iconColors } from '../Checker';
import { selectedTask, user } from '../../../stores/mod';
import type { Priority, Project } from '../../../types/mod';
import { type Signal, useComputed, useSignal } from '@preact/signals';
import { DragHandleIcon } from '../icons/DragHandleIcon';
import { PinIcon } from '../icons/PinIcon';

export function TaskViewerSidebar() {
	return (
		<aside class="w-[30%] h-full border-l border-neutral-200 px-3">
			<SidebarProject />
			<hr class="text-neutral-200 my-2" />
			<SidebarDate />
			<hr class="text-neutral-200 my-2" />
			<SidebarPriority />
			<hr class="text-neutral-200 my-2" />
			<SidebarCategory />
			<hr class="text-neutral-200 my-2" />
		</aside>
	);
}

function SidebarPriority() {
	const taskPriority = selectedTask.value?.priority;
	const priorityColor = iconColors[taskPriority as Priority];
	return (
		<section class="relative">
			<h3 class="text-sm mt-2">Priority</h3>
			<label
				for="priority-dropdown"
				class="group cursor-pointer flex hover:bg-neutral-100 px-2 py-1.5 rounded transition-colors duration-300 justify-between "
			>
				<div class="flex justify-between gap-1">
					<BookMarkIcon class={`size-4 ${priorityColor}`} />
					<span class="text-xs">Priority</span>
				</div>
			</label>
			<Modal
				classBackdrop="-top-20! -left-55! h-[200dvh]!"
				animation="fade"
				id="priority-dropdown"
				class="absolute z-50 -left-1 bg-white"
			>
				<div class="bg-white w-3xs text-center border border-neutral-200 rounded-lg p-2 z-50 **:select-none **:cursor-pointer pb-3">
					<button
						type="button"
						class="w-full flex items-center gap-1 hover:bg-neutral-100 rounded"
					>
						<BookMarkIcon class="size-4 text-theme-red-100" />
						<span>Priority 1</span>
					</button>
					<button
						type="button"
						class="w-full flex items-center gap-1 hover:bg-neutral-100 rounded"
					>
						<BookMarkIcon class="size-4 text-orange-500" />
						<span>Priority 2</span>
					</button>
					<button
						type="button"
						class="w-full flex items-center gap-1 hover:bg-neutral-100 rounded"
					>
						<BookMarkIcon class="size-4 text-amber-500" />
						<span>Priority 3</span>
					</button>
					<button
						type="button"
						class="w-full flex items-center gap-1 hover:bg-neutral-100 rounded"
					>
						<BookMarkIcon class="size-4 text-theme-gray-100" />
						<span>Priority 4</span>
					</button>
				</div>
			</Modal>
		</section>
	);
}

function SidebarDate() {
	return (
		<section class="relative">
			<h3 class="text-sm mt-2">Date</h3>
			<input
				type="date"
				class="cursor-pointer w-full hover:bg-neutral-100  rounded"
			/>
		</section>
	);
}

function SidebarProject() {
	const projectInput = useSignal('');
	const currentSelectedProject = useSignal(
		selectedTask.value?.project || user.value.projects?.[0].title,
	);
	const filteredProjects = useComputed(() => {
		if (user.value.projects) {
			return user.value.projects.filter((project) =>
				project.title.includes(projectInput.value),
			);
		}
		return [];
	});
	return (
		<section class="relative">
			<h3 class="text-sm my-2 font-medium text-start">Project</h3>
			<select
				value={currentSelectedProject.value}
				onChange={(e) => {
					currentSelectedProject.value = e.currentTarget.value;
				}}
				class="select-picker:rounded active:scale-98 transition duration-200 rounded px-2 text-xs items-center font-medium hover:bg-neutral-100 w-full flex cursor-pointer"
			>
				<button type="button">
					<InboxIcon />
					<span>{currentSelectedProject.value}</span>
				</button>
				<div class="p-1">
					<input
						value={projectInput.value}
						onInput={(e) => {
							projectInput.value = e.currentTarget.value;
						}}
						class="w-full p-1 border-neutral-300 border rounded mx-auto text-sm focus:outline-none"
						placeholder="Type a project name"
						type="text"
					/>
					<SidebarProjectDropdown
						projectInput={projectInput}
						filteredProjects={filteredProjects}
					/>
				</div>
			</select>
		</section>
	);
}

interface SidebarProjectDropdownProps {
	projectInput: Signal<string>;
	filteredProjects: Signal<Project[]>;
}

function SidebarProjectDropdown({
	projectInput,
	filteredProjects,
}: SidebarProjectDropdownProps) {
	if (!projectInput.value) {
		return (
			<>
				{user.value.projects?.map((project) => (
					<option
						class="px-2 transition duration-200 text-sm py-1"
						key={project.id}
						value={project.title}
					>
						{project.title}
					</option>
				))}
			</>
		);
	}
	return (
		<>
			{filteredProjects.value?.map((project) => (
				<option
					class="px-2 transition duration-200 text-sm py-1"
					key={project.id}
					value={project.title}
				>
					{project.title}
				</option>
			))}
			{projectInput.value && (
				<button
					class="flex w-full hover:bg-neutral-200 p-1.5 text-sm justify-center items-center cursor-pointer transition duration-200"
					type="button"
				>
					Create "{projectInput}" project
					<DragHandleIcon class="size-4 ml-2" />
				</button>
			)}
		</>
	);
}

function SidebarCategory() {
	const selectedCategory = useSignal(selectedTask.value?.categories?.[0]);
	return (
		<section class="relative">
			<h3 class="text-sm mt-2">Category</h3>
			<select class="select-picker:rounded active:scale-98 transition duration-200 rounded px-2 text-xs items-center font-medium hover:bg-neutral-100 w-full flex cursor-pointer">
				{user.value.categories?.map((category) => (
					<option
						class="px-2 transition duration-200 text-sm py-1 flex flex-row-reverse"
						key={category}
						value={category}
					>
						<div class="flex text-left w-full items-center">
							<PinIcon class="size-3 mx-1" />
							<span>{category}</span>
						</div>
					</option>
				))}
			</select>
		</section>
	);
}
