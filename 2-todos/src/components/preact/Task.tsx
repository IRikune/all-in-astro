import { signal } from "@preact/signals"
import { Priority, type Task as TaskType } from "../../../deno/types/mod"
import { Button } from "./Button"
import { Checker } from "./Checker"
import { Icon } from "./icons/Icon"
import { tasks } from "../../utils/mocks";

interface Props {
    task: TaskType
}
const showTaskDetails = signal(false);
const selecPriority = signal(false);

const colors = {
    1: 'oklch(0.505 0.213 27.518)',
    2: 'oklch(0.75 0.183 55.934)',
    3: "oklch(0.488 0.243 264.376)",
    4: 'green'
}
const taskSignal = signal<TaskType>(tasks[0]);
const setPriority = (value: Priority) => { taskSignal.value.priority = value };
const priority = taskSignal.value.priority;
const buttonStyle = 'h-7 w-full *:w-4 *:mr-[1%] items-center';
const hrStyle = 'opacity-10'
const selectColor = signal(colors[priority]);


export function Task({ task }: Props) {
    return (
        <>
            <article class="bg-white rounded-2xl grid grid-cols-[18px_minmax(600px,1fr)_100px] h-20 gap-2">
                <section class='flex relative opa'>
                    <Checker priority={task.priority} class="absolute ite" />
                </section>

                <section id='task' class='flex flex-col items-start gap-1' onClick={() => { showTaskDetails.value = !showTaskDetails.value; taskSignal.value = task }}>
                    <h2 class='font-bold text-[0.875rem]'>{task.title}</h2>
                    <p class='font-extralight text-[12px]'>{task.content}</p>
                    <div class='flex flex-row gap-2 justify-between'>
                        <Button class="flex w-fit text-[2px] p-0 h-[1rem]">
                            <Icon name="bell" class={"w-4"} />
                            <span>{task.comments?.length}</span>
                        </Button>
                        <Button class="h-[1rem]">
                            <span class='text-red-500 '>{task.date.expected}</span>
                        </Button>
                    </div>
                </section>
                {/* comments */}
                <section>
                </section>

            </article>

        </>
    )
}

export function ViewTask() {


    return (
        <>
            <dialog open={showTaskDetails.value} onClick={() => { showTaskDetails.value = false; selecPriority.value = false }} class={"w-[100%] top-0 z-10 h-[100%] fixed bg-black/8"} />

            <dialog open={showTaskDetails.value} class='w-[62%] h-[85%] z-20 top-[7.5%] left-[19%] fixed overflow-hidden rounded-2xl bg-white  '>
                <div class={"grid grid-rows-[min(2.5rem)_1fr] grid-cols-[3fr_1.5fr] h-full p-2.5 w-full"}>

                    <Button icon="inbox" class='h-7 w-40 *:w-4 *:mr-[1%] items-center hover:bg-gray-200'>bandeja de entrada</Button>
                    <div class='flex justify-end'>
                        <Button class={"w-10 h-10 active:bg-gray-300 justify-center"} icon="chevron-down" />
                        <Button class={"w-10 h-10 active:bg-gray-300 justify-center"} icon="chevron-up" />
                        <Button class={" w-10 h-10 active:bg-gray-300 justify-center"} icon="more-horizontal" />
                        <Button onclick={() => { showTaskDetails.value = false; selecPriority.value = false }} class={" w-10 h-10 active:bg-gray-300 justify-center"} icon="x" />
                    </div>
                    <div>{taskSignal.value.creator}</div>
                    <div class={"grid grid-rows-[1fr] gap *:w-full *:gap text-[12px] bg-neutral-100/50 py-2.5 px-4 "}>
                        <div>

                            <section  >
                                <div class={`${buttonStyle}`}>proyecto</div>
                                <Button icon="inbox" class={`${buttonStyle} hover:bg-rose-300`}>bandeja de entrada</Button>
                            </section>
                            <hr class={`${hrStyle}`} />
                            <section >
                                <div class={`${buttonStyle}`}>Fecha</div>
                                <Button icon="calendar" class={`${buttonStyle} hover:bg-rose-300`}>hoy</Button>
                            </section>
                            <hr class={`${hrStyle}`} />
                            <Button icon="lock" class={`${buttonStyle} hover:bg-rose-300 *:order-2 justify-between`}>fecha limite</Button>
                            <hr class={`${hrStyle} `} />
                            <section class={'relative'}>
                                <div class={`${buttonStyle}`}>prioridad</div>
                                <Button onclick={() => { selecPriority.value = !selecPriority.value }} class={`${buttonStyle} hover:bg-rose-300 hover:*:visible relative `}>
                                    <Icon name="flag" color={`${selectColor}`} styles={`color: ${selectColor.value === "white" ? "#737373" : selectColor}`} />
                                    {priority}
                                    <Icon name="chevron-down" class=" invisible absolute right-0" color="transparent" />
                                </Button>
                                <dialog open={selecPriority.value} class={'w-30 h-28 las last:self-end left-[65%] fixed rounded-[10px] z-1 overflow-hidden shadow'} >
                                    <div class={" w-30 h-28  bg-white"}>

                                        <Button onclick={() => { setPriority(Priority.high); selectColor.value = colors[1] }} class={`${buttonStyle} hover:bg-rose-300 *:text-red-700`} >
                                            <Icon name="flag" class={"w-7"} color="oklch(0.505 0.213 27.518)" />
                                            P1
                                        </Button>
                                        <Button onclick={() => { setPriority(Priority.important); selectColor.value = colors[2] }} class={`${buttonStyle} hover:bg-rose-300 *:text-orange-400`}>
                                            <Icon name="flag" class={"w-7"} color="oklch(0.75 0.183 55.934)" />
                                            P2
                                        </Button>
                                        <Button onclick={() => { setPriority(Priority.medium); selectColor.value = colors[3] }} class={`${buttonStyle} hover:bg-rose-300 *:text-blue-700`}>
                                            <Icon name="flag" class={"w-7"} color="" />
                                            P3
                                        </Button>
                                        <Button onclick={() => { setPriority(Priority.low); selectColor.value = colors[4] }} class={`${buttonStyle} hover:bg-rose-300 *:text-gray-400`}>
                                            <Icon name="flag" class={"w-7"} color='white' />
                                            P4
                                        </Button>
                                    </div>


                                </dialog>
                            </section>
                            <hr class={`${hrStyle}`} />
                            <Button class={`${buttonStyle} hover:bg-rose-300`}>etiquetas</Button>
                            <hr class={`${hrStyle}`} />
                            <Button icon="plus" class={`${buttonStyle} hover:bg-rose-300 *:order-2 justify-between`}>recordatorios</Button>
                            <hr class={`${hrStyle}`} />
                            <Button icon="plus" class={`${buttonStyle} hover:bg-rose-300 *:order-2 justify-between`}>ubicacion</Button>
                            <hr class={`${hrStyle}`} />
                        </div>
                    </div>
                </div>
            </dialog>

        </>
    )
}
