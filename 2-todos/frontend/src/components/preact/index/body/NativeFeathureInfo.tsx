import { ChevronIcon } from "../../icons/ChevronIcon";

export function NativeFeathureInfo() {
  return (
    <section
      class={
        " w-dvw h-fit grid grid-cols-1 my-10 gap-10 py-10 sm:grid-cols-[2fr_1.4fr]"
      }
    >
      <div class={" w-4/5 h-4/5 mx-auto my-auto flex flex-col justify-center gap-6"}>
          <span class={" text-gray-900  font-semibold text-[12px] bg-theme-mint p-2 h-6 w-fit flex justify-center items-center ml-[10%]"}>What is Deno?</span>
          <p class={'text-[clamp(1.5rem,4dvw,2.8rem)] font-semibold self-center leading-[1] ml-[10%]'}>Deno is the open-source JavaScript runtime for the modern web.</p>
          <span class={'w-4/5 self-center'}>Built on web standards with zero-config TypeScript, unmatched security, and a complete built-in toolchain.</span>
          <a
          href="/install/"
          class={
            "flex  items-center h-14  gap-2 ml-[10%] font-medium  bg-theme-mint hover:border-black border-2 w-fit transition duration-300 ease-in-out hover: border-theme-mint  rounded-full p-7"
                        }
            >
            <span>Get started</span>
            <ChevronIcon class="size-6 -rotate-90" />
          </a>
      </div>
      <div class={" w-4/5 h-full shadow-2xl"}>
        <div class={'p-10 flex flex-col gap-1 justify-center items-start '}>
          <span class={" text-gray-900 text-[14px] font-medium bg-gray-200 w-fit flex justify-center items-center p-1"}>Rating</span>
          <span class={'text-3xl font-semibold'}>100K+</span>
          <span class={'text-gray-400 flex'}>starts in github</span>
        </div>
          <div class={' p-10 flex flex-col gap-1 justify-center items-start '}>
          <span class={" text-gray-900 text-[14px] font-medium bg-gray-200 w-fit flex justify-center items-center p-1"}>comunity</span>
          <span class={'text-3xl font-semibold'}>400K+</span>
          <span class={'text-gray-400 flex'}>active deno users</span>
        </div>
         <div class={' p-10 flex flex-col gap-1 justify-center items-start '}>
          <span class={" text-gray-900 text-[14px] font-medium bg-gray-200 w-fit flex justify-center items-center p-1"}>ecosistem</span>
          <span class={'text-3xl font-semibold'}>2M+</span>
          <span class={'text-gray-400 flex'}>Community modules</span>
        </div>
      </div>
    </section>
  );
}
