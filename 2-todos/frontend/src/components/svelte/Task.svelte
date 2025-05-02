<script lang="ts">
    import Checker from "./Checker.svelte";
    import ClockIcon from "./icons/ClockIcon.svelte";
    import TrashIcon from "./icons/TrashIcon.svelte";
    import DotsIcon from "./icons/DotsIcon.svelte";
    import { useFormatedDate } from "../../hooks/mod";
    import { Priority, type Task } from "../../types/mod";
    const {
        task = {
            id: "jasdifgjasdoighais",
            title: "Task 1",
            content: "This is a task",
            completed: false,
            creator: "Gean",
            date: {
                created: 1745984981013,
            },
            priority: Priority.important,
        },
    }: { task?: Task } = $props();
    const formatedDate = useFormatedDate({ date: task.date.created || 0 });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<label
    for="view-task-options"
    class="flex justify-between w-full border-b border-neutral-200 p-2 outline-none! cursor-pointer active:cursor-grab motion-scale-in-105 motion-duration-300 motion-ease-spring-bouncy"
>
    <div class="flex">
        <aside class="mt-1 mr-2">
            <Checker priority={task.priority} />
        </aside>
        <section class="flex flex-col">
            <h2 class="text-sm">{task.title}</h2>
            <small class="text-xs text-neutral-500">{task.content}</small>
            <div class="flex items-center text-theme-red-100">
                <ClockIcon class="size-3.5 mr-0.5" />
                <small>{formatedDate}</small>
            </div>
        </section>
    </div>
    <aside
        class="flex flex-col *:p-1.5 *:hover:bg-neutral-100 *:cursor-pointer *:rounded gap-1 *:transition-colors *:duration-300 text-neutral-700"
    >
        <button onclick={handleDelete} type="button">
            <TrashIcon class="size-3.5" />
        </button>
        <label for="toggle-popover-modal">
            <DotsIcon class="size-3.5" />
        </label>
    </aside>
</label>
