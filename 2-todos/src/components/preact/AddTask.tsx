import { Button } from "./Button"
import { Icon } from "./icons/Icon"
import { signal } from "@preact/signals";


export const showTaskCreator = signal(false);

export function AddTask({...props}){
    return (
        <Button
        class="cursor-pointer flex rounded items-center w-full hover:*:bg-red-500 hover:*:*:stroke-zinc-100 text-sm hover:text-red-500 text-zinc-400 hover:bg-white my-1"
        onclick={() => { showTaskCreator.value = !showTaskCreator.value }}
        {...props}
        >
            <div
                class="flex relative mx-2 w-4 h-4 rounded-full items-center justify-center text-sm ml-0"
            >
                <Icon name="plus" class="w-5.5 h-5.5 absolute stroke-red-500" />
            </div>
            Add task
        </Button>
    )
}