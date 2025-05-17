import type {InputHTMLAttributes} from "preact/compat";
import type {JSX} from "preact/jsx-runtime";

interface InputProps extends JSX.HTMLAttributes<HTMLInputElement> {
  id: string;
}

export function Input({...props}: InputProps) {
  return (
    <>
      <input
        class="border border-theme-red-100"
        placeholder="birthday"
        type="text"
        {...props}
      />
    </>
  );
}
