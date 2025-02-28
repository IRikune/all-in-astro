import type { Task as TaskType } from "../../../deno/types/mod"
import { Button } from "./Button"
import { Checker } from "./Checker"
import { Icon } from "./icons/Icon"



interface Props {
    task: TaskType
}

export function Task({task}:Props) {
   
    return (
        <article class="grid grid-cols-[18px_minmax(600px,1fr)_100px] h-20 gap-2">
            <section class='flex relative'>
               <Checker priority={task.priority} class="absolute"/>
            </section>
            <button class='flex flex-col items-start gap-1' popoverTarget='althougth'>
                <h2 class='font-bold text-[0.875rem]'>{task.title}</h2>
                <p class='font-extralight text-[12px]'>{task.content}</p>

                <div class='flex flex-row gap-2 justify-between'>
                    <Button class="flex w-[2rem] text-[2px] p-0 h-[1rem]">
                        <Icon name="bell" class={"w-4"} />
                        <span>{task.comments?.length}</span>
                    </Button>
                    <Button class="h-[1rem]">
                        <span class='text-red-500 '>{task.date.expected}</span>
                    </Button>
                </div>
            </button>
            <section>
                <Button icon="hash" class='w-[40px]'/>
            </section>

            <section id='althougth' popover class='w-[65%] h-[85%] mx-auto my-auto rounded-2xl bg-white '>
               
            </section>
            

        </article>
    )
}