import { ChevronIcon } from '../../icons/ChevronIcon';

export function HighPerformanceSection() {
	return (
		<section class="relative py-16 w-full px-10 sm:px-20 lg:px-15 h-[90vh] flex-col lg:flex-row flex gap-2">
			<div class="text-gray-600 size-full flex flex-col gap-4">
				<h1 class="text-black text-[clamp(2rem,4vw,3rem)] font-medium leading-12">
					High-performance networking
				</h1>
				<span class="text-lg">Out of the box support for:</span>
				<ul class="flex flex-col *:list-disc! px-7 gap-1">
					<li>HTTPS (encryption)</li>
					<li>WebSocket</li>
					<li>HTTP2</li>
					<li>Automatic response body compression</li>
				</ul>
				<a
					href="/install/"
					class="flex  items-center h-14  gap-2  font-medium  bg-theme-mint hover:border-black border-2 w-fit transition duration-300 ease-in-out hover: border-theme-mint  rounded-full px-5 py-7 my-5 text-black"
				>
					<span>View documentation</span>
					<ChevronIcon class="size-6 -rotate-90" />
				</a>
			</div>

			<div class="size-full flex flex-col border border-gray-200 rounded-lg shadow">
				<div class="border-b border-gray-200 p-10">
					<h1 class="text-[clamp(1.2rem,4vw,1.5rem)] font-medium -tracking-wide">
						Bigger is better
					</h1>
					<span class="text-neutral-400">Throughput, requests per sec</span>
				</div>
				<div class="flex size-full">
					<div class="flex gap-2 p-5 border-r border-gray-200 w-full justify-center items-end">
						<div class="flex flex-col gap-2 max-w-40 w-full">
							<div class="h-40 w-full bg-theme-mint rounded" />
							<div class="w-full flex justify-between">
								<span class="font-semibold">Deno</span>
								<span class="bg-theme-mint rounded px-2 text-sm flex items-center">
									200,059
								</span>
							</div>
						</div>
					</div>
					<div class="flex flex-col w-full justify-end items-center p-5">
						<div class="flex flex-col gap-2 max-w-40 w-full ">
							<div class="w-full h-20 bg-neutral-800 rounded items-end" />
							<div class="flex justify-between gap-2 items-center">
								<span class="font-medium">Node</span>
								<span class="bg-neutral-800 text-white rounded block px-2 text-sm">
									94,990
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
