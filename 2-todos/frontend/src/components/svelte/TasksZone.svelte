<script lang="ts">
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import Task from "./Task.svelte";
    import { tasks } from "../../utils/mocks";
    let currentTasks = [...tasks];
    const flipDurationMs = 300;
    function handleDndConsider(e: CustomEvent<any>) {
        currentTasks = e.detail.items;
    }
    function handleDndFinalize(e: CustomEvent<any>) {
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
    {#each currentTasks as item (item.id)}
        <div animate:flip={{ duration: flipDurationMs }}>
            <Task task={item} />
        </div>
    {/each}
</section>

<style>
    :global(#dnd-action-dragged-el > *) {
        border: 1px solid oklch(92.2% 0 0);
        background-color: #ffffffde;
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    }
    :global(#dnd-action-dragged-el) {
        outline: none;
    }
</style>
