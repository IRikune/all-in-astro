import type { JSX } from 'preact/jsx-runtime';
import { ChevronDownIcon } from '../../icons/ChevronDownIcon';
import { ShowModal } from '../../ShowModal';

export function NavigationButtonsMobile() {
	return (
		<ul class="hidden peer-has-checked:flex lg:hidden flex-col h-fit w-full">
			<li>
				<ButtonHamburgerDropdown for="product-modal" title="Products">
					<ChevronDownIcon class="size-6" />
				</ButtonHamburgerDropdown>
			</li>
			<ButtonHamburgerMenu href="/" title="Docs" />
			<li>
				<ButtonHamburgerDropdown for="product-modal" title="Modules">
					<ChevronDownIcon class="size-6" />
				</ButtonHamburgerDropdown>
			</li>
			<li>
				<ButtonHamburgerDropdown for="product-modal" title="Community">
					<ChevronDownIcon class="size-6" />
				</ButtonHamburgerDropdown>
			</li>

			<ButtonHamburgerMenu href="/" title="Blog" />

			<li>
				<div class="px-5 py-3 ">
					<input
						type="text"
						placeholder="Search..."
						pattern="[a-zA-Z0-9]"
						class=" h-10   overflow-hidden  placeholder:bg-gray-100  placeholder:py-3 placeholder:px-3 rounded "
					/>
				</div>
			</li>
		</ul>
	);
}

interface ButtonHamburgerMenuProps {
	title: string;
	href: string;
}
function ButtonHamburgerMenu({ title, href }: ButtonHamburgerMenuProps) {
	return (
		<li>
			<a
				href={href}
				class={
					' flex items-center border-b border-neutral-200  px-5 py-3 h-15 w-[100dvw] '
				}
			>
				<h1>{title}</h1>
			</a>
		</li>
	);
}

interface ButtonHamburgerDropdownProps {
	title: string;
	children: JSX.Element;
	for: string;
}
function ButtonHamburgerDropdown({
	title,
	children,
	for: forIt,
}: ButtonHamburgerDropdownProps) {
	return (
		<>
			<ShowModal
				for={forIt}
				classChildren="flex w-full justify-between border-b border-neutral-200 px-5 items-center h-15 py-3"
				class={'  w-[100dvw] '}
			>
				<h1 class={'select-none'}>{title}</h1>
				{/*icon*/}
				{children}
			</ShowModal>
		</>
	);
}
