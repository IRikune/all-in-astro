import {isNameValid, isValidInput, Step, user} from "./Registration";
import {Steps} from "./Registration";
import {NameRegistred} from "./RoadRegistration";
export function StepName() {
  return (
    <form
      class={
        "w-full  h-full flex flex-col my-[10%] items-center gap-6 justify-center"
      }
    >
      <div class={"w-full flex flex-row relative items-center "}>
        <label class="peer/name has-checked:block hidden mb-1  text-sm ">
          <p class={"text-lg text-center mb-6"}>Name</p>
          <input
            name={"name"}
            required
            minLength={2}
            pattern={"^[a-zA-Z]{2,}$"}
            class="peer w-full h-10 border-black border-1 dark:border-white valid:placeholder:text-emerald-500 valid:text-emerald-600   valid:border-emerald-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:invalid:text-pink-700 invalid:ouline-pink-700 invalid:focus:border-pink-700 valid:focus:border-emerald-500   "
            type="text"
            placeholder="Name"
            autoComplete={"off"}
            value={user.value.name}
            onInput={(e) => {
              user.value.name = e.currentTarget.value;
              const regex = /^[a-zA-Z]{2,}$/;
              isValidInput(user.value.name, regex, isNameValid);
              console.log(isNameValid.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
              }
            }}
          />
          <p class="peer-valid:visible invisible mt-2 text-xs text-green-500">
            Great! Your name is valid.
          </p>
          <input
            type="radio"
            id={"Name"}
            name={"visualiza"}
            checked
            class="hidden"
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
        class={
          "border-b-[2px] inset-shadow border-b-green-900 rounded hover:cursor-pointer bg-emerald-400 hover:shadow-lg hover:shadow-white/20 active:bg-green-900 active:shadow-none"
        }
      >
        Next
      </button>
    </form>
  );
}
