import { isOpenNavbar } from "../../../stores/mod";
import { LayoutIcon } from "../icons/LayoutIcon";

interface Props {
    class?: string;
    hidden?: boolean;
}

export function ToggleSidebar({ class: className, hidden }: Props) {
    return (
        <button
            class={`hover:bg-neutral-200 p-2 rounded transition-colors cursor-pointer ${className}`}
            onClick={() => {
                isOpenNavbar.value = !isOpenNavbar.value
            }}
            type="button">
            <LayoutIcon />
        </button>
    )
}