import type { JSX } from "preact/jsx-runtime";
import { BookMarkIcon } from "../icons/BookMarkIcon";
import { ChevronIcon } from "../icons/ChevronIcon";
import { InboxIcon } from "../icons/InboxIcon";
import { Modal } from "../Modal";

export function TaskViewerSidebar() {
    return (
        <aside class="w-[30%] h-full border-l border-neutral-200 px-3">
            <SidebarProject />
            <hr class="text-neutral-200 my-2" />
            <SidebarDate />
            <hr class="text-neutral-200 my-2" />
            <SidebarPriority />
            <hr class="text-neutral-200 my-2" />
            <SidebarCategory />
            <hr class="text-neutral-200 my-2" />
        </aside>
    )
}

function SidebarPriority() {
    return (
        <section class="relative">
            <h3 class="text-sm mt-2">Priority</h3>
            <label for="priority-dropdown" class="group cursor-pointer flex hover:bg-neutral-100 px-2 py-1.5 rounded transition-colors duration-300 justify-between">
                <div class="flex justify-between gap-1">
                    <BookMarkIcon class="size-4 text-theme-gray-100" />
                    <span class="text-xs">Priority</span>
                </div>
            </label>
            <Modal
                classBackdrop="-top-20! -left-55! h-[200dvh]!"
                animation="scale"
                id="priority-dropdown"
                class="absolute z-50 -left-1 bg-white">
                <div
                    class="bg-white w-3xs text-center border border-neutral-200 rounded-lg p-2 z-50 **:select-none **:cursor-pointer pb-3">
                    <button type="button" class="w-full flex items-center gap-1 hover:bg-neutral-100 rounded">
                        <BookMarkIcon class="size-4 text-theme-red-100" />
                        <span>Priority 1</span>
                    </button>
                    <button type="button" class="w-full flex items-center gap-1 hover:bg-neutral-100 rounded">
                        <BookMarkIcon class="size-4 text-orange-500" />
                        <span>Priority 2</span>
                    </button>
                    <button type="button" class="w-full flex items-center gap-1 hover:bg-neutral-100 rounded">
                        <BookMarkIcon class="size-4 text-amber-500" />
                        <span>Priority 3</span>
                    </button>
                    <button type="button" class="w-full flex items-center gap-1 hover:bg-neutral-100 rounded">
                        <BookMarkIcon class="size-4 text-theme-gray-100" />
                        <span>Priority 4</span>
                    </button>
                </div>
            </Modal>
        </section>
    )
}

function SidebarDate() {
    return (
        <section class="relative">
            <h3 class="text-sm mt-2">Date</h3>
            <input type="date" class="cursor-pointer w-full hover:bg-neutral-100  rounded" />
        </section>
    )
}

function SidebarProject() {
    return (
        <section class="relative">
            <h3 class="text-sm mt-2">Project</h3>
            <label for="projects-dropdown" class="cursor-pointer flex hover:bg-neutral-100 px-2 py-1.5 rounded transition-colors duration-300 justify-between">
                <div class="flex justify-between gap-1">
                    <InboxIcon />
                    <span class="text-xs">Inbox</span>
                </div>
                <ChevronIcon class="size-3.5" />
            </label>
            <Modal
                classBackdrop=" -top-20! -left-55! h-[200dvh]!"
                animation="scale"
                id="projects-dropdown"
                class="absolute rounded -left-2 bg-white z-50">
                <div class="bg-white w-3xs text-center border border-neutral-200 rounded p-2">
                    <h1 class="text-xl">Projects</h1>
                </div>
            </Modal>
        </section>
    )
}

function SidebarCategory() {
    const handleInput = (e: JSX.TargetedEvent<HTMLInputElement>) => {

    }
    return (
        <section class="relative">
            <h3 class="text-sm mt-2">Category</h3>
            <label for="category-dropdown" class="cursor-pointer flex hover:bg-neutral-100 px-2 py-1.5 rounded transition-colors duration-300 justify-between">
                <div class="flex justify-between gap-1">
                    <span class="text-xs">Category</span>
                </div>
            </label>
            <Modal
                classBackdrop=" -top-20! -left-55! h-[200dvh]!"
                animation="scale"
                id="category-dropdown"
                class="absolute rounded -left-2 bg-white z-50">
                <div class="bg-white w-3xs text-center border border-neutral-200 rounded p-2">
                    <h1 class="text-xs">Category</h1>
                    <form class="relative">
                        <input
                            type="text"
                            placeholder="Add category"
                            pattern="[a-zA-Z0-9]+"
                            required
                            class="border border-neutral-200 rounded w-full my-1 focus:outline-none text-sm p-1 valid:text-emerald-600 valid:border-2 invalid:text-theme-red-100 valid:border-emerald-600 invalid:border-theme-red-100 invalid:border-2"
                            onInput={handleInput} />

                    </form>
                    <button type="button" class="w-full flex items-center gap-1 hover:bg-neutral-100 rounded">
                    </button>
                </div>
            </Modal>
        </section>
    )
}