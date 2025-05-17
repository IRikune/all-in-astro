import {signal} from "@preact/signals";
import {handleSubmit, useLogin} from "../../hooks/mod";
import {ChevronIcon} from "./icons/ChevronIcon";
import {
  pathNavBarIndicator,
  RegistrationNavBar,
  validIndicatorSet,
} from "./NavBar";
import type {Signal} from "@preact/signals";
export const error = signal("");

const isAllFine = signal(false);
const user = signal({name: "", email: "", password: ""});
const isNameValid = signal(false);
const isEmailValid = signal(false);
const isPasswordValid = signal(false);
export const currentStep = signal(1);
function isValidInput(
  userProp: string,
  pattern: RegExp,
  isCurrentStepValid: Signal<boolean>
) {
  isCurrentStepValid.value = pattern.test(userProp);
}

function isAllFineSet(): void {
  isAllFine.value =
    isNameValid.value && isEmailValid.value && isPasswordValid.value;
}

export function FormRegister() {
  return (
    <main
      class={
        "border-none grid grid-rows-[3fr_1fr] items-center shadow-2xl gap-2 min-w-80 w-[100dvw] max-w-60  h-100 text-black text-shadow-2xs rounded-2xl bg-gray-100"
      }
    >
      <form
        onSubmit={(e) => handleSubmit(e, useLogin)}
        class={"w-full  h-full "}
      >
        <RegistrationNavBar className="mt-2 mx-auto" />

        <ValidateName />

        <ValidateEmail />

        <ValidatePassword />
      </form>
      <footer class="flex flex-col justify-center items-center self-end gap-1 text-[0.85rem] w-full text-black font-light">
        <a href="a" class="grid">
          Do you already have an account?
        </a>
        <a href="a" class={"grid"}>
          Do you forgot your password?
        </a>
        <h1 class="text-2xl text-red-600 italic">{error}</h1>
      </footer>
    </main>
  );
}

function ValidateName() {
  return (
    <>
      <label class="peer/name has-checked:grid hidden text-sm  ">
        <h1 class={"text-lg text-center mb-6"}>What's you'r Name?</h1>
        <input
          name={"name"}
          required
          minLength={2}
          pattern={"^[a-zA-Z]{2,}$"}
          class="peer w-4/5 h-10 mx-auto border-neutral-500 border shadow-sm focus:border-0 dark:border-white valid:placeholder:text-emerald-500 valid:text-emerald-600 valid:border-emerald-400 rounded px-3 py-2 transition duration-300 ease focus:outline-2 focus:invalid:text-pink-700 invalid:ouline-pink-700 valid:outline-emerald-500 outline-pink-700"
          type="text"
          placeholder="Name"
          autoComplete={"off"}
          value={user.value.name}
          onInput={(e) => {
            user.value.name = e.currentTarget.value;
            const regex = /^[a-zA-Z]{2,}$/;
            isValidInput(user.value.name, regex, isNameValid);
            pathNavBarIndicator(
              isNameValid,
              isEmailValid,
              isPasswordValid,
              currentStep
            );
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
            }
          }}
        />

        <p class="mx-auto peer-valid:visible invisible mt-2 text-xs text-green-500">
          Great! Your name is valid.
        </p>

        <input
          type="radio"
          id={"Name"}
          name={"visualiza"}
          checked
          onInput={() => {
            currentStep.value = 1;
            validIndicatorSet(
              isNameValid,
              isEmailValid,
              isPasswordValid,
              currentStep
            );
          }}
          class="hidden"
        />
      </label>

      <div
        id={"Name-step-buttons"}
        class={"peer-has-checked/name:grid hidden place-self-center "}
      >
        <label class={"select-none cursor-pointer w-18 h-10"} for="Email">
          <button
            type={"button"}
            class="pointer-events-none w-full h-full text-shadow-lg border-b-[2px] text-neutral-200 font-medium border-emerald-700 bg-emerald-500 rounded hover:cursor-pointer select-none hover:shadow-lg hover:bg-emerald-700 active:bg-emerald-900 active:shadow-none transition duration-300  "
          >
            Next &#8594;
          </button>
        </label>
      </div>
    </>
  );
}

