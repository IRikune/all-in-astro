<script lang="ts">
    import Checker from "./Checker.svelte";
    import ClockIcon from "./icons/ClockIcon.svelte";
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
    const formatedDate = useFormatedDate({ date: task.date.created });
</script>

<label
    for="show-task-modal"
    class="flex w-full border-b border-neutral-200 p-2 outline-none! cursor-pointer active:cursor-grab"
>
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
    <aside></aside>
</label>
