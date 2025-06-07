import { LemonFreshIcon } from '../../icons/LemonFreshIcon';

export function NewProductSection() {
	return (
		<section
			class={
				'flex flex-col items-center relative py-24 w-full px-10 sm:px-20 lg:px-40 h-full'
			}
			style="background: linear-gradient(to bottom, #BDDCFB16, #8DECB616, #DBB80016, transparent);"
		>
			<div class="size-32 flex justify-center items-center">
				<LemonFreshIcon class=" size-10  scale-350 " />
			</div>
			<h1 class="text-[clamp(2.5rem,5vw,4rem)] font-bold w-full  text-center">
				The <span class="text-theme-fresh-yellow"> Freshest </span> web
				framework
			</h1>
			<h1 class="text-lg text-gray-500 text-center max-w-prose text-balance">
				<a href="https://fresh.deno.dev" class="underline">
					Fresh
				</a>
				" is a server-rendered web framework for Deno, built with "
				<a href="https://preactjs.com/" class="underline">
					Preact
				</a>
				" for blazing speed and instant productivity."
			</h1>
		</section>
	);
}
