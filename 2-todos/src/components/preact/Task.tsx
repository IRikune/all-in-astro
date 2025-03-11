import { signal } from "@preact/signals"
import type { Task as TaskType } from "../../../deno/types/mod"
import { Button } from "./Button"
import { Checker } from "./Checker"
import { Icon } from "./icons/Icon"
interface Props {
    task: TaskType
}
const isOpen = signal(false);
const selecPriority = signal(false);

const buttonStyle = 'h-7 w-full *:w-4 *:mr-[1%] items-center';
const hrStyle = 'opacity-10'
const selectColor = signal('white');
const priority = signal('P4');

const handleClick = () => {
    isOpen.value = !isOpen.value;
}
export function Task({ task }: Props) {
    return (
        <>
            <article class="grid grid-cols-[18px_minmax(600px,1fr)_100px] h-20 gap-2">
                <section class='flex relative'>
                    <Checker priority={task.priority} class="absolute ite" />
                </section>
                <button id='task'
                    type="button"
                    class='flex flex-col items-start gap-1'
                    onClick={handleClick}>
                    <h2 class='font-bold text-[0.875rem]'>
                        {task.title}
                    </h2>
                    <p class='font-extralight text-[12px]'>
                        {task.content}
                    </p>
                    <div class='flex flex-row gap-2 justify-between'>
                        <Button class="flex w-fit text-[2px] p-0 h-[1rem]">
                            <Icon name="bell" class="w-4" />
                            <span>{task.comments?.length}</span>
                        </Button>
                        <Button class="h-[1rem]">
                            <span
                                class='text-red-500 '>
                                {task.date.expected}
                            </span>
                        </Button>
                    </div>
                </button>
            </article>
            <TaskDetails />
        </>
    )
}

function TaskDetails() {
    const handleClick = () => {
        isOpen.value = !isOpen.value;
    }
    return (
        <>
            <button type="button"
                class={`absolute z-10 top-0 left-0 w-dvw h-dvh bg-black/50 ${isOpen.value ? 'block' : 'hidden'}`}
                onClick={handleClick} />
            <dialog open={isOpen.value}
                class='w-[62%] h-[85%] z-20 top-[7.5%] left-[19%] fixed overflow-hidden rounded-2xl border border-neutral-200'>
                <div class="grid grid-rows-[min(2.5rem)_1fr] grid-cols-[3fr_1.5fr] h-full p-2.5 w-full">
                    <div class='flex justify-end'>
                        <Button icon="inbox"
                            class='h-7 w-40 *:w-4 *:mr-[1%] items-center hover:bg-gray-200'>
                            Bandeja de entrada
                        </Button>
                        <Button class={"w-10 h-10 active:bg-gray-300 justify-center"} icon="chevron-down" />
                        <Button class={"w-10 h-10 active:bg-gray-300 justify-center"} icon="chevron-up" />
                        <Button class={" w-10 h-10 active:bg-gray-300 justify-center"} icon="more-horizontal" />
                        <Button onclick={() => { isOpen.value = false; selecPriority.value = false }} class={" w-10 h-10 active:bg-gray-300 justify-center"} icon="x" />
                    </div>
                    <section>
                        Section
                    </section>
                    <div class="grid grid-rows-[1fr] gap *:w-full start-[] *:gap text-[12px] bg-neutral-100/50 py-2.5 px-4 ">
                        <div>
                            <section>
                                <span
                                    class="text-xs font-medium text-neutral-600">
                                    Proyecto
                                </span>
                                <Button to="/" icon="inbox" class="hover:bg-rose-100 p-1 my-2 text-xs">
                                    Bandeja de entrada
                                </Button>
                            </section>
                            <hr class="opacity-10" />
                            <section >
                                <div class={`${buttonStyle}`}>Fecha</div>
                                <Button icon="calendar" class={`${buttonStyle} hover:bg-rose-300`}>hoy</Button>
                            </section>
                            <hr class={`${hrStyle}`} />
                            <Button icon="lock" class={`${buttonStyle} hover:bg-rose-300 *:order-2 justify-between`}>fecha limite</Button>
                            <hr class="opacity-10" />
                            <section class={'relative'}>
                                <div class={`${buttonStyle}`}>prioridad</div>
                                <Button onclick={() => {
                                    selecPriority.value = !selecPriority.value
                                }} class={`${buttonStyle} hover:bg-rose-300 hover:*:visible relative `}>
                                    <Icon name="flag" color={`${selectColor.value === "#737373" ? "white" : selectColor}`} styles={`color: ${selectColor.value === "white" ? "#737373" : selectColor}`} />
                                    {priority}
                                    <Icon name="chevron-down" class=" invisible absolute right-0" color="transparent" />
                                </Button>
                                <dialog open={selecPriority.value} class={'w-30 h-28 las last:self-end left-[65%] fixed rounded-[10px] z-1 overflow-hidden shadow'} >
                                    <div class={" w-30 h-28  bg-white"}>

                                        <Button onclick={() => { selectColor.value = "oklch(0.505 0.213 27.518)"; priority.value = 'P1' }} class={`${buttonStyle} hover:bg-rose-300 *:text-red-700`} >
                                            <Icon name="flag" class={"w-7"} color="oklch(0.505 0.213 27.518)" />
                                            P1
                                        </Button>
                                        <Button onclick={() => { selectColor.value = "oklch(0.75 0.183 55.934)"; priority.value = 'P2' }} class={`${buttonStyle} hover:bg-rose-300 *:text-orange-400`}>
                                            <Icon name="flag" class={"w-7"} color="oklch(0.75 0.183 55.934)" />
                                            P2
                                        </Button>
                                        <Button onclick={() => { selectColor.value = "oklch(0.488 0.243 264.376)"; priority.value = 'P3' }} class={`${buttonStyle} hover:bg-rose-300 *:text-blue-700`}>
                                            <Icon name="flag" class={"w-7"} color="oklch(0.488 0.243 264.376)" />
                                            P3
                                        </Button>
                                        <Button onclick={() => { selectColor.value = "#737373"; priority.value = 'P4' }} class={`${buttonStyle} hover:bg-rose-300 *:text-gray-400`}>
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
            </dialog >
        </>
    )

}

function TaskDetails2() {
    return (
        <>
            <dialog>
                <header>

                </header>
                <main>

                </main>
                <aside>

                </aside>
            </dialog>
        </>
    )
}