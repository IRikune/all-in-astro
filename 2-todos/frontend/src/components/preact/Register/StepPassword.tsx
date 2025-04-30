import { Step } from "./Registration";
import { Steps } from "./Registration";
import { PasswordRegistred } from "./RoadRegistration";
export function StepPassword() {
    return (
        <form
            class={"w-full  h-full flex flex-col my-[10%] items-center gap-6 justify-center"}
        >
            <div class={" flex flex-row relative w-[50%] items-center"}>
                <label class={"flex w-full items-center gap-7"}>
                    <span class={"select-none"}>Password</span>

                    <input
                        placeholder={"Introduce tu contraseña..."}
                        class="
									peer block w-full h-10 rounded-md border border-esmerald-800 px-3 py-2 placeholder-gray-400 shadow-sm  invalid:border-red-500 focus:text-black focus:border-0 focus:invalid:border-red-500 focus:shadow-white/20 focus:shadow-lg  valid:border-whitehover:shadow-lg"
                        type="password"
                        name="password"
                        minLength={8}
                    />
                </label>
            </div>

            <button
                type="button"
                onClick={() => {
                    PasswordRegistred.value = true;
                    console.log(Step.value);
                    Step.value = Steps.avatar;
                }}
                class={"border-b-[2px] border-b-green-900 rounded hover:cursor-pointer bg-emerald-400 hover:shadow-lg hover:shadow-white/20 active:bg-green-900 active:shadow-none"}
            >
                Next
            </button>
        </form>
    );
}
