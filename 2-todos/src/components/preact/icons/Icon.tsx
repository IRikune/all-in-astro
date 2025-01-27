import type { Icon as IconType } from "./mod"
import { icons } from "./mod"

interface IconProps {
    name: IconType["name"]
    class?: string
}
export function Icon({ name, class: className }: IconProps) {
    const displayIcon = icons.find(icon => icon.name === name)
    return (
        <svg
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            // biome-ignore lint/security/noDangerouslySetInnerHtmlWithChildren: <explanation>
            dangerouslySetInnerHTML={{ __html: displayIcon?.svg || '' }}
            class={className}
            viewBox='0 0 24 24'
        >
            <title>{name}</title>
        </svg>
    )
}