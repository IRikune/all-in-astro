<script lang="ts">
    const { id, backdrop, children, class: className } = $props();
</script>

<div
    class="has-checked:*:block has-not-checked:*:hidden has-checked-:*:motion-scale-100 *:transition-discrete *:duration-300 has-not-checked:duration-300 peer-not-checked:opacity-0 peer-not-checked:scale-0"
>
    <input type="checkbox" {id} class="peer hidden!" />
    <label for={id}>
        <div
            class={`w-dvw h-dvh fixed left-0 top-0 z-[49] ${backdrop && "bg-black/20"}`}
        ></div>
    </label>
    <main
        class={`peer-checked:motion-scale-in
             peer-checked:motion-translate-y-in-25
             peer-not-checked:motion-translate-y-out-25
             peer-checked:motion-opacity-in peer-not-checked:motion-opacity-out peer-not-checked:motion-scale-out-[0.1] starting:opacity-0 starting:scale-0 motion-ease-spring-bouncier motion-duration-300 ${className}`}
    >
        {@render children?.()}
    </main>
</div>
