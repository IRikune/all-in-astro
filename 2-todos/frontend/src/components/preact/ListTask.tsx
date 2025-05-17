import { Task } from './Task';
import { effect, signal } from '@preact/signals';
import { DragHandleIcon } from './icons/DragHandleIcon';
import { tasks } from '../../stores/mod';

export function ListTask() {
	return (
		<section class="container flex flex-col gap-2">
			{tasks.value.map((task, index) => {
				return (
					<div
						key={task.id}
						data-swappy-slot={task.id}
						class="bg-black/5 rounded-2xl"
					>
						<div data-swappy-item={task.id}>
							<div class={'relative'}>
								<div data-swappy-handle class={'absolute -left-5'}>
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
