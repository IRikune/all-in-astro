<script lang="ts">
    import { Priority, type Task } from "../../types/mod";
    import Checker from "./Checker.svelte";
    const taskStandard: Task = {
        id: "jasdifgjasdoighais",
        title: "Task 1",
        content: "This is a task",
        completed: false,
        creator: "Gean",
        date: {
            created: 123912038,
        },
        priority: Priority.important,
    };
    const { task = taskStandard } = $props();
</script>

<article>
    <aside>
        <Checker priority={Priority.high} />
        <Checker priority={Priority.important} />
        <Checker priority={Priority.medium} />
        <Checker priority={Priority.low} />
    </aside>
    <h1>{task.title}</h1>
    <h1>{task.content}</h1>
    <h1>{task.completed}</h1>
    <h1>{task.date.created}</h1>
    <h1>{task.priority}</h1>
</article>
