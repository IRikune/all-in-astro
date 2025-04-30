import { signal } from "@preact/signals";
import { CheckIcon } from "../icons/CheckIcon";
import { Step, Steps } from "./Registration";
interface Props {
    className?: string;
}
export const NameRegistred = signal(false);
export const EmailRegistred = signal(false);
export const PasswordRegistred = signal(false);
export const AvatarRegistred = signal(false);
export function RoadRegistration({ className }: Props) {
    return (
        <>
            <div class="flex flex-row justify-between items-center ">
                <span id="Name">Name</span>

                <button
                    id={"Name"}
                    type="button"
                    onClick={() => {
                        NameRegistred.value = false;
                        Step.value = Steps.name;
                    }}
                    className={`${className} ${
                        NameRegistred.value ? "bg-emerald-600" : "bg-gray-400"
                    } `}
                >
                    <CheckIcon
                        class={` ${
                            NameRegistred.value ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </button>
                <div
                    class={`w-50 h-1 ${
                        NameRegistred.value ? "bg-emerald-600" : "bg-gray-400"
                    }`}
                />
                <button
                    id={"Email"}
                    type="button"
                    onClick={() => {
                        EmailRegistred.value = false;
                        Step.value = Steps.email;
                    }}
                    className={`${className} ${
                        EmailRegistred.value ? "bg-emerald-600" : "bg-gray-400"
                    }`}
                >
                    <CheckIcon
                        class={` ${
                            EmailRegistred.value ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </button>
                <div
                    class={`w-50 h-1 ${
                        EmailRegistred.value ? "bg-emerald-600" : "bg-gray-400"
                    }`}
                />
                <button
                    id={"Password"}
                    type="button"
                    onClick={() => {
                        PasswordRegistred.value = false;
                        Step.value = Steps.password;
                    }}
                    className={`${className} ${
                        PasswordRegistred.value
                            ? "bg-emerald-600"
                            : "bg-gray-400"
                    }`}
                >
                    <CheckIcon
                        class={` ${
                            PasswordRegistred.value
                                ? "opacity-100"
                                : "opacity-0"
                        }`}
                    />
                </button>
                <div
                    class={`w-50 h-1 ${
                        PasswordRegistred.value
                            ? "bg-emerald-600"
                            : "bg-gray-400"
                    }`}
                />
                <button
                    id={"Avatar"}
                    type="button"
                    onClick={() => {
                        AvatarRegistred.value = false;
                        Step.value = Steps.avatar;
                    }}
                    className={`${className} ${
                        AvatarRegistred.value ? "bg-emerald-600" : "bg-gray-400"
                    }`}
                >
                    <CheckIcon
                        class={`w-50 h-1 ${
                            AvatarRegistred.value
                                ? "opacity-100 bg-emerald-600"
                                : "bg-gray-400 opacity-0"
                        }`}
                    />
                </button>
            </div>
        </>
    );
}
