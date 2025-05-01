<script lang="ts">
    import { Priority } from "../../types/mod";
    interface Props {
        priority: Priority;
        class?: string;
    }
    const { priority, class: className }: Props = $props();
    let checked = $state(false);

    const colors = {
        [Priority.high]:
            "bg-theme-red-100/20 border-theme-red-100 hover:bg-theme-red-100/50 checked:bg-theme-red-100 hover:checked:bg-theme-red-100 hover:checked:delay-200",
        [Priority.important]:
            "bg-orange-500/20 border-orange-500 hover:bg-orange-500/30 checked:bg-orange-500 hover:checked:bg-orange-500 hover:checked:delay-200",
        [Priority.medium]:
            "bg-amber-500/20 border-amber-500 hover:bg-amber-500/30 checked:bg-amber-500 hover:checked:bg-amber-500 hover:checked:delay-200",

        [Priority.low]:
            "bg-theme-gray-100/20 border-theme-gray-100 hover:bg-theme-gray-100/30 checked:bg-theme-gray-100 hover:checked:bg-theme-gray-100 hover:checked:delay-200",
    };
    const iconColors = {
        [Priority.high]: "text-theme-red-100",
        [Priority.important]: "text-amber-500",
        [Priority.medium]: "text-theme-orange-100",
        [Priority.low]: "text-theme-gray-100",
    };
</script>

<div
    class={`relative grid rounded-full motion-ease-spring-bouncier content-center motion-duration-300 motion-delay-200 w-fit ${checked && "motion-scale-out-125"} ${className}`}
>
    <input
        class={`peer appearance-none size-4.5 cursor-pointer rounded-full flex align-middle z-10 items-center justify-center border-2 transition-colors duration-200 ${colors[priority]}`}
        type="checkbox"
        {checked}
        onchange={() => (checked = true)}
    />

    <svg
        class={`absolute left-[0.75px] top-[0.75px] peer-hover:opacity-100 opacity-0 transition-opacity size-4 peer-checked:motion-scale-in-140 ${iconColors[priority]}`}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ><path
            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
        /></svg
    >
</div>
