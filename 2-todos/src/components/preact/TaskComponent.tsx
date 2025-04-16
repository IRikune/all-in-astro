import { Priority } from '../../../deno/types/mod';
import { Checker } from './Checker';
import { Icon } from './icons/Icon';

export function TaskComponent() {
	return (
		<button
			class="flex w-full hover:cursor-pointer hover:bg-neutral-100 p-1 rounded transition duration-300"
			type="button"
		>
			<Checker priority={Priority.important} class="h-full mr-3 ml-1 mt-1 " />
			<section class="flex flex-col w-full">
				<section class="flex justify-between w-full">
					<div>
						<h3>Title</h3>
					</div>
					<aside>
						<Icon name="bell" class="w-4" />
					</aside>
				</section>
				<footer class="flex justify-between w-full">
					<section class="flex justify-between">
						<small class="text-theme-red-100 fill-theme-red-100">Feb 2</small>
					</section>
					<aside>
						<small class="">Inbox</small>
					</aside>
				</footer>
			</section>
		</button>
	);
}
