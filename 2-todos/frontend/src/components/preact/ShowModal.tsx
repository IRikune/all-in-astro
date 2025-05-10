import type { JSX } from "preact/jsx-runtime";

interface ShowModalprops extends JSX.HTMLAttributes<HTMLLabelElement> {
	for: string;
	Class?: string;
}

export function ShowModal(props: ShowModalprops) {
	return (
<<<<<<< HEAD
		<label for={props.for}>
			<div class={`${props.class}`}>
				{props.children}
			</div>
=======
		<label htmlFor={props.for} class={`${props.class}`}>
			{props.children}
>>>>>>> Frontend-Issues
		</label>
	);
}
