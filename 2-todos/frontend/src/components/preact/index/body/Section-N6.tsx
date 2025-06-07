import {CheckIcon} from "../../icons/CheckIcon";
import {ChevronIcon} from "../../icons/ChevronIcon";
import {Icon1} from "../../icons/sectionN6/Icon-1";
import {Icon2} from "../../icons/sectionN6/Icon-2";

export function SectionN6() {
  return (
    <section class="gap-40 relative py-24 w-full px-7 md:py-36 lg:px-25  h-full grid bg-[#0B0D11]">
      <header class={"grid px-5"}>
        <h4
          class={
            "text-center text-white text-[clamp(1.7rem,4vw,2.7rem)] font-bold mb-3 "
          }
        >
          Go further with Deno cloud products
        </h4>
        <p
          class={
            "text-neutral-400 text-center text-balance text-xl max-w-3xl place-self-center text-[clamp(1.1rem,2vw,1.2rem)]"
          }
        >
          Products built on Deno to help you deploy TypeScript and JavaScript
          easily and securely at any scale.
        </p>
      </header>
      <main
        class={
          "grid  md:grid-cols-2 md:grid-rows-1 grid-rows-2 md:gap-10 gap-30  lg:gap-32"
        }
      >
        <DenoDeploy />
        <DenoSubhosting />
      </main>
    </section>
  );
}

function DenoDeploy() {
  return (
    <div
      class={"w-full border p-px    rounded-xl bg-double-radial-gradient p"}
      style="--from: #01c2ff; --to: #0c212a;"
    >
      <div
        class={
          "border border-neutral-600/10 size-full bg-[#0B0D11] p-7 relative rounded-xl"
        }
      >
        <div>
          <Icon1 class="size-40 bg-[#0B0D11] absolute -top-20" />
          <h4
            class={"text-[clamp(2rem,2vw,2.5rem)] text-white mt-15 font-bold"}
          >
            Deno Deploy
          </h4>
          <p class={"text-neutral-400 text-balance text "}>
            For developers looking for the simplest way to host web apps and
            APIs
          </p>
          <ul class={"my-4 grid gap-4"}>
            <ItemListDenoDeploy title="Fully managed serverless solution" />
            <ItemListDenoDeploy title="Globally distributed" />
            <ItemListDenoDeploy title="Built-in key/value database, queues, cron, and more" />
            <ItemListDenoDeploy title="Integrated directly with GitHub" />
          </ul>
        </div>
        <div class={"flex lg:flex-row flex-col gap-4 mt-10 "}>
          <a
            href="/install/"
            class={
              "flex  items-center h-14  gap-2  font-medium  bg-[#01c2ff] hover:border-black border-2 w-fit transition duration-300 ease-in-out hover: border-[#01c2ff]  rounded-full px-5 py-2"
            }
          >
            <span>try deploy</span>
            <ChevronIcon class="size-6 -rotate-90" />
          </a>
          <a
            href="/docs/"
            class={
              "flex items-center h-14  gap-2  font-medium bg-neutral-800 hover:border-black border-2 w-fit transition duration-300 ease-in-out hover: border-neutral-800  rounded-full px-5 py-2"
            }
          >
            <span class={"text-white"}>learn more</span>
            <ChevronIcon class="size-6 -rotate-90 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
interface ItemListDenoDeployProps {
  class?: string;
  title: string;
}
function ItemListDenoDeploy({
  class: className,
  title,
}: ItemListDenoDeployProps) {
  return (
    <li class={`flex items-center gap-4 ${className}`}>
      <div
        class={
          "rounded-full min-w-10 min-h-10 size-10 bg-[#0C212A] flex items-center justify-center"
        }
      >
        <CheckIcon class="size-6 text-[#01c2ff]" />
      </div>
      <span class={"text-white"}>{title}</span>
    </li>
  );
}

//DenoSubhosting
function DenoSubhosting() {
  return (
    <div
      class={"w-full border p-px    rounded-xl bg-double-radial-gradient "}
      style="--from: #FF8A01; --to: #251c11;"
    >
      <div
        class={
          "border border-neutral-600/10 size-full bg-[#0B0D11] p-7 relative rounded-xl"
        }
      >
        <div>
          <Icon2 class="size-40 bg-[#0B0D11] absolute -top-20" />
          <h4
            class={"text-[clamp(2rem,2vw,2.5rem)] text-white mt-15 font-bold"}
          >
            Deno Subhosting
          </h4>
          <p class={"text-neutral-400 text-balance text "}>
            For SaaS companies looking to run user code securely
          </p>
          <ul class={"my-4 grid gap-4"}>
            <ItemListDenoSubhosting title="Secure sandboxed functions" />
            <ItemListDenoSubhosting title="Automatic scaling and provisioning" />
            <ItemListDenoSubhosting title="Globally distributed" />
            <ItemListDenoSubhosting title="Manage via a simple API" />
          </ul>
        </div>
        <div class={"flex lg:flex-row flex-col gap-4 mt-10 "}>
          <a
            href="/install/"
            class={
              "flex  items-center h-14  gap-2  font-medium  bg-[#FF8A01] hover:border-black border-2 w-fit transition duration-300 ease-in-out hover: border-[#FF8A01]  rounded-full px-5 py-2"
            }
          >
            <span>try Subhosting</span>
            <ChevronIcon class="size-6 -rotate-90" />
          </a>
          <a
            href="/docs/"
            class={
              "flex items-center h-14  gap-2  font-medium bg-neutral-800 hover:border-black border-2 w-fit transition duration-300 ease-in-out hover: border-neutral-800  rounded-full px-5 py-2"
            }
          >
            <span class={"text-white"}>learn more</span>
            <ChevronIcon class="size-6 -rotate-90 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
interface ItemListDenoSubhostingProps {
  class?: string;
  title: string;
}
function ItemListDenoSubhosting({
  class: className,
  title,
}: ItemListDenoSubhostingProps) {
  return (
    <li class={`flex items-center gap-4 ${className}`}>
      <div
        class={
          "rounded-full min-w-10 min-h-10 size-10 bg-[#251C11] flex items-center justify-center"
        }
      >
        <CheckIcon class="size-6 text-[#FF8A01]" />
      </div>
      <span class={"text-white"}>{title}</span>
    </li>
  );
}
