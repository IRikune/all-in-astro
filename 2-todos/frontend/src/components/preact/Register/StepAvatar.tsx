import { AvatarRegistred } from "./RoadRegistration";
import { Step, Steps } from "./Registration";
export function StepAvatar() {
    return (
        <form
            class={"w-full  h-full flex flex-col my-[10%] items-center gap-6 justify-center"}
        >
            <div
                class={"w-[50%] flex flex-row relative items-center "}
            >
                <label class={"flex w-full items-center gap-7"}>
                    <span class={"select-none"}>Avatar:</span>
                    <input
                        class={"peer block w-full h-10 rounded-md border border-esmerald-800 px-3 py-2 placeholder-gray-400 shadow-sm  invalid:border-red-500 focus:text-black focus:border-0 focus:invalid:border-red-500 focus:shadow-white/20 focus:shadow-lg  valid:border-whitehover:shadow-lg"}
                        type="file"
                        name="file"
                    />
                </label>
            </div>
            <a
                onClick={() => {
                    Step.value = Steps.name;
                    console.log(Step.value);
                }}
                href="/dashboard/today"
                class={"border-b-[2px] border-b-green-900 rounded hover:cursor-pointer bg-emerald-400 hover:shadow-lg hover:shadow-white/20 active:bg-green-900 active:shadow-none"}
            >
                Submit
            </a>
        </form>
    );
}
