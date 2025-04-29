<script lang="ts">
    import { dndzone } from "svelte-dnd-action";
    import Task from "./Task.svelte";
    let items = [
        { id: 1, name: "item1" },
        { id: 2, name: "item2" },
        { id: 3, name: "item3" },
        { id: 4, name: "item4" },
    ];
    const flipDurationMs = 300;
    function handleDndConsider(e: CustomEvent<any>) {
        items = e.detail.items;
    }
    function handleDndFinalize(e: CustomEvent<any>) {
        items = e.detail.items;
    }
</script>

<section
    use:dndzone={{
        items,
        flipDurationMs,
        dropTargetStyle: { outline: "none" },
    }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
>
    {#each items as item (item.id)}
        <slot />
    {/each}
</section>
