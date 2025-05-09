import type {JSX} from "preact/jsx-runtime";

interface ModalProps extends JSX.HTMLAttributes<HTMLDivElement> {
  id: string;
  backdrop?: boolean;
  OnInput?: () => void;
}

export function Modal(props: ModalProps) {
  return (
    <>
      <input
        onInput={props.OnInput}
        type="checkbox"
        id={props.id}
        class="peer hidden!"
      />
      <label class={"hidden peer-checked:block"} for={props.id}>
        <div
          class={`w-dvw h-dvh fixed left-0 top-0 z-10 ${
            props.backdrop && "bg-black/50"
          }`}
        />
      </label>
      <main
        class={`z-20  peer-checked:motion-scale-in
					peer-checked:motion-translate-y-in-25
					peer-not-checked:motion-translate-y-out-25
					peer-checked:motion-opacity-in peer-not-checked:motion-opacity-out peer-not-checked:motion-scale-out-[0.1] starting:opacity-0 starting:scale-0 motion-ease-spring-bouncier motion-duration-300 ${props.class} `}
      >
        {props.children}
      </main>
    </>
  );
}
