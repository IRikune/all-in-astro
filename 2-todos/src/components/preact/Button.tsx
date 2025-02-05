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


export function Button({ type = "underline", to, children, class: className, icon }: Props) {
    const Tag = to ? "a" : "button";
    return (
        <Tag href={to} className={`flex w-full px-2 py-1 transition-colors duration-200 rounded items-center text-sm text-neutral-600 -tracking-wider cursor-pointer hover:bg-neutral-200 ${className}`}>
            {
                icon &&
                <Icon class="w-6 fill-transparent stroke-neutral-500 mr-2" name={icon} />
            }
            {children}
        </Tag>
    )
}