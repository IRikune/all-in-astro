import {useEffect, useState} from "preact/hooks";
import {NeckAndHeadOfDenoIcon} from "../../icons/NeckAndHeadOfDeno";
import {signal, useSignal} from "@preact/signals";

const list = [
  {
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."',
    name: "John Doe",
  },
  {
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."',
    name: "Doe",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .",
    name: "John",
  },
];
export function SectionN8() {
  return (
    <section class="relative py-16 w-full px-10 sm:px-20 lg:px-40 h-full grid">
      <div class={"overflow-hidden h-fit "}>
        <div
          key="title"
          class={"h-fit px-2 py-1 rounded bg-[rgb(112,255,175)] w-fit mb-10"}
        >
          <h1>Our vibrant community</h1>
        </div>
        <ScrollToRight list={list} class="max-h-100" />
      </div>
      <NeckAndHeadOfDenoIcon class=" absolute size-40 place-self-end pl-12" />
    </section>
  );
}
export const length = list?.length;

interface ComentOfUser {
  description: string;
  name: string;
}
interface ScrollToLeftProps {
  class?: string;
  list?: ComentOfUser[];
}

function ScrollToLeft({class: className, list}: ScrollToLeftProps) {
  const length = list?.length;
  const transition = signal("transform: translateX(-0%);");

  return (
    <div
      class={` max-w-none transition-transform duration-700 ease-in-out grid grid-cols-[repeat(var(--lenth),1fr)] gap-4 ${className}`}
      style={`--lenth: ${length}; width: calc(var(--lenth) * 100%); ${transition}`}
    >
      {list?.map((item) => (
        <div key={item.name} class=" gap-2 ">
          <p
            class={
              "max-h-45 md:max-h-none overflow-scroll md:overflow-visible text-3xl sm:text-4xl md:text-5xl font-bold"
            }
          >
            {item.description}
          </p>
          <h1 class={" text-gray-500 mt-8"}>{item.name}</h1>
        </div>
      ))}
    </div>
  );
}
function ScrollToRight({class: className, list}: ScrollToLeftProps) {
  return (
    <div class={`h-80 relative grid items-center gap-4 md:h-130 ${className}`}>
      {list?.map((item, index) => (
        <div
          key={item.name}
          class="bg-white gap-2 absolute left-[100dvw] w-full h-full  animation-scroll-infinite-for-layaout"
          style={`--position: ${index}; z-index: --position;`}
        >
          <p
            class={
              "max-h-45 md:max-h-none overflow-scroll md:overflow-visible text-3xl sm:text-4xl md:text-5xl  font-bold"
            }
          >
            {item.description}
          </p>
          <h1 class={" text-gray-500 mt-8"}>{item.name}</h1>
        </div>
      ))}
    </div>
  );
}
