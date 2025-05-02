import { Step, Steps } from "./Registration";
import { authInfo } from "../../../stores/mod";
import { AuthStatus, NameStatus } from "./RoadRegistration";
import { signal } from "@preact/signals";

const userName = signal<string>("");
export function StepName() {
	return (
		<>
			<div class="w-full flex flex-row relative items-center justify-center">
				<label class="flex w-full items-center gap-7 cursor-pointer">
					<span class="select-none">Name:</span>

					<input
						placeholder="Introduce tu nombre..."
						class="block w-full h-10 rounded-md px-2 placeholder-gray-400 select-none user-invalid:outline-red-500 valid:text-shadow outline-none bg-blue-100"
						type="text"
						name="name"
						required={true}
						pattern="[A-Za-z]{2+}"
						onInput={(e) => {
							userName.value = e.currentTarget.value;
						}}
					/>
				</label>
				{NameStatus.value === AuthStatus.Wrong ? (
					<span class={"text-red-600"}>invalid name</span>
				) : (
					""
				)}
			</div>
			<button
				type="button"
				onClick={() => {
					if (!userName.value) {
						NameStatus.value = AuthStatus.Wrong;
						return;
					}
					NameStatus.value = AuthStatus.Cheked;
					authInfo.value.name = userName.value;
					Step.value = Steps.email;
				}}
				class="inset-shadow w-1/4 disabled:bg-blue-100 border-b-green-900 rounded hover:cursor-pointer bg-green-300  enabled:hover:shadow-gray-300 enabled:hover:scale-106 active:bg-green-900 active:shadow-none"
			>
				Next
			</button>
		</>
	);
}
