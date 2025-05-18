import {DenoIcon} from "./icons/DenoIcon";
import {DiscordIcon} from "./icons/DiscordIcon";
import {GitHubIcon} from "./icons/GithubIcon";
import {TwitterIcon} from "./icons/Twitter";
import {YoutubeIcon} from "./icons/YoutubeIcon";

interface LandingFooterProps {
  classFooter?: string;
}

export function LandingFooter(props: LandingFooterProps) {
  return (
    <footer
      class={`bg-neutral-950 ${props.classFooter} w-full sm:h-fit h-full  grid sm:grid-rows-[4fr_1fr] text-white py-8 px-5 sm:px-14`}
    >
      <section
        class={
          "grid grid-cols-1 sm:grid-cols-[1fr_3fr_1fr] grid-rows-[1fr_9fr] sm:grid-rows-1 items-center justify-start  h-full"
        }
      >
        <section id={"Logo-section"} class={"w-10 h-10 self-start "}>
          <DenoIcon class="w-30 h-10" />
        </section>
        <main
          id={"footer-Links"}
          class="grid  sm:grid-cols-4 grid-rows-4 sm:grid-rows-1 text-[0.8rem] self-start gap-4"
        >
          <section id={"Get-started"}>
            <title class={"font-semibold grid  text-sm text-emerald-300"}>
              Get started
            </title>
            <a href="a" class={"flex my-3"}>
              Download App
            </a>
            <a href="a" class={"flex my-3"}>
              Products
            </a>
            <a href="a" class={"flex my-3"}>
              Pricing
            </a>
            <a href="a" class={"flex my-3"}>
              Acount
            </a>
          </section>
          <section id={"Comunity"}>
            <title class={"font-semibold grid  text-sm text-emerald-300"}>
              Comunity
            </title>
            <a href="a" class={"flex my-3"}>
              Forum
            </a>
            <a href="a" class={"flex my-3"}>
              Discord
            </a>
            <a href="a" class={"flex my-3"}>
              Join the Comunity
            </a>
          </section>
          <section id={"Learn"}>
            <title class={"font-semibold grid  text-sm text-emerald-300"}>
              Learn
            </title>
            <a href="a" class={"flex my-3"}>
              About Us
            </a>
            <a href="a" class={"flex my-3"}>
              Blog
            </a>
            <a href="a" class={"flex my-3"}>
              News
            </a>
            <a href="a" class={"flex my-3"}>
              RoadMap
            </a>
          </section>
          <section id={"Resources"}>
            <title class={"font-semibold grid  text-sm text-emerald-300"}>
              Resources
            </title>
            <a href="a" class={"flex my-3"}>
              System status
            </a>
            <a href="a" class={"flex my-3"}>
              Terms of Services
            </a>
            <a href="a" class={"flex my-3"}>
              Privacy Policy
            </a>
            <a href="a" class={"flex my-3"}>
              Security
            </a>
            <a href="a" class={"flex my-3"}>
              License overview
            </a>
          </section>
        </main>
      </section>
      <hr class={"w-full mx-auto border-gray-700 my-7"} />
      <section
        id={"socialmedias"}
        class={
          "grid sm:grid-cols-3 sm:grid-rows-1 grid-rows-3  items-center gap-4 h-full w-full "
        }
      >
        <div
          id={"socialmedias-icons"}
          class={
            "w-full h-fit flex sm:justify-start justify-center *:cursor-pointer"
          }
        >
          <GitHubIcon class="size-7 mx-2" />
          <DiscordIcon class="size-7 mx-2" />
          <TwitterIcon class="size-7 mx-2" />
          <YoutubeIcon class="size-7 mx-2" />
        </div>
        <span class={"text-center text-xs"}>Copyright © 2025 Detask</span>
        <div class={"flex text-end justify-center sm:justify-end"}>
          <a
            href="/algo_aaqui/"
            class={
              "flex items-center justify-center gap-2 bg-slate-800 hover:bg-gray-700 h-10 w-60 px-4 py-2 rounded-lg "
            }
          >
            <div class={"size-3 rounded-full bg-emerald-600"} />
            <h1 class={"text-center font-bold"}>All system operations</h1>
          </a>
        </div>
      </section>
    </footer>
  );
}
