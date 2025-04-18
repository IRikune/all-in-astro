import { Icon } from '../icons/Icon.tsx';

export function AddButton() {
	return (
		<>
			<label tabindex={0} for="add-task-modal" class="cursor-pointer flex rounded items-center h-8 w-full text-sm hover:text-rose-700 hover:bg-neutral-200 transition-all duration-300 px-2">
				<div class="mx-2 w-5.5 h-5.5 rounded-full bg-rose-700 flex items-center justify-center text-sm text-neutral-800 ml-0">
					<Icon name="plus" class="w-7 h-7 stroke-white" />
				</div>
				Add task
			</label>
		</>
	);
}
