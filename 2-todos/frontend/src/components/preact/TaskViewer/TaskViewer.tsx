import { signal, effect, useSignal } from "@preact/signals";
import { ChevronIcon } from "../icons/ChevronIcon";
import { Modal } from "../Modal";
import { Checker } from "../Checker";
import { InboxIcon } from "../icons/InboxIcon";
import { CrossIcon } from "../icons/CrossIcon";
import { TaskViewerSidebar } from "./TaskViewerSidebar";
import { selectedTask } from "../../../stores/mod";
import { Comment } from "../Comment";
import type { Task, User } from "../../../types/mod";
import { useGetUser } from "../../../hooks/users";
import { userID } from "../../../stores/mod";
import { SendIcon } from "../icons/SendIcon";

const taskTitle = signal<Task["title"]>()
const taskDescription = signal<Task["content"]>()

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

interface TaskViewerMainProps {
    task: Task
}

function TaskViewerMain({ task }: TaskViewerMainProps) {
    const user = useSignal<User>()
    effect(() => {
        useGetUser({ userID })
            .then(res => {
                if (res.ok && res.data) {
                    user.value = res.data
                }
            })
            .finally(() => {
                console.log({ user })
            })
    })
    return (
        <main class="w-[70%] group @container">
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

            <hr class="text-neutral-200 my-2" />

            <section class="w-full has-open:h-[50cqh] flex flex-col overflow-x-hidden overflow-y-scroll transition-all">
                <main class="w-full has-open:h-[50cqh] flex justify-start overflow-x-hidden overflow-y-scroll mx-2">
                    <details class="[&_summary::-webkit-details-marker]:hidden w-full group select-none" open>
                        <summary class="w-full cursor-pointer text-start [list-style:none] mx-10 flex items-center py-2">
                            <div>
                                <ChevronIcon class="size-3.5 group-not-open:-rotate-90 group-open:rotate-0 transition duration-300" />
                            </div>
                            <span>Comment</span>
                        </summary>
                        {selectedTask.value?.comments?.map((comment) => {
                            return (
                                <>
                                    <Comment
                                        key={comment.id}
                                        class="group-open:opacity-100 motion-duration-300 motion-ease-spring-bouncy transition-discrete starting:opacity-0"
                                        content={comment.content}
                                        createdAt={comment.createdAt}
                                        creator={comment.creator}
                                        id={comment.id}
                                    />
                                </>
                            )
                        })}
                    </details>
                </main>
                <hr class="text-neutral-200 mb-2 w-80%" />
                <footer class="flex mx-10 my-2">
                    <aside>
                        <div class="size-8 rounded-full border border-neutral-100 overflow-hidden mr-2 flex items-center justify-center">
                            <img src={user.value?.avatar} alt="user avatar" />
                        </div>
                    </aside>
                    <form class="w-full flex">
                        <input
                            placeholder="Comment your ideas here"
                            class="w-full border border-neutral-200 rounded-full p-1 px-2 text-sm focus:outline-none"
                            type="text"
                        />
                        <button
                            class="text-xs bg-theme-red-100 text-white font-medium p-1.5 rounded-md mx-2 cursor-pointer"
                            type="submit">
                            <SendIcon class="size-4" />
                        </button>
                    </form>

                </footer>

            </section>
        </main>
    )
}