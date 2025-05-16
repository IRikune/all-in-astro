import { computed, useSignal } from '@preact/signals';
import { selectedTask, user } from '../../../stores/mod';
import { useCreateComment } from '../../../hooks/tasks';
import { ChevronIcon } from '../icons/ChevronIcon';
import { Comment } from '../Comment';
import { SendIcon } from '../icons/SendIcon';
import type { JSX } from 'preact/jsx-runtime';
import type { NewComment } from '../../../types/mod';

export function TaskComments() {
	const comment = useSignal('');
	const handleCreateComentSubmit = async (
		e: JSX.TargetedEvent<HTMLFormElement>,
	) => {
		e.preventDefault();
		if (!selectedTask.value) return;
		if (!comment.value) return;
		const newComment: NewComment = {
			content: comment.peek(),
			creator: user.peek()?.id,
			createdAt: Date.now(),
		};
		comment.value = '';
		const res = await useCreateComment({
			taskID: selectedTask.value?.id,
			comment: newComment,
		});
		if (res.ok && res.data) {
			const currentComments = selectedTask.value?.comments ?? [];
			const comment = { ...newComment, id: res.data };
			const newComments = [...currentComments, comment];
			selectedTask.value = {
				...selectedTask.value,
				comments: newComments,
			};
		}
	};
	return (
		<section class="w-full has-open:h-[50cqh] flex flex-col overflow-x-hidden overflow-y-scroll transition-all">
			<main class="w-full has-open:h-[50cqh] flex justify-start overflow-x-hidden overflow-y-scroll mx-2">
				<details
					class="[&_summary::-webkit-details-marker]:hidden w-full group select-none"
					open
				>
					<summary class="w-full cursor-pointer text-start [list-style:none] mx-10 flex items-center py-2">
						<div>
							<ChevronIcon class="size-3.5 group-not-open:-rotate-90 group-open:rotate-0 transition duration-300" />
						</div>
						<span>Comment</span>
					</summary>
					<div class="flex flex-col-reverse">
						{selectedTask.value?.comments?.map((comment) => {
							return (
								<Comment
									key={comment.id}
									class="group-open:opacity-100 motion-duration-300 motion-ease-spring-bouncy transition-discrete starting:opacity-0"
									content={comment.content}
									createdAt={comment.createdAt}
									creator={comment.creator}
									id={comment.id}
								/>
							);
						})}
					</div>
				</details>
			</main>
			<hr class="text-neutral-200 mb-2 w-80%" />
			<footer class="flex mx-10 my-2">
				<aside>
					<div class="size-8 rounded-full border border-neutral-100 overflow-hidden mr-2 flex items-center justify-center">
						<img src={user.value?.avatar} alt="user avatar" />
					</div>
				</aside>
				<form onSubmit={handleCreateComentSubmit} class="w-full flex">
					<input
						placeholder="Comment your ideas here"
						value={comment.value}
						onInput={(e) => {
							comment.value = e.currentTarget.value;
						}}
						class="w-full border border-neutral-200 rounded-full p-1 px-2 text-sm focus:outline-none"
						type="text"
					/>
					<button
						class="text-xs bg-theme-red-100 text-white font-medium p-1.5 rounded-md mx-2 cursor-pointer"
						type="submit"
					>
						<SendIcon class="size-4" />
					</button>
				</form>
			</footer>
		</section>
	);
}
