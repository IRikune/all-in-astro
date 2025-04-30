import { Step } from "./Registration";
import { Steps } from "./Registration";
import { NameRegistred } from "./RoadRegistration";
export function StepName() {
    return (
        <form
            class={"w-full  h-full flex flex-col my-[10%] items-center gap-6 justify-center"}
        >
            <div
                class={"w-[50%] flex flex-row relative items-center "}
            >
                <label class={"flex w-full items-center gap-7"}>
                    <span class={"select-none"}>Name:</span>

                    <input
                        placeholder={"Introduce tu nombre..."}
                        class={"peer block w-full h-10 rounded-md border border-esmerald-800 px-3 py-2 placeholder-gray-400 shadow-s select-none invalid:border-red-500 focus:text-black focus:border-0 focus:invalid:border-red-500 focus:shadow-white/20 focus:shadow-lg  valid:border-whitehover:shadow-lg"}
                        type="text"
                        name="Name"
                    />
                </label>
            </div>
            <button
                type="button"
                onClick={() => {
                    NameRegistred.value = true;
                    console.log(Step.value);
                    Step.value = Steps.email;
                }}
                class={"border-b-[2px] inset-shadow border-b-green-900 rounded hover:cursor-pointer bg-emerald-400 hover:shadow-lg hover:shadow-white/20 active:bg-green-900 active:shadow-none"}
            >
                Next
            </button>
        </form>
    );
}
