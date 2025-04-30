<script lang="ts">
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import { useGetManyTasks } from "../../hooks/tasks";
    import Task from "./Task.svelte";
    import { userID } from "../../stores/mod";
    const flipDurationMs = 300;
    let currentTasks = $state<Task[]>([]);
    let loading = $state<boolean>(false);
    let error = $state<string>("");
    useGetManyTasks({ userID })
        .then(({ data, ok, message }) => {
            if (ok && data) {
                currentTasks = data;
            } else {
                error = message || "Error al cargar tareas";
            }
        })
        .catch((err) => {
            error = err.message;
        })
        .finally(() => {
            loading = false;
        });
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
    {#if loading}
        <div>Cargando tareas...</div>
    {:else if error}
        <div class="text-red-500">{error}</div>
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
        background-color: #ffffffde;
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    }
    :global(#dnd-action-dragged-el) {
        outline: none;
    }
</style>
