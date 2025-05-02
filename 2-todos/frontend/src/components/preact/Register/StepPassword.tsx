import { authInfo } from "../../../stores/mod";
import { Step } from "./Registration";
import { Steps } from "./Registration";
import { AuthStatus, PasswordStatus } from "./RoadRegistration";
import { computed, signal } from "@preact/signals";

const userPassword = signal<string>("");
const containsLength = computed(() => {
	return userPassword.value.match(/^.{8,}$/);
});

const containsNumber = computed(() => {
	return userPassword.value.match(/\d/);
});

const containsLowercase = computed(() => {
	return userPassword.value.match(/[a-z]/);
});

const containsUppercase = computed(() => {
	return userPassword.value.match(/[A-Z]/);
});

const containsSpecialChar = computed(() => {
	return userPassword.value.match(/[!@#$%^&*(),.?":{}|<>]/);
});

const validPassword = computed(() => {
	return (
		containsLength.value &&
		containsNumber.value &&
		containsLowercase.value &&
		containsUppercase.value &&
		containsSpecialChar.value
	);
});

export function StepPassword() {
	return (
		<>
			<div class="w-full flex flex-row relative items-center justify-center">
				<label class={"flex w-full items-center gap-7 cursor-pointer"}>
					<span class={"select-none"}>Password</span>

					<input
						placeholder="Introduce tu contraseña ale..."
						class="block w-full h-10 rounded-md px-2 placeholder-gray-400 select-none user-invalid:outline-red-500 valid:text-shadow outline-none bg-blue-100"
						type="password"
						name="password"
						required
						value={userPassword.value}
						onInput={(e) => {
							userPassword.value = e.currentTarget.value;
						}}
					/>
				</label>
			</div>

			<button
				type="submit"
				disabled={!validPassword.value}
				onClick={() => {
					if (!userPassword.value) {
						PasswordStatus.value = AuthStatus.Wrong;
						return;
					}
					PasswordStatus.value = AuthStatus.Cheked;
					authInfo.value.password = userPassword.value;
					Step.value = Steps.avatar;
				}}
				class="inset-shadow w-1/4 disabled:bg-blue-100 border-b-green-900 rounded hover:cursor-pointer bg-green-300  enabled:hover:shadow-gray-300 enabled:hover:scale-106 active:bg-green-900 active:shadow-none"
			>
				Next
			</button>
			<section>
				<ul>
					<li>
						<span
							class={`${containsLength.value ? "text-emerald-500" : "text-theme-red-100"}`}
						>
							The password must be at least 8 characters long.
						</span>
					</li>
					<li>
						<span
							class={`${containsNumber.value ? "text-emerald-500" : "text-theme-red-100"}`}
						>
							The password must contain at least one number.
						</span>
					</li>
					<li>
						<span
							class={`${containsLowercase.value ? "text-emerald-500" : "text-theme-red-100"}`}
						>
							The password must contain at least one lowercase letter.
						</span>
					</li>
					<li>
						<span
							class={`${containsUppercase.value ? "text-emerald-500" : "text-theme-red-100"}`}
						>
							The password must contain at least one uppercase letter.
						</span>
					</li>

					<li>
						<span
							class={`${containsSpecialChar.value ? "text-emerald-500" : "text-theme-red-100"}`}
						>
							The password must contain at least one special character.
						</span>
					</li>
				</ul>
			</section>
		</>
	);
}
