<script lang="ts">
    import { useFormatedDate } from "../../hooks/mod";
    import Checker from "./Checker.svelte";
    import { Priority, type Task } from "../../types/mod";
    const taskStandard: Task = {
        id: "jasdifgjasdoighais",
        title: "Task 1",
        content: "This is a task",
        completed: false,
        creator: "Gean",
        date: {
            created: 1745984981013,
        },
        priority: Priority.important,
    };
    const { task = taskStandard } = $props();
    const formatedDate = useFormatedDate({ date: task.date.created });
</script>

<article class="flex w-full">
    <aside>
        <Checker priority={task.priority} />
    </aside>
    <section class="flex flex-col">
        <h1>{task.title}</h1>
        <small>{task.content}</small>
        <h1>{formatedDate}</h1>
        <h1>{task.priority}</h1>
    </section>
    <aside></aside>
</article>
