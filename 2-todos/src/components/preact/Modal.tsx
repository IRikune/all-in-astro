import type { JSX } from "preact/jsx-runtime";

interface ModalProps extends JSX.HTMLAttributes<HTMLDivElement> {
    id: string;
    backdrop?: boolean;
}

export function Modal(props: ModalProps) {
    return (
        <div class="has-checked:*:block has-not-checked:*:hidden has-checked-:*:transition-[opacity_display] *:transition-discrete *:duration-300 has-not-checked:duration-300 peer-not-checked:opacity-0">
            {/* State */}
            <input type="checkbox" id={props.id} class="peer hidden!" />
            <label for={props.id}>
                <div class={`w-dvw h-dvh fixed left-0 top-0 z-[49] ${props.backdrop && "bg-black/50"}`} />
            </label>
            <main
                class={`peer-not-checked:opacity-0 starting:opacity-0 ${props.class}`}
            >
                {props.children}
            </main>
        </div>
    )
}