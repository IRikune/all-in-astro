import {DiscordIcon} from "./icons/DiscordIcon";
import {InstagramIcon} from "./icons/InstagramIcon";
import {Signal, signal} from "@preact/signals";
import {useRegister} from "../../hooks/mod";
import {ChevronIcon} from "./icons/ChevronIcon";

const isAllFine = signal(false);
const user = signal({name: "", email: "", password: ""});
const isNameValid = signal(false);
const isEmailValid = signal(false);
const isPasswordValid = signal(false);

function isValidInput(
  userProp: string,
  pattern: RegExp,
  isValid: Signal<boolean>
) {
  isValid.value = pattern.test(userProp);
}

function isAllFineSet(): void {
  isAllFine.value =
    isNameValid.value && isEmailValid.value && isPasswordValid.value;
}

const handleSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;
  const formData = new FormData(form);
  useRegister(formData);
};

export function Register() {
  return (
    <div
      class="relative flex flex-col w-78 h-138 px-3 dark:text-white bg-white  text-slate-700  lg:py-4  dark:bg-gray-950
        rounded-2xl gap-5 bg-clip-border"
    >
      <header class="w-full h-21 grid items-center">
        <h1 class="text-center text-3xl font-medium bg-clip-text  ">
          Register
        </h1>
      </header>
      <main class={"flex flex-col gap-3 justify-center items-center"}>
        <div class={"flex gap-3 justify-center items-center"}>
          <div class="flex justify-center items-center size-12 border border-slate-100 dark:border-slate-600 rounded">
            <DiscordIcon class="size-8" />
          </div>
          <div
            class="flex justify-center items-center size-12 border 
                    
                    border-slate-100 
                    dark:border-slate-600 rounded"
          >
            <InstagramIcon class="size-8" />
          </div>
          <div
            class="flex justify-center items-center size-12 border 
                    border-slate-100 dark:border-slate-600 rounded"
          >
            <DiscordIcon class="size-8" />
          </div>
        </div>
        <p>or</p>
      </main>
      <hr class="border-slate-200 dark:border-slate-600" />
      <div id="container-form" class={"mt-3"}>
        <form onSubmit={(e) => handleSubmit}>
          <ValidateName />

          <ValidateEmail />

          <ValidatePassword />
        </form>
      </div>
    </div>
  );
}

function ValidateName() {
  return (
    <>
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

      <div
        id={"Name-step-buttons"}
        class={"peer-has-checked/name:flex hidden  justify-end"}
      >
        <label class={"select-none cursor-pointer"} for="Email">
          <p
            class={
              "text-center rounded w-12 h-8 grid items-center  border dark:border-slate-600 border-slate-100  active:bg-slate-500 hover:bg-neutral-100 dark:hover:bg-slate-800 dark:bg-slate-700 mr-1/9"
            }
          >
            Next
          </p>
        </label>
      </div>
    </>
  );
}

function ValidateEmail() {
  return (
    <>
      <label class="peer/email has-checked:block hidden mb-1  text-sm ">
        <p class={"text-lg text-center mb-6"}>Email</p>
        <input
          name={"email"}
          required
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          minLength={2}
          class="peer w-full h-10 border-black border-1 dark:border-white valid:placeholder:text-emerald-500 valid:text-emerald-600  valid:border-emerald-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:invalid:text-pink-700 invalid:focus:border-pink-700 valid:focus:border-emerald-500 "
          type="email"
          value={user.value.email}
          placeholder="Email"
          onInput={(e) => {
            user.value.email = e.currentTarget.value;
            const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            isValidInput(user.value.email, regex, isEmailValid);
          }}
        />
        <p class="peer-valid:block hidden mt-2 text-xs text-green-500">
          Great! Your Email is valid.
        </p>
        <p class="peer-invalid:block hidden mt-2 text-xs text-white">
          Ingresa un correo valido
        </p>
        <input
          type="radio"
          id={"Email"}
          name={"visualiza"}
          class="hidden"
          disabled={!isNameValid.value}
        />
      </label>

      <div
        id={"email-step-buttons"}
        class={"peer-has-checked/email:flex hidden  justify-between "}
      >
        <label class={"select-none cursor-pointer"} for="Name">
          <ChevronIcon
            class={
              "absolute w-6 left-3 top-3 dark:text-white text-center rounded  h-fit grid items-center    "
            }
          />
        </label>
        <label class={"select-none cursor-pointer"} for="Password">
          <p
            class={
              "text-center rounded w-12 h-8 grid items-center  border dark:border-slate-600 border-slate-100  active:bg-slate-500 hover:bg-neutral-100 dark:hover:bg-slate-800 dark:bg-slate-700 mr-1/9"
            }
          >
            Next
          </p>
        </label>
      </div>
    </>
  );
}

function ValidatePassword() {
  return (
    <>
      <label class="peer/password has-checked:block hidden mb-1  text-sm ">
        <p class={"text-lg text-center mb-6"}>Password</p>
        <input
          name={"password"}
          required
          pattern={"(?=.*[^a-zA-Z0-9])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"}
          class="peer w-full h-10 border-black border-1 dark:border-white valid:placeholder:text-emerald-500 valid:text-emerald-600  valid:border-emerald-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:invalid:text-pink-700 invalid:focus:border-pink-700 valid:focus:border-emerald-500 focus:shadow-md"
          type="text"
          placeholder="Password"
          value={user.value.password}
          onInput={(e) => {
            user.value.password = e.currentTarget.value;
            const regex =
              /^(?=.*[^a-zA-Z0-9])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            isValidInput(user.value.password, regex, isPasswordValid);
            isAllFineSet();
          }}
        />
        <p class="peer-valid:visible invisible mt-2 text-xs text-green-500">
          Great! Your password is valid.
        </p>
        <p></p>
        <input
          type="radio"
          id={"Password"}
          name={"visualiza"}
          class="hidden"
          disabled={!isEmailValid.value}
        />
      </label>

      <div
        id={"password-step-buttons"}
        class={"peer-has-checked/password:flex hidden  justify-between "}
      >
        <label class={"select-none cursor-pointer"} for="Email">
          <ChevronIcon
            class={
              "absolute w-6 left-3 top-3 dark:text-white text-center rounded  h-fit grid items-center    "
            }
          />
        </label>
        <button
          class={
            "text-center  bg-emerald-600 rounded w-12 h-8  text-white hover:motion-preset-pulse-sm hover:cursor-pointer dark:hover:bg-emerald-300 hover:scale-110 transition duration-500 mr-1/9"
          }
          type={"submit"}
        >
          Join
        </button>
      </div>
    </>
  );
}
