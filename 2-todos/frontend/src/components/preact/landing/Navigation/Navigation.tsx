import { CrossIcon } from '../../icons/CrossIcon';
import { HamburgerMenuIcon } from '../../icons/HamburgerMenuIcon';
import { ShowModal } from '../../ShowModal';
import { NavigationButtons } from './NavigationButtons';
import { NavigationButtonsMobile } from './NavigationButtonsMobile';

export function Navigation() {
	return (
		<nav class=" flex  w-full flex-col lg:flex-row   shadow-sm bg-white/92 backdrop-blur-xs fixed top-0 z-1">
			<div
				class={
					'peer flex lg:flex-row gap-3 px-8 h-20 py-5 w-full justify-between '
				}
			>
				<a href="/" class="block size-16 h-16 overflow-hidden -mt-7 mr-20">
					<img src="/images/denosaurLogo.png" alt="Deno logo" class="" />
				</a>
				<div class="hidden lg:flex justify-between w-full gap-3 ">
					<NavigationButtons />
					<input
						type="text"
						placeholder="Search..."
						pattern="[a-zA-Z0-9]"
						class="hidden h-8 overflow-hidden placeholder:bg-gray-100  placeholder:py-3 placeholder:px-3 rounded lg:block"
					/>
				</div>

				<ShowModal class=" group lg:hidden self-center" for="hamburger-menu">
					<HamburgerMenuIcon class="size-6 group-has-checked:hidden " />
					<CrossIcon class="size-6 hidden group-has-checked:block " />
					<input id="hamburger-menu" type="checkbox" class="hidden" />
				</ShowModal>
			</div>
			<NavigationButtonsMobile />
		</nav>
	);
}
