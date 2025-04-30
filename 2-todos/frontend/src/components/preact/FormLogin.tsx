import { signal } from '@preact/signals';
import { useLogin, handleSubmit } from '../../hooks/mod';
export const error = signal('');

export function FormLogin() {
	return (
		<main>
			<h1>Login</h1>
			<form onSubmit={(e) => handleSubmit(e, useLogin)}>
				<label for="email">Email:</label>
				<input
					class={
						'peer block w-50 rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm  invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500  valid:border-emerald-400  '
					}
					type="email"
					for="email"
					name="email"
					pattern=".+@gmail\.com"
					required
				/>
				<div class={'invisible peer-invalid:visible'}>
					intronce un correo valido
				</div>
				<label for="password">Password:</label>
				<input
					class="invalid:border-red-500"
					type="password"
					for="password"
					name="password"
					minLength={8}
					required
				/>
				<button class="enviar" type="submit">
					Login
				</button>
			</form>

			<h1 class="text-2xl text-red-600 italic">{error}</h1>
			<div for="status" />
		</main>
	);
}
