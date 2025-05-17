import {Modal} from "../Modal";
import {Checker} from "../Checker";
import {InboxIcon} from "../icons/InboxIcon";
import {CrossIcon} from "../icons/CrossIcon";
import {TaskViewerSidebar} from "./TaskViewerSidebar";
import {selectedTask} from "../../../stores/mod";
import type {Task} from "../../../types/mod";
import {signal} from "@preact/signals";

const taskTitle = signal<Task["title"]>();
const taskDescription = signal<Task["content"]>();

export function TaskViewer() {
  return (
    <Modal
      id="view-task-options"
      animation="fade"
      backdropLabel={true}
      classFather="fixed! self-center! place-self-center! z-100  rounded-lg shadow-theme-2"
    >
      <div class="bg-white w-4xl text-center shadow-theme-2 rounded-lg">
        <TaskViewerHeader />
        <div class="h-[70dvh] flex">
          {selectedTask.value ? (
            <TaskViewerMain task={selectedTask.value} />
          ) : (
            <main class="w-[70%]"></main>
          )}
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
        <button
          class="hover:bg-neutral-100 duration-300 transition-colors p-1.5 rounded text-neutral-600 cursor-pointer flex text-xs items-center gap-1"
          type="button"
        >
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
  );
}

interface TaskViewerMainProps {
  task: Task;
}

function TaskViewerMain({task}: TaskViewerMainProps) {
  return (
    <main class="w-[70%] group">
      <section class="flex items-center ml-5 my-2">
        <Checker priority={task.priority} />
        <div class="flex-col flex ml-2 mr-5 has-focus:border rounded border-neutral-300 p-2 w-full">
          <input
            class="font-medium focus:outline-none text-lg"
            placeholder="Write a shop list."
            value={task.title}
            type="text"
          />
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
      <div class="justify-end gap-2 w-full pr-5 text-sm *:px-3 *:py-1.5 font-medium group-has-focus:flex hidden transition-discrete starting:opacity-0">
        <button
          class="bg-neutral-200 cursor-pointer rounded hover:bg-neutral-300 transition-colors duration-300"
          type="button"
        >
          Cancel
        </button>
        <button
          class="bg-rose-700 rounded text-white cursor-pointer hover:bg-rose-800 transition-colors duration-300"
          type="button"
        >
          Save
        </button>
      </div>

      <hr class="text-neutral-200 my-2" />

      <section class="bg-amber-300 w-full h-full overflow-x-hidden">
        <p class="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          similique voluptatem sunt aliquid consectetur. Perspiciatis, deleniti
          dolorem facere facilis, accusamus, dolorum vel aut possimus doloremque
          ducimus soluta maiores sunt magni.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vero similique voluptatem sunt aliquid
          consectetur. Perspiciatis, deleniti dolorem facere facilis, accusamus,
          dolorum vel aut possimus doloremque ducimus soluta maiores sunt
          magni.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          similique voluptatem sunt aliquid consectetur. Perspiciatis, deleniti
          dolorem facere facilis, accusamus, dolorum vel aut possimus doloremque
          ducimus soluta maiores sunt magni.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vero similique voluptatem sunt aliquid
          consectetur. Perspiciatis, deleniti dolorem facere facilis, accusamus,
          dolorum vel aut possimus doloremque ducimus soluta maiores sunt
          magni.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          similique voluptatem sunt aliquid consectetur. Perspiciatis, deleniti
          dolorem facere facilis, accusamus, dolorum vel aut possimus doloremque
          ducimus soluta maiores sunt magni.
        </p>
      </section>
    </main>
  );
}
