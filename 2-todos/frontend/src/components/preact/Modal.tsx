import type { JSX } from 'preact/jsx-runtime';

interface ModalProps extends JSX.HTMLAttributes<HTMLDivElement> {
	id: string;
	backdrop?: boolean;
	backdropLabel?: boolean;
	animation?: 'scale' | 'fade';
	classBackdrop?: string;
}

export function Modal({
	backdropLabel = true,
	id,
	animation,
	children,
	class: className,
	classBackdrop = 'bg-black/20',
	...props
}: ModalProps) {
	const ANIMATIONS = {
		scale:
			'peer-checked:motion-scale-in peer-checked:motion-translate-y-in-25 peer-not-checked:motion-translate-y-out-25 peer-checked:motion-opacity-in peer-not-checked:motion-opacity-out peer-not-checked:motion-scale-out-[0.1] starting:opacity-0 starting:scale-0 motion-ease-spring-bouncy motion-duration-300',
		fade: 'peer-not-checked:motion-translate-y-out peer-not-checked:motion-opacity-out peer-checked:motion-opacity-in motion-ease-in-out-cubic peer-checked:motion-translate-y-in-50 peer-checked:motion-scale-in-80 motion-duration-150',
	};

	return (
		<div class="has-[>_input:checked]:*:block has-not-checked:*:hidden *:duration-300 *:transition-discrete">
			{backdropLabel && (
				<label for={id}>
					<div
						class={`w-[120dvw] h-dvh fixed left-0 top-0 z-[49] ${classBackdrop}`}
					/>
				</label>
			)}
			<input
				type="checkbox"
				id={id}
				class="peer hidden!"
				onInput={props.onInput}
			/>
			<main class={`${animation && ANIMATIONS[animation]} ${className} z-50`}>
				{children}
			</main>
		</div>
	);
}
