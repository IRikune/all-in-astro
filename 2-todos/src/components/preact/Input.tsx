import type { InputHTMLAttributes } from "preact/compat";

export function Input({...props}: InputHTMLAttributes) {
    return (
        <>
            <input
                class="border border-theme-red-100"
                placeholder="birthday"
                type="text"
                {...props}
                />
        </>
    )
}