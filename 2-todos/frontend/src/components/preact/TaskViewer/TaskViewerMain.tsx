import type { Task } from "../../../types/mod";
import { Checker } from "../Checker";
import { TaskComments } from "./TaskComments";

interface TaskViewerMainProps {
    task: Task
}

export function TaskViewerMain({ task }: TaskViewerMainProps) {
    return (
        <main class="w-[70%] group @container">
            <TaskEditor task={task} />
            <hr class="text-neutral-200 my-2" />
            <TaskComments />
        </main>
    )
}

interface TaskEditorProps {
    task: Task
}
function TaskEditor({ task }: TaskEditorProps) {
    return (
        <>
            <section class="peer flex items-center ml-5 my-2">
                <Checker priority={task.priority} />
                <div class="flex-col flex ml-2 mr-5 has-focus:border rounded border-neutral-300 p-2 w-full">
                    <input
                        class="font-medium focus:outline-none text-lg"
                        placeholder="Write a shop list."
                        value={task.title}
                        type="text" />
                    <div class="flex w-full">
                        <input
                            class="text-sm w-full outline-none"
                            placeholder="Content"
                            value={task.content}
                            type="text"
                        />
                    </div>
                </div>
            </section>
            <div class="justify-end gap-2 w-full pr-5 text-sm *:px-3 *:py-1.5 font-medium peer-has-focus:flex hidden transition-discrete starting:opacity-0">
                <button
                    class="bg-neutral-200 cursor-pointer rounded hover:bg-neutral-300 transition-colors duration-300"
                    type="button">
                    Cancel
                </button>
                <button
                    class="bg-rose-700 rounded text-white cursor-pointer hover:bg-rose-800 transition-colors duration-300"
                    type="button">
                    Save
                </button>
            </div>
        </>
    )
}

