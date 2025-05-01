import type { JSX } from 'preact/jsx-runtime';

interface ModalProps extends JSX.HTMLAttributes<HTMLDivElement> {
	id: string;
	backdrop?: boolean;
	backdropLabel?: boolean;
	animation?: "scale";
	classBackdrop?: string;
	oninput?: () => void;
}

export function Modal({ backdropLabel = true, id, animation, children, class: className, classBackdrop = "bg-black/20" }: ModalProps) {

	const ANIMATIONS = {
		scale: "peer-checked:motion-scale-in peer-checked:motion-translate-y-in-25 peer-not-checked:motion-translate-y-out-25 peer-checked:motion-opacity-in peer-not-checked:motion-opacity-out peer-not-checked:motion-scale-out-[0.1] starting:opacity-0 starting:scale-0 motion-ease-spring-bouncy motion-duration-300",
	}

	return (
		<div class="has-checked:*:block has-not-checked:*:hidden *:duration-300 *:transition-discrete">
			{backdropLabel &&
				(
					<label for={id}>
						<div
							class={`w-[120dvw] h-dvh fixed left-0 top-0 z-[49] ${classBackdrop}`}
						/>
					</label>
				)
			}
			<input type="checkbox" id={id} class="peer hidden!" />
			<main
				class={`${animation && ANIMATIONS[animation]} ${className}`}
			>
				{children}
			</main>
		</div>
	);
}
