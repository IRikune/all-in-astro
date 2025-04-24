import { Task } from './Task';
import { signal } from '@preact/signals';
import type { Task as TaskType } from '../../../deno/types/mod';
import { tasks } from '../../utils/mocks';
import { DragHandleIcon } from './icons/DragHandleIcon';

export const showTaskDetails = signal(false);

const listTasks = signal<TaskType[]>(tasks);

export function ListTask() {
	return (
		<section class="container flex flex-col gap-2">
			{listTasks.value.map((task) => {
				return (
					<div
						key={task.id}
						data-swapy-slot={task.id}
						class="bg-black/5 rounded-2xl"
					>
						<div data-swapy-item={task.id}>
							<div class={'relative'}>
								<div data-swapy-handle class={'absolute -left-5'}>
									<DragHandleIcon />
								</div>
								<Task task={task} />
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
}
