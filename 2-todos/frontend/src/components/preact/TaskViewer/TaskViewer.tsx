import { Modal } from "../Modal";
import { InboxIcon } from "../icons/InboxIcon";
import { CrossIcon } from "../icons/CrossIcon";
import { TaskViewerSidebar } from "./TaskViewerSidebar";
import { selectedTask } from "../../../stores/mod";
import { TaskViewerMain } from "./TaskViewerMain";


export function TaskViewer() {
    return (
        <Modal
            id="view-task-options"
            animation='scale'
            backdropLabel={false}
            class="fixed left-1/6 top-1/10 z-[100] overflow-hidden rounded-lg shadow-theme-2"
        >
            <div class="bg-white w-4xl text-center shadow-theme-2 rounded-lg">
                <TaskViewerHeader />
                <div class="h-[70dvh] flex">
                    {
                        selectedTask.value
                            ? <TaskViewerMain task={selectedTask.value} />
                            : (
                                <main class="w-[70%]">
                                </main>
                            )
                    }
                    <TaskViewerSidebar />
                </div>
            </div>
        </Modal>
    );
}



function TaskViewerHeader() {
    return (
        <header class="flex justify-between items-center border-b border-neutral-200 p-2">
            <div>
                <button class="hover:bg-neutral-100 duration-300 transition-colors p-1.5 rounded text-neutral-600 cursor-pointer flex text-xs items-center gap-1" type="button">
                    <InboxIcon class="size-3.5" />
                    <span>Inbox</span>
                </button>
            </div>
            <div>
                <label for="view-task-options" class="cursor-pointer">
                    <div class="hover:bg-neutral-100 duration-300 transition-colors p-1.5 rounded text-neutral-600">
                        <CrossIcon class="size-4.5" />
                    </div>
                </label>
            </div>
        </header>
    )
}

