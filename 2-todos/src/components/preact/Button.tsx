import type { ComponentChildren } from "preact";
import type { Icon as IconType } from "./icons/mod";
import { Icon } from "./icons/Icon";
interface Props {
    type?: "underline" | "filled" | "outlined";
    icon?: IconType["name"];
    to?: string;
    children?: ComponentChildren;
    class?: string;
}


export function Button({ type = "underline", to, children = "Button", class: className, icon }: Props) {
    const Tag = to ? "a" : "button";
    const styles = {
        standard: ["flex w-fit items-center text-sm", "w-6 fill-transparent stroke-white mr-2"],
        filled: 'text-white border-transparent border-2 rounded bg-black px-4 py-2 hover:bg-transparent hover:border-black transition-all duration-300 hover:text-black',
        outlined: 'border-black border-2 rounded bg-transparent px-4 py-2 hover:bg-black transition-all duration-300 hover:text-white',
    }
    return (
        <Tag href={to} className={`flex px-2 py-1 rounded w-fit items-center text-sm text-neutral-600 -tracking-wider ${className}`}>
            {
                icon?
                <Icon class="w-6 fill-transparent stroke-neutral-500 mr-4" name={icon} />
                : null
            }
            {children}
        </Tag>
    )
}