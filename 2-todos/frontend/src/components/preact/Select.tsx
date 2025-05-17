import { useComputed, type Signal } from '@preact/signals';
import type { JSX } from 'preact/jsx-runtime';
import { DragHandleIcon } from './icons/DragHandleIcon';

interface SelectProps extends JSX.HTMLAttributes<HTMLSelectElement> {
	selectSignal: Signal<string>;
	selectInputSignal: Signal<string>;
	onCreate?: () => void;
	options: string[];
}

export function Select({
	class: className,
	selectInputSignal,
	selectSignal,
	options,
	onCreate: onClick,
	children,
	...props
}: SelectProps) {
	return (
		<>
			<select
				value={selectSignal.value}
				onChange={(e) => {
					selectSignal.value = e.currentTarget.value;
				}}
				class={`select-picker:rounded active:scale-98 transition duration-200 rounded px-2 text-xs items-center font-medium hover:bg-neutral-100 w-full flex cursor-pointer ${className}`}
				{...props}
			>
				<button type="button">
					{children}
					<span>{selectSignal}</span>
				</button>
				<div class="p-1">
					<input
						value={selectInputSignal.value}
						onInput={(e) => {
							selectInputSignal.value = e.currentTarget.value;
						}}
						class="w-full p-1 border-neutral-300 border rounded mx-auto text-sm focus:outline-none"
						placeholder="Type a project name"
						type="text"
					/>
					<SidebarProjectDropdown
						selectInputSignal={selectInputSignal}
						options={options}
						onClick={onClick}
					/>
				</div>
			</select>
		</>
	);
}

interface DropdownProps {
	selectInputSignal: Signal<string>;
	options: string[];
	onClick?: () => void;
}

function SidebarProjectDropdown({
	selectInputSignal,
	options,
	onClick,
}: DropdownProps) {
	const filteredOptions = useComputed(() => {
		if (options) {
			return options.filter((option) =>
				option.includes(selectInputSignal.value),
			);
		}
		return [];
	});
	if (!selectInputSignal.value) {
		return (
			<>
				{options.map((option, index) => (
					<option
						class="px-2 transition duration-200 text-sm py-1 rounded"
						key={index + option}
						value={option}
					>
						{option}
					</option>
				))}
			</>
		);
	}
	return (
		<>
			{filteredOptions.value?.map((option, index) => (
				<option
					class="px-2 transition duration-200 text-sm py-1 rounded"
					key={index + option}
					value={option}
				>
					{option}
				</option>
			))}
			{filteredOptions.value && (
				<button
					onClick={onClick}
					class="flex w-full hover:bg-neutral-200 p-1.5 text-sm justify-center items-center cursor-pointer transition duration-200"
					type="button"
				>
					Create "{selectInputSignal}"
					<DragHandleIcon class="size-4 ml-2" />
				</button>
			)}
		</>
	);
}
