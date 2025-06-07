import type { JSX } from 'preact/jsx-runtime';
import { ChevronDownIcon } from '../../icons/ChevronDownIcon';
import { ShowModal } from '../../ShowModal';
import { Modal } from '../../Modal';
import { DiscordIcon } from '../../icons/DiscordIcon';
import { TwitterIcon } from '../../icons/TwitterIcon';
import { GitHubIcon } from '../../icons/GitHubIcon';

export function NavigationButtons() {
	return (
		<ul class="gap-3 hidden lg:flex w-full">
			<li>
				<NavButtonDropdown for="product-modal" title="Products">
					<ChevronDownIcon class="size-6" />
				</NavButtonDropdown>
				<DropdownOfProducts />
			</li>
			<li>
				<NavButton href="/docs/" title="Docs" />
			</li>
			<li>
				<NavButtonDropdown for="modules-modal" title="Modules">
					<ChevronDownIcon class="size-6" />
				</NavButtonDropdown>
				<DropdownOfModules />
			</li>
			<li>
				<NavButtonDropdown for="community-modal" title="Community">
					<ChevronDownIcon class="size-6" />
				</NavButtonDropdown>
				<DropdownOfCommunity />
			</li>
			<li>
				<NavButton href="/blog/" title="Blog" />
			</li>
		</ul>
	);
}
interface NavButtonDropdownProps {
	title: string;
	children: JSX.Element;
	for: string;
}
function NavButtonDropdown({
	title,
	children,
	for: forIt,
}: NavButtonDropdownProps) {
	return (
		<>
			<ShowModal
				for={forIt}
				class={
					'*:flex hover:*:bg-gray-100 *:rounded-[8px] *:px-2 *:py-1 h-10 w-fit'
				}
			>
				<h1 class={'select-none'}>{title}</h1>
				{children}
			</ShowModal>
		</>
	);
}

interface NavButtonProps {
	title: string;
	href: string;
}
function NavButton({ title, href }: NavButtonProps) {
	return (
		<a
			href={href}
			class={
				'flex items-center hover:bg-gray-100 rounded-[8px] px-2 py-1 h-8 w-fit'
			}
		>
			<h1>{title}</h1>
		</a>
	);
}
interface DropdownOfProductsProps {
	className?: string;
}

function DropdownOfProducts({ className }: DropdownOfProductsProps) {
	return (
		<Modal
			id="product-modal"
			class={`sm:absolute ${className}`}
			classBackdrop=""
			animation="fade"
		>
			<div class="flex flex-row bg-slate-100 w-160 rounded overflow-hidden shadow">
				<div class={'border-r-1 border-slate-300/50 w-full'}>
					<div class="pt-3 pl-5">
						<h1 class={'text-[0.7rem]'}>OPEN SOURCE</h1>
					</div>
					<NavButtonProduct
						title="Denosaurs"
						description="Enterprise Edition"
					/>
					<NavButtonProduct
						title="Denosaurs"
						description="Enterprise Edition"
					/>
					<NavButtonProduct
						title="Denosaurs"
						description="Enterprise Edition"
					/>
				</div>
				<div class={'w-full'}>
					<div class="pt-3 pl-5">
						<h1 class="text-[0.7rem]">COMMERCIAL</h1>
					</div>

					<NavButtonProduct
						title="Denosaurs"
						description="Enterprise Edition"
					/>
					<NavButtonProduct
						title="Denosaurs"
						description="Enterprise Edition"
					/>
					<NavButtonProduct
						title="Denosaurs"
						description="Enterprise Edition"
					/>
				</div>
			</div>
		</Modal>
	);
}
interface NavButtonProductProps {
	title: string;
	description?: string;
}
function NavButtonProduct({ title, description }: NavButtonProductProps) {
	return (
		<a
			href="/denosaurs/"
			class="sm:hover:bg-slate-300/50 px-5 py-3 block w-full"
		>
			<h1 class={'font-bold'}>{title}</h1>
			<h1 class="text-gray-500">{description}</h1>
		</a>
	);
}

function DropdownOfModules() {
	return (
		<Modal
			id="modules-modal"
			class="sm:absolute"
			classBackdrop=""
			animation="fade"
		>
			<div class={'bg-gray-100 rounded overflow-hidden'}>
				<a
					href="/std/"
					class="flex items-center hover:bg-gray-200 px-4 py-5 h-8 w-full"
				>
					<h1>Standard Library</h1>
				</a>
				<a
					href="/jsr/"
					class="flex items-center hover:bg-gray-200 px-4 py-5 h-8 w-full"
				>
					<h1>JSR</h1>
				</a>
				<a
					href="/node/"
					class="flex items-center hover:bg-gray-200 px-4 py-5 h-8 w-full"
				>
					<h1>node</h1>
				</a>
			</div>
		</Modal>
	);
}

function DropdownOfCommunity() {
	return (
		<Modal
			id="community-modal"
			class="sm:absolute"
			classBackdrop=""
			animation="fade"
		>
			<div class={'bg-gray-100 rounded overflow-hidden'}>
				<ButtonForDropdownOfCommunity title="Discord" href="/">
					<DiscordIcon class="size-3.5" />
				</ButtonForDropdownOfCommunity>
				<ButtonForDropdownOfCommunity title="Twitter" href="/">
					<TwitterIcon class="size-3.5" />
				</ButtonForDropdownOfCommunity>
				<ButtonForDropdownOfCommunity title="GitHub" href="/">
					<GitHubIcon class="size-3.5" />
				</ButtonForDropdownOfCommunity>
			</div>
		</Modal>
	);
}
interface ButtonForDropdownOfCommunityProps {
	title: string;
	children: JSX.Element;
	href: string;
}
function ButtonForDropdownOfCommunity({
	title,
	href,
	children,
}: ButtonForDropdownOfCommunityProps) {
	return (
		<a
			href={href}
			class="flex items-center hover:bg-gray-200 px-4 py-5 h-8 w-full gap-3"
		>
			{children}
			<h1>{title}</h1>
		</a>
	);
}
