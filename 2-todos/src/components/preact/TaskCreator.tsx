import type { DialogHTMLAttributes } from "preact/compat";
import { showTaskCreator } from "./AddTask";
import { Input } from "./Input";

export function TaskCreator({...props}: DialogHTMLAttributes) {
    return (
        <dialog open={showTaskCreator} class={"w-[62%] h-[85%] z-1 top-[7.5%] left-[19%] fixed overflow-hidden rounded-2xl bg-white shadow "} {...props} >
            <form onSubmit={()=>{"logica aqui"}} class=" flex flex-col W-2 gap-2 p-2 ">
                <button onClick={()=>{showTaskCreator.value = !showTaskCreator.value}} type={"button"}>X</button>
                <div class="flex flex-col gap-2 w-36" >
                    <label for="taskName">Task Name</label>
                    <Input
                    type="text"
                    id="taskName"
                    placeholder="Enter task name"
                    class="border border-gray-300 rounded-md p-2 peer block w-50 px-3 py-2 placeholder-gray-400 shadow-sm  invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500  valid:border-emerald-400  "
                    required
                    pattern={"[a-zA-Z0-9 ]+"}
                    title="Only letters and numbers are allowed"
                    keyboard-focuchable={false}
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="taskDescription">Task Description</label>
                    <Input
                    id="taskDescription"
                    placeholder="Enter task description"
                    class="border border-gray-300 rounded-md p-2"
                    />
                </div>
                <button type={'submit'} class="bg-blue-500 text-white rounded-md p-2">Create Task</button>
            </form>
        </dialog>
    );
    } 