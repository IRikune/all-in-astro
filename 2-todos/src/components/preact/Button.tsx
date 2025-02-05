import type { ComponentChildren } from "preact";
import type { Icon as IconType } from "./icons/mod";
import { Icon } from "./icons/Icon";
interface Props {
    type?: "active" | "standard" | "outlined";
    icon: IconType["name"];
    to?: string;
    children?: ComponentChildren;
    class?: string;
}


export function Button({ type = "standard", to, children = "Button", class: className, icon }: Props) {
    const Tag = to ? "a" : "button";
    const styles = {
        standard: {
            button: "flex w-fit items-center text-sm",
            icon: "w-6 fill-transparent stroke-white mr-2",
        },
    }
    return (
        <Tag href={to} className={`flex px-2 py-1 rounded w-full items-center text-sm -tracking-wide hover:bg-neutral-200 cursor-pointer transition duration-300 ${className}`}>
            <Icon class="w-6 stroke-1 fill-transparent mr-2 stroke-neutral-700"
                name={icon} />
            {children}
        </Tag>
    )
}

export function DropdownButton({ children, class: className }: Props) {

}