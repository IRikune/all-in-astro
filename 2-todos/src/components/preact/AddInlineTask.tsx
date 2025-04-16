import { Icon } from "./icons/Icon"


export function AddTask(){
    return (
        <>
            <label
                class=" peer has-checked:hidden content-visibility-auto select-none cursor-pointer flex rounded items-center w-full hover:*:bg-red-500  hover:*:*:stroke-zinc-100 text-sm hover:text-red-500 text-zinc-400 my-1">
                    
                    <input class="hidden" type="checkbox" id="AddTask" />
                    <div
                        class="flex relative mx-2 w-4 h-4 rounded-full items-center justify-center text-sm ml-0"
                    >
                        <Icon name="plus" class="w-5.5 h-5.5 absolute stroke-red-500" />
                    </div>
                    Add task
            </label>
        </>
    )
}