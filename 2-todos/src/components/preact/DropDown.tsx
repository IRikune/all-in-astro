import { signal } from "@preact/signals"
import { ProgressCircle } from "./ProgressCircle";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
interface Props {
    class: string;
}

const isOpen = signal(false)

export function DropDown({ class: className }: Props) {
    return (
        <>
            <button
                type="button"
                onClick={() => { isOpen.value = !isOpen.value }}
                class={`peer hover:bg-rose-100 z-1 rounded px-2 p-1 cursor-pointer w-fit relative justify-between transition duration-300  ${className}`}>
                <div class="flex items-center">
                    <ProgressCircle
                        tasks={8}
                        progress={7}
                        class="overflow-hidden items-center"
                    >
                        <img class="w-full rounded-full" src="https://cdn-images.dzcdn.net/images/cover/d7a4f9f1af8736457de34f28d50ef496/500x500-000000-80-0-0.jpg" alt="" />
                    </ProgressCircle>
                    <span class="ml-1">Nander</span>
                </div>
            </button>
            {
                isOpen.value && <Drops />
            }

        </>
    )
}
interface Propss {
    class?: string;
}
function Drops({ class: className }: Propss) {
    return <>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div onClick={() => { isOpen.value = false }} class="fixed w-dvw h-dvh top-0 left-0">
            <div
                onFocus={() => { isOpen.value = false }}
                class={`peer absolute p-0 top-12 z-10 w-92 h-90 bg-white rounded-md shadow border border-neutral-200 *:rounded-none overflow-hidden ${className}`}>
                <Button class="h-9" />
                <hr class="border-neutral-300" />
                <Button class="h-9" />
                <Button class="h-9" />
                <Button class="h-9" />
                <hr class="border-neutral-300" />
                <Button class="h-9" />
                <Button class="h-9" />
                <Button class="h-9" />
                <Button class="h-9" />
                <Button class="h-9" />
                <hr class="border-neutral-300" />
                <Button class="h-[34px]" />
            </div>
        </div>


    </>
}