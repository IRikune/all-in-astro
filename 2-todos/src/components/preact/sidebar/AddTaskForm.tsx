import { signal } from "@preact/signals";
import type { Task } from "../../../../deno/types/mod.ts"
import { Badge } from "./Badge.tsx";
import { CalendarIcon } from "../icons/CalendarIcon.tsx";
import { PriorityIcon } from "../icons/PriorityIcon.tsx";
import { ClockIcon } from "../icons/ClockIcon.tsx";
import { BookMarkIcon } from "../icons/BookMarkIcon.tsx";
import { InboxIcon } from "../icons/InboxIcon.tsx";
import { ChevronIcon } from "../icons/ChevronIcon.tsx";

const title = signal<Task["title"]>("");
const description = signal<Task["description"]>("");
const badges = signal<Task["badges"]>([]);


export function AddTaskForm() {
    return (
        <form class="flex flex-col p-2">
            <input class="focus:outline-0 text-xl" placeholder="Go for a walk tomorrow p1" type="text" />
            <input class="focus:outline-0 text-sm" placeholder="Description" type="text" />
            <section class="flex *:items-center *:cursor-pointer *:p-2 text-xs mt-2">
                <label class="mr-1" for="add-task-date">
                    <div class="flex items-center border border-neutral-300 rounded-lg p-1 px-2 text-neutral-700 hover:bg-neutral-100 transition duration-300">
                        <h2 class="mr-1">Date</h2>
                        <CalendarIcon class="size-3" />
                    </div>
                </label>
                <label class="mr-1" for="add-task-priority">
                    <div class="flex items-center border border-neutral-300 rounded-lg p-1 px-2 text-neutral-700 hover:bg-neutral-100 transition duration-300">
                        <h2 class="">Priority</h2>
                        <PriorityIcon class="size-3" />
                    </div>
                </label>
                <label class="w-fit mr-1" for="add-task-reminder">
                    <div class="flex items-center border border-neutral-300 rounded-lg p-1 px-2 text-neutral-700 hover:bg-neutral-100 transition duration-300">
                        <h2 class="mr-1">Reminders</h2>
                        <ClockIcon class="size-3" />
                    </div>
                </label>
                <label class="select-none" for="add-task-label">
                    <div class="flex items-center border border-neutral-300 rounded-lg p-1 px-2 text-neutral-700 hover:bg-neutral-100 transition duration-300">
                        <h2 class="mr-1">Labels</h2>
                        <BookMarkIcon class="size-3" />
                    </div>
                </label>
            </section>
            <hr class="text-neutral-300 my-2" />
            <section class="flex justify-between items-center pt-2">
                <label class="cursor-pointer text-sm select-none" for="add-task-group">
                    <div class="flex items-center text-xs font-medium text-neutral-700 hover:bg-neutral-200 p-2 rounded-lg transition-colors duration-300">
                        <InboxIcon class="size-3" />
                        <h2 class="ml-1">Group</h2>
                        <ChevronIcon class="size-4" />
                    </div>
                </label>
                <div class="flex items-center gap-2">
                    <label class="cursor-pointer" for="add-task-modal">
                        <div class="flex items-center bg-neutral-200 rounded-lg p-2 hover:bg-neutral-300 px-3 transition duration-300 text-xs font-medium">
                            <h2 class="mr-1">Close</h2>
                        </div>
                    </label>
                    <button class="bg-theme-red-100 p-2 px-3 rounded-lg text-xs text-white cursor-pointer hover:saturate-[85%] transition duration-300 font-medium" type="submit">
                        Add task
                    </button>
                </div>
            </section>
        </form>
    )
}

