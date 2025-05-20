import {ChevronIcon} from "../../icons/ChevronIcon";
import {GitHubIcon} from "../../icons/GithubIcon";
import {ImageDenoWithPalmIcon} from "../../icons/ImageDenoWithPalm";

export function MainHeaderSection() {
  return (
    <>
      <div class="w-full h-fit grid grid-rows-2 gap-2 items-center sm:grid-cols-[1fr_1fr] sm:grid-rows-1 px-10 ">
        <section class=" flex flex-col items-center justify-center gap-5 py-25 px-10 sm:py-50 text-center">
          <h1 class="text-[clamp(2rem,5vw,3rem)] w-full font-bold ">
            Ready to get started with Deno?
          </h1>

          <div class="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="/install/"
              class={
                "flex  items-center h-14  gap-2  font-medium  bg-theme-mint hover:border-black border-2 w-fit transition duration-300 ease-in-out hover: border-theme-mint  rounded-full px-5 py-2"
              }
            >
              <span>Documentation</span>
              <ChevronIcon class="size-6 -rotate-90" />
            </a>
            <a
              href="/docs/"
              class={
                "flex items-center h-14  gap-2  font-medium bg-neutral-900 hover:border-black border-2 w-fit transition duration-300 ease-in-out hover: border-neutral-900  rounded-full px-5 py-2"
              }
            >
              <GitHubIcon class="text-white" />
              <span class={"text-white"}>Github</span>
              <ChevronIcon class="size-6 -rotate-90 text-white" />
            </a>
          </div>
        </section>
        <div class={"*:size-full sm:w-full sm:h-fit"}>
          <ImageDenoWithPalmIcon />
        </div>
      </div>
    </>
  );
}
