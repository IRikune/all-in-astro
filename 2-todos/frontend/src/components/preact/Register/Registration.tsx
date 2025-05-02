import { StepEmail } from "./StepEmail";
import { StepPassword } from "./StepPassword";
import { StepAvatar } from "./StepAvatar";
import { signal } from "@preact/signals";
import { StepName } from "./StepName";

enum Gender {
	male = "male",
	female = "female",
}
export enum Steps {
	name = "name",
	email = "email",
	password = "password",
	avatar = "avatar",
}
export const Step = signal<Steps>(Steps.name);
export const NameRegistred = signal(false);

export function Registration() {
	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;
		const formData = new FormData(form);
		console.log("formData:", formData);
	};

	const steps = {
		[Steps.name]: StepName,
		[Steps.email]: StepEmail,
		[Steps.password]: StepPassword,
		[Steps.avatar]: StepAvatar,
	};
	const CurrentStep = steps[Step.value];
	return (
		<form
			class={
				"w-100  h-150 flex flex-col my-[10%] items-center gap-6 justify-center"
			}
		>
			<CurrentStep />
		</form>
	);
}
