import type { ComponentChildren } from 'preact';
import type { Icon as IconType } from './icons/mod';
import { Icon } from './icons/Icon';
interface Props {
	page?: string;
	active?: boolean;
	icon?: IconType['name'];
	to?: string;
	children?: ComponentChildren;
	class?: string;
	onclick?: () => void;
	color?: string;
}

export function Button({
	to,
	page,
	children,
	class: className,
	icon,
	onclick,
}: Props) {
	const Tag = to ? 'a' : 'button';
	return (
		<Tag
			href={to}
			class={`hover:bg-gray-200 flex transition-colors duration-200 rounded text-sm text-neutral-700 tracking-tight cursor-pointer items-center ${className} ${to != null && to === page && 'bg-rose-100'}`}
			onClick={onclick}
		>
			{icon && (
				<Icon
					class="w-5 fill-transparent stroke-neutral-500 mr-2"
					name={icon}
				/>
			)}
			{children}
		</Tag>
	);
}
