import {signal} from "@preact/signals";
import {handleSubmit, useLogin} from "../../hooks/mod";
export const error = signal("");

export function FormLogin() {
  return (
    <main
      class={
        "flex flex-col  min-w-100 min-h-100 mx-auto my-auto items-center justify-center text-black text-shadow-2xs rounded-2xl bg-gray-200  "
      }
    >
      <form
        onSubmit={(e) => handleSubmit(e, useLogin)}
        class={
          "w-full  h-full flex flex-col my-[10%] items-center gap-6 justify-center"
        }
      >
        <h1 class={"my-2 text-2xl"}>Wellcome to Esmeralde</h1>

        <div class={"w-[50%] flex flex-row relative items-center "}>
          <label class={" w-fit absolute -left-21 font-light"} for="email">
            Email:
          </label>
          <input
            placeholder={"Introduce tu email..."}
            class={
              "peer block w-full h-10 rounded-md text-[0.8rem] border border-esmerald-800 px-3 py-2 placeholder-gray-400 shadow-sm  invalid:border-red-500  focus:border-0 focus:invalid:border-red-500 dark:focus:shadow-white/20 focus:shadow-lg  "
            }
            type="email"
            name="email"
            id={"email"}
            pattern=".+@gmail\.com"
            required={error.value !== ""}
          />
        </div>

        <div class={" flex flex-row relative w-[50%] items-center"}>
          <label class={" w-fit absolute -left-21 font-light"} for="password">
            Password:
          </label>

          <input
            placeholder={"Introduce tu contraseña..."}
            class="
							peer block w-full h-10 rounded-md border border-esmerald-800 px-3 py-2 placeholder-gray-400 shadow-sm  invalid:border-red-500 text-[0.8rem] focus:text-white focus:border-0 focus:invalid:border-red-500 focus:shadow-white/20 focus:shadow-lg  valid:border-whitehover:shadow-lg"
            type="password"
            name="password"
            id={"password"}
            minLength={8}
            required={error.value !== ""}
          />
        </div>

        <div class={"flex flex-row justify-center w-[30%] h-10"}>
          <button
            class="w-full text-shadow-lg border-b-[2px] select-none text-white font-medium border-emerald-700 bg-emerald-500 rounded hover:cursor-pointer hover:bg-emerald-700  active:bg-emerald-900  transition duration-300  "
            type="submit"
          >
            Login
          </button>
        </div>
        <footer class="flex flex-col gap-1 items-center w-full text-black font-light">
          <a href="a">¿Olvidaste tu contraseña?</a>
          <a href="a">¿No tienes cuenta?</a>
        </footer>
      </form>

      <h1 class="text-2xl text-red-600 italic">{error}</h1>
    </main>
  );
}
