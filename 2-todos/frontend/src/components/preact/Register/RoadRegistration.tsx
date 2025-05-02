import { signal } from "@preact/signals";
import { AvatarIcon } from "../icons/AvatarIcon";
import { PersonIcon } from "../icons/PersonIcon";
import { MailIcon } from "../icons/MailIcon";
import { LockIcon } from "../icons/LockIcon";
import { Step, Steps } from "./Registration";
interface Props {
	className?: string;
}
export enum AuthStatus {
	UnChecked = 0,
	Cheked = 1,
	Wrong = 2,
}
export const NameStatus = signal(AuthStatus.UnChecked);
export const EmailStatus = signal(AuthStatus.UnChecked);
export const PasswordStatus = signal(AuthStatus.UnChecked);
export const AvatarStatus = signal(AuthStatus.UnChecked);
export function RoadRegistration({ className }: Props) {
	return (
		<>
			<div class="flex flex-row justify-between items-center mb-10 w-80">
				<button
					id="name"
					type="button"
					onClick={() => {
						Step.value = Steps.name;
					}}
					className={`${className} ${
						NameStatus.value === AuthStatus.Cheked
							? "border-theme-sky-100/50 border-2 bg-theme-lime-100"
							: "bg-gray-400"
					} `}
				>
					<PersonIcon class={"w-full h-full"} />
				</button>
				<div
					class={`relative w-1/3 h-[1px] ${
						NameStatus.value === AuthStatus.Cheked
							? "bg-theme-sky-100/50"
							: "bg-gray-400"
					}`}
				/>

				<button
					id="email"
					type="button"
					onClick={() => {
						Step.value = Steps.email;
					}}
					class={` ${className} ${EmailStatus.value === AuthStatus.Cheked ? "border-theme-sky-100/50 border-2 bg-theme-lime-100" : "bg-gray-400"}`}
				>
					<MailIcon class={"w-full h-full"} />
				</button>
				<div
					class={`relative w-1/3 h-[1px] ${
						EmailStatus.value === AuthStatus.Cheked
							? "bg-theme-sky-100/50"
							: "bg-gray-400"
					}`}
				/>

				<button
					id="password"
					type="button"
					onClick={() => {
						Step.value = Steps.password;
					}}
					className={`${className} ${
						PasswordStatus.value === AuthStatus.Cheked
							? "border-theme-sky-100/50 border-2 bg-theme-lime-100"
							: "bg-gray-400"
					}`}
				>
					<LockIcon class={"w-full h-full "} />
				</button>
				<div
					class={`w-1/3 h-[1px] relative ${
						PasswordStatus.value === AuthStatus.Cheked
							? "bg-theme-sky-100/50"
							: "bg-gray-400"
					}`}
				/>

				<button
					id="avatar"
					type="button"
					onClick={() => {
						Step.value = Steps.avatar;
					}}
					className={` ${className} ${
						PasswordStatus.value === AuthStatus.Cheked
							? "border-theme-sky-100/50 border-2 bg-theme-lime-100"
							: "bg-gray-400"
					}`}
				>
					<AvatarIcon class={"w-full h-full"} />
				</button>
			</div>
		</>
	);
}
