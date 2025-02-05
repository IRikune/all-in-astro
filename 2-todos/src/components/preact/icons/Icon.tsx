import type { Icon as IconType } from "./mod"
import { icons } from "./mod"

interface IconProps {
    name: IconType["name"]
    class?: string
}
export function Icon({ name, class: className }: IconProps) {
    return (
        <svg class={className} viewBox='0 0 24 24'>
            <title>{name}</title>
            {icons[name]?.svg}
        </svg>
    )
}