import type { JSX } from 'preact/jsx-runtime';

interface ShowModalprops extends JSX.HTMLAttributes<HTMLLabelElement> {
	for: string;
	Class?: string;
	classChildren?: string;
}

export function ShowModal(props: ShowModalprops) {
	return (
		<label for={props.for} class={`hover:cursor-pointer ${props.class}`}>
			<button
				type={'button'}
				class={`pointer-events-none ${props.classChildren}`}
			>
				{props.children}
			</button>
		</label>
	);
}
