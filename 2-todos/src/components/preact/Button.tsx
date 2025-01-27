import type { ComponentChildren } from "preact";
import type { Icon as IconType } from "./icons/mod";
import { Icon } from "./icons/Icon";
interface Props {
    type?: "underline" | "filled" | "outlined";
    icon: IconType["name"];
    to?: string;
    children?: ComponentChildren;
    class?: string;
}


export function Button({ type = "underline", to, children = "Button", class: className, icon }: Props) {
    const Tag = to ? "a" : "button";
    const styles = {
        underline: 'relative px-2 before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:rounded-full before:duration-300 before:transition-all before:bg-black hover:before:w-full',
        filled: 'text-white border-transparent border-2 rounded bg-black px-4 py-2 hover:bg-transparent hover:border-black transition-all duration-300 hover:text-black',
        outlined: 'border-black border-2 rounded bg-transparent px-4 py-2 hover:bg-black transition-all duration-300 hover:text-white',
    }
    return (
        <Tag href={to} className={`flex w-fit ${className}`}>
            <Icon class="w-6 fill-transparent stroke-neutral-500" name={icon} />
            {children}
        </Tag>
    )
}