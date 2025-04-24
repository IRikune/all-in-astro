interface Props {
	class?: string;
}

export function ChevronIcon({ class: className = 'size-4', ...props }: Props) {
	return (
		<>
			<svg
				class={className}
				viewBox="0 0 15 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Chevron</title>
				<path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor" />
			</svg>
		</>
	);
}
