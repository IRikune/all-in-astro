import { useSignal } from '@preact/signals';
import type { Priority } from '../../../deno/types/mod';
import { Icon } from './icons/Icon';

interface Props {
	priority: Priority;
	class?: string;
}
export function Checker({ priority, class: className }: Props) {
	const isChecked = useSignal(false);
	const colors = {
		1: 'bg-theme-red-100/50 border-theme-red-100 text-theme-red-100',
		3: 'bg-theme-yellow-100/50 border-theme-yellow-100 text-theme-yellow-100',
		2: 'bg-theme-orange-100/50 border-theme-orange-100 text-theme-orange-100',
		4: 'bg-theme-green-100/50 border-theme-green-100 text-theme-green-100',
	};
	return (
		<div
			class={`size-4.5 cursor-pointer rounded-full flex align-middle hover:*:opacity-100 items-center justify-center border-2
        ${colors[priority]} ${className}`}
		>
			<Icon
				name="check"
				class="opacity-0 w-3.5 left-0.5 transition duration-300"
			/>
		</div>
	);
}
