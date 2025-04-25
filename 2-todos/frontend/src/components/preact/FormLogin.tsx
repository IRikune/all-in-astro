import { signal } from "@preact/signals";
import { handleSubmit, useLogin } from "../../hooks/mod";
export const error = signal("");

export function FormLogin() {
	return (
		<main
			class={"flex flex-col   min-w-100 min-h-100 mx-auto my-auto items-center  text-white text-shadow-2xs rounded-3xl bg-[#073b3a]"}
		>
			<h1 class={"my-2"}>Well come to Esmeralde</h1>

			<form
				onSubmit={(e) => handleSubmit(e, useLogin)}
				class={"w-full  h-full flex flex-col my-[10%] items-center gap-6 "}
			>
				<div
					class={"w-[50%] flex flex-row relative items-center "}
				>
					<span class={" w-fit absolute -left-21"}>Email:</span>
					<input
						placeholder={"Introduce tu email..."}
						class={"peer block w-full h-10 rounded-md border border-esmerald-800 px-3 py-2 placeholder-gray-400 shadow-sm  invalid:border-red-500 focus:text-white focus:border-0 focus:invalid:border-red-500 focus:shadow-white/20 focus:shadow-lg  valid:border-whitehover:shadow-lg"}
						type="email"
						name="email"
						pattern=".+@gmail\.com"
						required={error.value !== ""}
					/>
				</div>

				<div class={" flex flex-row relative w-[50%] items-center"}>
					<span class={" w-fit absolute -left-21"}>Password:</span>

					<input
						placeholder={"Introduce tu contraseña..."}
						class="
							peer block w-full h-10 rounded-md border border-esmerald-800 px-3 py-2 placeholder-gray-400 shadow-sm  invalid:border-red-500 focus:text-white focus:border-0 focus:invalid:border-red-500 focus:shadow-white/20 focus:shadow-lg  valid:border-whitehover:shadow-lg"
						type="password"
						name="password"
						minLength={8}
						required={error.value !== ""}
					/>
				</div>

				<div class={"flex flex-row justify-center w-[30%] h-10"}>
					<button
						class="w-full  border-b-[2px] border-b-green-900 rounded hover:cursor-pointer bg-[#059257] hover:shadow-lg hover:shadow-white/20 active:bg-green-900 active:shadow-none "
						type="submit"
					>
						Login
					</button>
				</div>
				<footer class="flex flex-col items-center gap-1 w-full">
					<a href="" class={"hover:shadow-lg hover:shadow-white/20"}>
						¿Olvidaste tu contraseña?
					</a>
					<a
						href=""
						class={"text-shadow-lg/20 text-white  "}
					>
						¿No tienes cuenta?
					</a>
				</footer>
			</form>

			<h1 class="text-2xl text-red-600 italic">{error}</h1>
		</main>
	);
}
