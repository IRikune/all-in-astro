import type { JSX } from 'preact/jsx-runtime';
interface MacWindowProps {
	children?: JSX.Element;
}
export function MacWindow({ children }: MacWindowProps) {
	return (
		<div class="flex flex-col border-1 border-neutral-200 rounded-2xl h-100 mt-50	ml-50 w-fit min-w-lg shadow">
			<header class="flex items-center border-b-1 border-neutral-200   h-13">
				<div
					class={
						'flex items-center border-r border-neutral-200 px-4 gap-2 h-full w-20 mr-4'
					}
				>
					<div class="size-2	 rounded-full full bg-red-500/80" />
					<div class="size-2	 rounded-full full bg-yellow-300" />
					<div class="size-2	 rounded-full full bg-green-400" />
				</div>
				<h1>/islands/Counter.tsx</h1>
			</header>
			<main>{children}</main>
		</div>
	);
}
