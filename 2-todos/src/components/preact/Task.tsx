import type { Task as TaskType } from "../../../deno/types/mod"
import { Button } from "./Button"
import { Checker } from "./Checker"



interface Props {
    task: TaskType
}

export function Task({task}:Props) {
   
    return (
        <article class="grid grid-cols-[25px_minmax(600px,1fr)_100px] gap-2 grid-rows-[25px_minmax(50px,100px)_20px]">
            <section>
               <Checker priority={task.priority}/>
            </section>
            <section class='flex flex-col items-start'>
                <h2 class='font-bold'>{task.title}</h2>
                <p class='font-extralight'>{task.content}</p>

                <div class='flex flex-row gap-2 justify-between'>
                    <Button icon="hash">
                        <span>{task.comments?.length}</span>
                    </Button>
                    <Button >
                        <span class='text-red-500'>{task.date.expected}</span>
                    </Button>
                </div>
            </section>
            <section>
                <Button icon="hash" class='w-[40px]'/>
            </section>
        </article>
    )
}