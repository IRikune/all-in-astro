import type { Icon as IconType } from "./mod"
import { icons } from "./mod"

interface IconProps {
    name: IconType["name"]
    class?: string
    color?: string
    styles?: string
}
export function Icon({ name, class: className ,color,styles}: IconProps) {
    return (
        <svg class={className} viewBox='0 0 24 24' fill={color} style={styles}>
            <title>{name}</title>
            {icons[name]?.svg}
        </svg>
    )
}