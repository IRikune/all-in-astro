import { ChevronIcon } from '../../icons/ChevronIcon';

interface SectionN9Props {
	className?: string;
}
export function CallToActionSection(props: SectionN9Props) {
	return (
		<section
			class={`${props.className} flex flex-col items-center justify-center gap-5 py-25 sm:py-50 px-10 sm:px-20 lg:px-30 text-center`}
		>
			<h1 class="text-[clamp(2.5rem,5vw,4rem)] font-bold w-full ">
				Ready to get started with Deno?
			</h1>

			<div class="flex flex-col items-center gap-4 sm:flex-row">
				<a
					href="/install/"
					class={
						'flex  items-center h-14  gap-2  font-medium  bg-theme-mint hover:border-black border-2 w-fit transition duration-300 ease-in-out hover: border-theme-mint  rounded-full px-5 py-2'
					}
				>
					<span>Install Deno</span>
					<ChevronIcon class="size-6 -rotate-90" />
				</a>
				<a
					href="/docs/"
					class={
						'flex items-center h-14  gap-2  font-medium bg-neutral-900 hover:border-black border-2 w-fit transition duration-300 ease-in-out hover: border-neutral-900  rounded-full px-5 py-2'
					}
				>
					<span class={'text-white'}>Read the docs</span>
					<ChevronIcon class="size-6 -rotate-90 text-white" />
				</a>
			</div>
		</section>
	);
}
