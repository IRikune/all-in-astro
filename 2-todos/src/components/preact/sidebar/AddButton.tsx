import { Button } from '../Button';
import { Icon } from '../icons/Icon';
import { signal } from '@preact/signals';

export const isOpen = signal<boolean>(false);

export function AddButton() {
	return (
		<>
			<Button class="cursor-pointer flex rounded items-center h-8 w-full text-sm text-rose-700 transition-all duration-300 px-2">
				<div class="mx-2 w-5.5 h-5.5 rounded-full bg-rose-700 flex items-center justify-center text-sm ml-0">
					<Icon name="plus" class="w-7 h-7 stroke-white" />
				</div>
				Add task
			</Button>
		</>
	);
}
