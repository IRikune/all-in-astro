import {signal} from "@preact/signals";

const isWindows = signal(true);

export function InstallSection() {
  return (
    <section
      class={
        " w-dvw h-fit grid grid-cols-1 gap-10 justify-center items-center"
      }
    >
      <hr />
      <div
        class={
          " w-full h-full flex flex-col justify-between items-center gap-10 py-10"
        }
      >
        <h1 class={" text-gray-900 font-semibold text-[2rem] font-arial"}>
          Install Detask V0.03
        </h1>
        <div class={"p-1 size-fit bg-white rounded-full shadow-2xl"}>
          <div
            id="buttons"
            class="relative w-60 h-14 flex flex-row justify-between items-center  rounded-[2rem]  px-6 overflow-hidden"
          >
            <div
              id="switch"
              class={`h-full rounded-[2rem] bg-black animate translate duration-300 transition-all ease-[var(--motion-spring-bouncy)] motion-ease ${
                isWindows.value == true
                  ? "-translate-x-7 w-[60%]"
                  : "translate-x-20 w-60"
              }`}
            />
            <button
              id={"install-in-windows "}
              class={`absolute left-4 z-10 flex items-center  h-full w-1/2 font-medium text-emerald-400 hover:border-black transition duration-300 ease-in-out   ${
                isWindows.value == true ? "text-emerald-400" : "text-gray-600"
              } hover:cursor-pointer`}
              onClick={() => (isWindows.value = true)}
            >
              Windows
            </button>
            {/* install-in-windows */}
            <button
              id={"install-in-macos-and-linux "}
              class={`absolute right-2 z-10 flex justify-center items-center  h-full w-1/2 font-medium  hover:border-black transition duration-300 ease-in-out   ${
                isWindows.value == false ? "text-emerald-400" : "text-gray-600"
              } hover:cursor-pointer`}
              onClick={() => (isWindows.value = false)}
            >
              MacOS/Linux
            </button>
            {/* install-in-macos-and-linux */}
          </div>
        </div>
        <span id={"install-text"}>rpm https://denosaur/install.Detask</span>
      </div>
      <hr />
    </section>
  );
}
