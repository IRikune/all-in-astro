import {computed, signal} from "@preact/signals";
import {Select} from "../Select.tsx";
import {InboxIcon} from "../icons/InboxIcon.tsx";
import {ChevronIcon} from "../icons/ChevronIcon.tsx";
import {PRIORITIES} from "../../../stores/mod.ts";
import {Priority} from "../../../types/mod";
import {useCreateTask} from "../../../hooks/tasks.ts";
import {userID, tasks, user} from "../../../stores/mod.ts";
import {PinIcon} from "../icons/PinIcon.tsx";
import type {NewTask, Project, Task} from "../../../types/mod";
import type {JSX} from "preact/jsx-runtime";

// single
const title = signal<NewTask["title"]>("");
const description = signal<NewTask["content"]>("");
const expectedDate = signal<NewTask["date"]["expected"]>(0);
// many
const prioritySelect = signal<string>("Priority");
const priorityInput = signal<string>("");
const projectSelect = signal<Project["title"]>("");
const projectInput = signal<Project["title"]>("");
const categorySelect = signal<string>("Category");
const categoryInput = signal<string>("");

const parsedPriority = computed(() => {
  const PRIORITIES = {
    P1: Priority.high,
    P2: Priority.important,
    P3: Priority.medium,
    P4: Priority.low,
  };
  const value = priorityInput.value;
  return PRIORITIES[value as keyof typeof PRIORITIES] || Priority.medium;
});

const data = computed(() => {
  return {
    project: projectSelect.value,
    category: categorySelect.value,
    priority: parsedPriority.value,
  };
});

async function addTaskHandler(event: JSX.TargetedEvent<HTMLFormElement>) {
  event.preventDefault();
  const $modal = document.getElementById("add-task-modal") as HTMLInputElement;
  const currentTask = {
    title: title.value,
    creator: userID,
    date: {
      created: Date.now(),
      expected: expectedDate.value,
    },
    priority: parsedPriority.value as Priority,
    content: description.value,
  };
  const result = await useCreateTask({newTask: currentTask});
  const newTask: Task = {
    ...currentTask,
    id: result.data || "",
  };
  tasks.value = [...tasks.value, newTask];
  $modal.checked = false;
  title.value = "";
  description.value = "";
  expectedDate.value = 0;
  prioritySelect.value = "Priority";
  projectSelect.value = "Project";
}

export function AddTaskForm({close = "add-task-modal", ...props}) {
  return (
    <form class="flex flex-col p-2" onSubmit={addTaskHandler}>
      <input
        class="focus:outline-0 text-xl"
        placeholder="Go for a walk tomorrow p1"
        type="text"
        name="title"
        required
        autocomplete="off"
        value={title.value}
        onInput={(e) => {
          title.value = e.currentTarget.value;
        }}
      />
      <input
        class="focus:outline-0 text-sm"
        placeholder="Description"
        type="text"
        value={description.value}
        onInput={(e) => {
          description.value = e.currentTarget.value;
        }}
        autocomplete="off"
        name="content"
      />
      <section class="flex *:items-center *:cursor-pointer *:p-2 text-xs mt-2 @container">
        <input
          type="datetime-local"
          value={expectedDate.value}
          class="appearance-none flex items-center border border-neutral-300 rounded-lg px-2 text-neutral-700 hover:bg-neutral-100 transition duration-300"
          name="data"
        />

        <Select
          class="w-fit! select-picker:absolute select-picker:left-[36cqw] border mx-2 border-neutral-300 rounded-lg"
          selectSignal={categorySelect}
          selectInputSignal={categoryInput}
          options={user.value?.categories || []}
        >
          <PinIcon class="size-3" />
        </Select>

        {/* Priority */}

        <Select
          class="w-fit! select-picker:absolute select-picker:left-[36cqw] border mx-2 border-neutral-300 rounded-lg"
          selectSignal={prioritySelect}
          selectInputSignal={priorityInput}
          options={PRIORITIES}
        >
          <PinIcon class="size-3" />
        </Select>
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
          <label class="cursor-pointer" for={close}>
            <div class="flex items-center bg-neutral-200 rounded-lg p-2 hover:bg-neutral-300 px-3 transition duration-300 text-xs font-medium">
              <h2 class="mr-1">Close</h2>
            </div>
          </label>
          <button
            class="bg-theme-red-100 disabled:opacity-50 p-2 px-3 rounded-lg text-xs text-white cursor-pointer hover:saturate-[85%] transition duration-300 font-medium motion-duration-300 motion-ease-spring-bounciest"
            type="submit"
            disabled={title.value.length === 0}
          >
            Add task
          </button>
        </div>
      </section>
      <h2>{JSON.stringify(data.value)}</h2>
    </form>
  );
}
