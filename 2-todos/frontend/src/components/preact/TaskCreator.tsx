import { AddTask } from './AddInlineTask';
import { AddTaskForm } from './sidebar/AddTaskForm';


export function TaskCreator() {
	return (
		<>
			<AddTask />
			<div
				class={
					'hidden content-visibility-auto peer-has-checked:block w-full h-auto overflow-hidden rounded-2xl bg-white shadow'
				}
			>
				<AddTaskForm close="AddTask" />
			</div>
		</>
	);
}
