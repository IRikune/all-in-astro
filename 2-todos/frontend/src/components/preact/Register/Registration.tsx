import {StepEmail} from "./StepEmail";
import {StepPassword} from "./StepPassword";
import {StepAvatar} from "./StepAvatar";
import {type Signal, signal} from "@preact/signals";
import {StepName} from "./StepName";
import {DiscordIcon} from "../icons/DiscordIcon";
import {InstagramIcon} from "../icons/InstagramIcon";

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

export const user = signal({name: "", email: "", password: ""});
export const isNameValid = signal(false);
export const isEmailValid = signal(false);
export const isPasswordValid = signal(false);
export function isValidInput(
  userProp: string,
  pattern: RegExp,
  isValid: Signal<boolean>
) {
  isValid.value = pattern.test(userProp);
}

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
    <>
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
          <CurrentStep />
        </div>
      </div>
    </>
  );
}
