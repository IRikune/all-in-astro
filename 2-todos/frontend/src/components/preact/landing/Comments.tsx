import { DenoNeckIcon } from '../icons/DenoNeck';
import { COMMENTS, type Commentary } from '../../../utils/landingConsts';

export function Comments() {
	return (
		<>
			<section class="relative py-16 w-full px-10 sm:px-20 lg:px-40 h-full grid z-0">
				<header class={'overflow-hidden h-fit'}>
					<div
						key="title"
						class="h-fit px-2 py-1 rounded bg-[rgb(112,255,175)] w-fit mb-10"
					>
						<h1>Our vibrant community</h1>
					</div>
					<ScrollToLeft list={COMMENTS} class="max-h-100" />
				</header>

				<main> </main>
				<DenoNeckIcon class="absolute size-40 place-self-end pl-12" />
			</section>
		</>
	);
}

interface CommentsItemProps {
	author: string;
	content: string;
	avatar: string;
}

interface ScrollToLeftProps {
	class?: string;
	list?: Commentary[];
}

function ScrollToLeft({ class: className, list }: ScrollToLeftProps) {
	const length = list?.length;

	return (
		<>
			<div
				class={`slide-animation max-w-none transition-transform  ease-in-out grid grid-cols-[repeat(var(--lenth),1fr)] gap-4 ${className}`}
				style={`--lenth: ${length}; width: calc(var(--lenth) * 100%);`}
			>
				{list?.map((item) => CommentsItem(item))}
			</div>
			<div class="mt-10 flex gap-10 border-theme">
				{list?.map((item) => (
					<img
						key={item.author}
						src={`${item.avatar}`}
						alt=""
						class="size-14 rounded-full object-cover"
					/>
				))}
			</div>
		</>
	);
}

function CommentsItem({ author, content, avatar }: CommentsItemProps) {
	return (
		<>
			<div key={author} class="gap-2">
				<p
					class={
						'max-h-45 md:max-h-none overflow-scroll md:overflow-visible text-3xl sm:text-4xl md:text-5xl font-bold'
					}
				>
					{content}
				</p>
				<h1 class="text-gray-500 mt-8">{author}</h1>
			</div>
		</>
	);
}
