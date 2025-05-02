import { Button } from '../Button';
import { AddButton } from './AddButton';
import { DropDown } from '../DropDown';
import { Modal } from '../Modal';
import { AddTaskForm } from './AddTaskForm';
import { isOpenNavbar } from '../../../stores/mod';
import { ToggleSidebar } from './ToggleSidebar';
interface Props {
	class?: string;
	currentPage: string;
}

export function Sidebar({ class: className, currentPage }: Props) {
	return (
		<nav
			class={`w-55 h-full bg-neutral-100 z-10 rounded-r-lg p-3 grid grid-cols-1 -ml-51 motion-ease-in-out-quart grid-rows-[38px_32px_7fr_1fr] ${className} ${isOpenNavbar.value ? 'motion-translate-x-in-[90%] motion-opacity-out' : 'motion-translate-x-out-[90%] motion-opacity-in'}`}
		>
			<div class="flex items-center">
				<DropDown />
				<section class="flex h-8 items-center mx-10 justify-between">
					<ToggleSidebar />
				</section>
			</div>

			<AddButton />
			<section class="my-2 h-[30%] *:h-8 *:px-2">
				<Button icon="search" class="w-[20%]">
					Search
				</Button>
				<Button page={currentPage} to="/dashboard/inbox" icon="inbox" class="">
					Inbox
				</Button>
				<Button
					page={currentPage}
					to="/dashboard/today"
					icon="calendar"
					class=""
				>
					Today
				</Button>
				<Button
					page={currentPage}
					to="/dashboard/upcoming"
					icon="sunrise"
					class=""
				>
					Upcoming
				</Button>
				<Button page={currentPage} to="/dashboard/filters" icon="grid" class="">
					Filters & labels
				</Button>
			</section>

			<section class="self-end">
				<Button icon="plus" to="/" class="">
					Logout
				</Button>
			</section>
			<Modal
				animation='scale'
				classBackdrop=''
				class="fixed left-5/3 top-[16dvw] translate-x-1/2 translate-y-1/2 z-[100]"
				id="add-task-modal"
			>
				<div class="bg-white w-xl text-center shadow-theme-2 rounded-lg p-2">
					<AddTaskForm />
				</div>
			</Modal>
		</nav>
	);
}
