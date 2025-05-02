import { Step, Steps } from "./Registration";
import { authInfo } from "../../../stores/mod";
import { AuthStatus, EmailStatus } from "./RoadRegistration";
import { signal } from "@preact/signals";

const userEmail = signal<string>("");

export function StepEmail() {
	return (
		<>
			<div class={"w-full flex flex-row relative items-center justify-center"}>
				<label class={"flex w-full items-center gap-7 cursor-pointer"}>
					<span class={"select-none"}>Email:</span>
					<input
						placeholder={"Introduce tu email..."}
						class="block w-full h-10 rounded-md px-2 placeholder-gray-400 select-none user-invalid:outline-red-500 valid:text-shadow outline-none bg-blue-100"
						type="email"
						name="email"
						required={true}
						pattern=".+@gmail\.com"
						value={userEmail.value}
						onInput={(e) => {
							userEmail.value = e.currentTarget.value;
						}}
					/>
				</label>
				{EmailStatus.value ? (
					<span class={"text-red-600"}>invalid email</span>
				) : (
					""
				)}
			</div>
			<button
				type="submit"
				onClick={() => {
					if (!userEmail.value.match(/.+@gmail\.com/)) {
						EmailStatus.value = AuthStatus.Wrong;
						return;
					}
					EmailStatus.value = AuthStatus.Cheked;
					authInfo.value.email = userEmail.value;
					Step.value = Steps.password;
				}}
				class="inset-shadow w-1/4 disabled:bg-blue-100 border-b-green-900 rounded hover:cursor-pointer bg-green-300  enabled:hover:shadow-gray-300 enabled:hover:scale-106 active:bg-green-900 active:shadow-none"
			>
				Next
			</button>
		</>
	);
}
