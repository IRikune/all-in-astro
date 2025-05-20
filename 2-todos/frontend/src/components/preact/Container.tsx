import type {JSX} from "preact/jsx-runtime";

interface ContainerProps extends JSX.HTMLAttributes<HTMLLabelElement> {
  ContainerStyles: string;
}

export function Container(props: ContainerProps) {
  return (
    <main id={"main-container"} class={`grid ${props.ContainerStyles}`}>
      {props.children}
    </main>
  );
}
