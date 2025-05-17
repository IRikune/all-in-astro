import { signal } from "@preact/signals";
import { CrossIcon } from "./icons/CrossIcon";
import type { JSX } from "preact/jsx-runtime";

interface PopoverProps extends JSX.HTMLAttributes<HTMLDivElement> {
    children: JSX.Element;
}

export const isOpenPopover = signal(false);

export function Popover({ children }: PopoverProps) {
    return (
        <div class={`fixed bg-stone-900 w-32 z-[200] ${isOpenPopover.value ? "block" : "hidden"}`}>
            {children}
            <button
                onClick={() => { isOpenPopover.value = false }}
                type="button">
                <CrossIcon />
            </button>
        </div>
    )
}