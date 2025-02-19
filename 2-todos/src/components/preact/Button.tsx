import type { ComponentChildren } from "preact";
import type { Icon as IconType } from "./icons/mod";
import { Icon } from "./icons/Icon";
interface Props {
    page?: string;
    active?: boolean
    icon?: IconType["name"];
    to?: string;
    children?: ComponentChildren;
    class?: string;
}


export function Button({ to, page, children, class: className, icon }: Props) {
    const Tag = to ? "a" : "button";
    return (
        <Tag href={to} className={`flex w-full px-2 py-2 transition-colors duration-200 rounded items-center text-sm text-neutral-700 tracking-tight cursor-pointer hover:bg-neutral-200 
        ${to != null && to === page && "bg-orange-100"} ${className}`}>
            {
                icon &&
                <Icon class="w-5 fill-transparent stroke-neutral-500 mr-2" name={icon} />
            }
            {children}
        </Tag>
    )
}