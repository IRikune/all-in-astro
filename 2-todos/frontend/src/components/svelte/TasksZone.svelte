<script>
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import { tasks } from "../../stores/mod";
    import Task from "./Task.svelte";
    import TaskSkeleton from "./TaskSkeleton.svelte";

    const flipDurationMs = 300;

    let currentTasks = $state([...tasks.value]);

    function handleDndConsider(e) {
        currentTasks = e.detail.items;
    }
    function handleDndFinalize(e) {
        currentTasks = e.detail.items;
    }
</script>

<section
    class="first:border-t border-neutral-200"
    use:dndzone={{
        items: currentTasks,
        flipDurationMs,
        dropTargetClasses: ["outline-none!"],
    }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
>
    {#if currentTasks.length === 0}
        <TaskSkeleton />
    {:else}
        {#each currentTasks as item (item.id)}
            <div animate:flip={{ duration: flipDurationMs }}>
                <Task task={item} />
            </div>
        {/each}
    {/if}
</section>

<style>
    :global(#dnd-action-dragged-el > *) {
        border: 1px solid oklch(92.2% 0 0);
        border-radius: 0.25rem;
        background-color: #ffffffde;
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    }
    :global(#dnd-action-dragged-el) {
        outline: none;
    }
</style>
