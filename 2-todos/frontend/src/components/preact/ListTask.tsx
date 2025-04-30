import { Task } from './Task';
import { effect, signal } from '@preact/signals';
import { tasks } from '../../utils/mocks';
import { DragHandleIcon } from './icons/DragHandleIcon';
import { getTasks, listTasks } from '../../hooks/mod';

export function ListTask() {
	effect(() => getTasks());
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
