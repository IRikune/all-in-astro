import type { JSX } from 'preact/jsx-runtime';

interface ModalProps extends JSX.HTMLAttributes<HTMLDivElement> {
	id: string;
	backdrop?: boolean;
}

export function Modal(props: ModalProps) {
	return (
		<div class="has-checked:*:block has-not-checked:*:hidden has-checked-:*:motion-scale-100 *:transition-discrete *:duration-300 has-not-checked:duration-300 peer-not-checked:opacity-0 peer-not-checked:scale-0">
			{/* State */}
			<input type="checkbox" id={props.id} class="peer hidden!" />
			<label for={props.id}>
				<div
					class={`w-dvw h-dvh fixed left-0 top-0 z-[49] ${props.backdrop && 'bg-black/20'}`}
				/>
			</label>
			<main
				class={`peer-checked:motion-scale-in
					 peer-checked:motion-translate-y-in-25
					 peer-not-checked:motion-translate-y-out-25
					 peer-checked:motion-opacity-in peer-not-checked:motion-opacity-out peer-not-checked:motion-scale-out-[0.1] starting:opacity-0 starting:scale-0 motion-ease-spring-bouncier motion-duration-300 ${props.class}`}
			>
				{props.children}
			</main>
		</div>
	);
}
