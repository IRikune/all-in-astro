import type { Icon } from "./mod"
import { icons } from "./mod"

interface IconProps {
    name: Icon["name"]
    class?: string
}
export function Icon({ name, class: className }: IconProps) {
    const icon = icons.find(i => i.name === name)
    return (
        <svg
            dangerouslySetInnerHTML={{ __html: icon?.svg || '' }}
            class={className}
            viewBox='0 0 24 24'
        >
        </svg>
    )
}