import type { Priority } from "../../../deno/types/mod"
import { Icon } from "./icons/Icon"

interface Props {
    priority: Priority
    class: string
}
export function Checker({ priority, class: className }: Props) {
    const colors = {
        1: 'bg-theme-red/50 border-theme-red text-theme-red',
        3: 'bg-theme-yellow/50 border-theme-yellow text-theme-yellow',
        2: 'bg-theme-orange/50 border-theme-orange text-theme-orange',
        4: 'bg-theme-green/50 border-theme-green text-theme-green'
    }
    return (
        <div class={`size-4.5 cursor-pointer rounded-full flex align-middle hover:*:opacity-100 items-center justify-center border-2
        ${colors[priority]} ${className}`}>
            <Icon name="check" class="opacity-0 w-3.5 left-0.5 transition duration-300" />
        </div>
    )
}