function ValidateEmail() {
  return (
    <>
      <label class="peer/email has-checked:grid hidden text-sm ">
        <p class={"text-lg text-center mb-6"}>What's you'r Email</p>
        <input
          name={"email"}
          required
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          minLength={2}
          class="peer w-4/5 h-10 mx-auto border-neutral-500 border shadow-sm focus:border-0 dark:border-white valid:placeholder:text-emerald-500 valid:text-emerald-600 valid:border-emerald-400 px-3 py-2 rounded transition duration-300 ease focus:outline-2 focus:invalid:text-pink-700 invalid:ouline-pink-700 valid:outline-emerald-500 outline-pink-700"
          type="email"
          value={user.value.email}
          placeholder="Email"
          onInput={(e) => {
            user.value.email = e.currentTarget.value;
            const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            isValidInput(user.value.email, regex, isEmailValid);
            pathNavBarIndicator(
              isNameValid,
              isEmailValid,
              isPasswordValid,
              currentStep
            );
          }}
        />

        <p class=" mx-auto peer-valid:block hidden mt-2 text-xs text-green-500">
          Great! Your Email is valid.
        </p>
        <p class="mx-auto peer-invalid:block hidden mt-2 text-xs dark:text-white">
          Ingresa un correo valido
        </p>
        <input
          type="radio"
          id={"Email"}
          name={"visualiza"}
          class="hidden"
          onInput={() => {
            currentStep.value = 2;
            validIndicatorSet(
              isNameValid,
              isEmailValid,
              isPasswordValid,
              currentStep
            );
          }}
          disabled={!isNameValid.value}
        />
      </label>

      <div
        id={"email-step-buttons"}
        class={"peer-has-checked/email:grid hidden place-self-center "}
      >
        <label class={"select-none cursor-pointer w-18 h-10"} for="Password">
          <button class="pointer-events-none w-full h-full text-shadow-lg border-b-[2px] text-neutral-200 font-medium border-emerald-700 bg-emerald-500 rounded hover:cursor-pointer select-none hover:shadow-lg hover:bg-emerald-700 active:bg-emerald-900 active:shadow-none transition duration-300  ">
            Next &#8594;
          </button>
        </label>
      </div>
    </>
  );
}

function ValidatePassword() {
  return (
    <>
      <label class="group/password has-checked:grid hidden text-sm ">
        <p class={"text-lg text-center mb-6"}>Create you'r Password</p>
        <input
          name={"password"}
          required
          pattern={"(?=.*[^a-zA-Z0-9])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"}
          class="peer w-4/5 h-10 mx-auto border-neutral-500 border shadow-sm focus:border-0 dark:border-white valid:placeholder:text-emerald-500 valid:text-emerald-600 valid:border-emerald-400 rounded px-3 py-2 transition duration-300 ease focus:outline-2 focus:invalid:text-pink-700 invalid:ouline-pink-700 valid:outline-emerald-500 outline-pink-700"
          type="password"
          autoComplete="off"
          placeholder="Password"
          value={user.value.password}
          onInput={(e) => {
            user.value.password = e.currentTarget.value;
            const regex =
              /^(?=.*[^a-zA-Z0-9])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            isValidInput(user.value.password, regex, isPasswordValid);
            isAllFineSet();
            pathNavBarIndicator(
              isNameValid,
              isEmailValid,
              isPasswordValid,
              currentStep
            );
          }}
        />
        <p class="peer-valid:visible invisible mx-auto mt-2 text-xs text-green-500">
          Great! Your password is valid.
        </p>
        <p></p>

        <input
          type="radio"
          id={"Password"}
          name={"visualiza"}
          class="hidden"
          onInput={() => {
            currentStep.value = 3;
            console.log(currentStep.value);
            validIndicatorSet(
              isNameValid,
              isEmailValid,
              isPasswordValid,
              currentStep
            );
          }}
          disabled={!(isEmailValid.value && isNameValid.value)}
        />

        <div
          id={"password-step-buttons"}
          class={"group-has-checked/password:grid hidden place-self-center "}
        >
          <label class={"select-none cursor-pointer w-18 h-10"}>
            <button class="pointer-events-none w-full h-full text-shadow-lg border-b-[2px] text-neutral-200 font-medium border-emerald-700 bg-emerald-500 rounded hover:cursor-pointer select-none hover:shadow-lg hover:bg-emerald-700 active:bg-emerald-900 active:shadow-none transition duration-300  ">
              Join
            </button>
          </label>
        </div>
      </label>
    </>
  );
}
