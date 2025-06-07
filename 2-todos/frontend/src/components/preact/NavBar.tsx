import {LockIcon} from "./icons/LockIcon";
import {UserIcon} from "./icons/UserIcon";
import {currentStep} from "./FormRegister";
import {signal} from "@preact/signals";
import type {Signal} from "@preact/signals";
interface NavBarProps {
  className?: string;
}
const positionCurrentStep: Record<string, string> = {
  1: "translate-x duration-300 transition-transform ease-linear",
  2: "translate-x-25 duration-300 transition-transform ease-linear",
  3: "translate-x-51  duration-300 transition-transform ease-linear ",
};

const validIndicator = signal("bg-red-500");
const pathStepIndicator = signal(
  "-translate-x-65 duration-300 transition-transform ease-linear"
);
// validIndicatorSet
export function validIndicatorSet(
  isNameValid: Signal<boolean>,
  isEmailValid: Signal<boolean>,
  isPasswordValid: Signal<boolean>,
  currentStep: Signal<number>
) {
  if (isPasswordValid.value && currentStep.value === 3) {
    validIndicator.value = "bg-emerald-500";
    return;
  }
  if (isEmailValid.value && currentStep.value === 2) {
    validIndicator.value = "bg-emerald-500";
    return;
  }
  if (isNameValid.value && currentStep.value === 1) {
    validIndicator.value = "bg-emerald-500";
    return;
  }
  validIndicator.value = "bg-red-500";
}

// pathNavBarIndicator
export function pathNavBarIndicator(
  isNameValid: Signal<boolean>,
  isEmailValid: Signal<boolean>,
  isPasswordValid: Signal<boolean>,
  currentStep: Signal<number>
) {
  validIndicatorSet(isNameValid, isEmailValid, isPasswordValid, currentStep);

  if (!isNameValid.value) {
    pathStepIndicator.value =
      "-translate-x-65 duration-300 transition-transform ease-linear";
    return;
  }
  if (!isEmailValid.value) {
    pathStepIndicator.value =
      "-translate-x-46  duration-300 transition-transform  ";
    return;
  }
  if (!isPasswordValid.value) {
    pathStepIndicator.value =
      "-translate-x-20 duration-300 transition-transform ease-linear ";
    return;
  }

  pathStepIndicator.value =
    "-translate-x duration-300 transition-transform ease-linear";
}
export function RegistrationNavBar(props: NavBarProps) {
  return (
    <nav
      class={`${props.className} relative rounded-2xl  w-4/5 h-10 bg-gray-400 text-black text-shadow-2xs mb-2 motion`}
    >
      <div
        id={"float-step-indicator"}
        class={`border-after-and-before left-5 -top-[3px] absolute w-2 h-2  ${
          positionCurrentStep[currentStep.value]
        } rounded-full outline-4 outline-gray-100 z-10 ${validIndicator.value}`}
      />
      <div class={"absolute left-0 rounded-2xl overflow-hidden h-full w-full"}>
        <div
          id={"loader-indicator"}
          class={` bg-emerald-400 rounded-2xl h-full w-full ${pathStepIndicator.value}`}
        />
      </div>

      <label
        for="Name"
        class={
          "absolute left-2 top-0  w-8 h-8 font-light flex items-center justify-center  transition duration-300 hover:cursor-pointer hover:border-b-white/80"
        }
      >
        <button type={"button"} class="pointer-events-none" />
        <UserIcon />
      </label>

      <label
        for="Email"
        class={
          "absolute left-26 top-0 border-b-4 border-transparent w-10 h-10 cursor-pointer flex items-center justify-center font-medium hover:border-b-white/80"
        }
      >
        @
      </label>

      <label
        for="Password"
        class={
          "absolute left-52 top-0 border-b-4 border-transparent cursor-pointer flex items-center justify-center hover:border-b-white/80"
        }
      >
        <button
          type={"button"}
          class="appearance-none pointer-events-none  w-10 h-10"
        >
          <LockIcon />
        </button>
      </label>
    </nav>
  );
}
