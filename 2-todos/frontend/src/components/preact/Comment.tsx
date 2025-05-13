import { useSignalEffect, useSignal } from "@preact/signals";
import { useGetUser } from "../../hooks/users";
import { useFormatedDate } from "../../hooks/mod";
import { EditIcon } from "./icons/EditIcon";
import { TrashIcon } from "./icons/TrashIcon";
import type { Comment as CommentType, User } from "../../types/mod";

interface CommentProps extends CommentType {
    class?: string
}

export function Comment({ content, creator, createdAt, class: className }: CommentProps) {
    const user = useSignal<User>();
    useSignalEffect(() => {
        if (creator === user.value?.id) return
        useGetUser({ userID: creator })
            .then(res => {
                if (res.ok && res.data) {
                    user.value = res.data;
                }
            })
    })
    const formatedDate = useFormatedDate({ date: createdAt });
    return (
        <article class={`flex flex-row mx-10 hover:*:opacity-100! hover:cursor-pointer ${className}`}>
            <aside>
                <div class="size-8 rounded-full border border-neutral-100 overflow-hidden mr-2 flex items-center justify-center">
                    <img src={user.value?.avatar} alt="user avatar" />
                </div>
            </aside>
            <main class="w-full">
                <header class="flex gap-3 items-center">
                    <span class="font-medium text-sm">
                        {user.value?.name}
                    </span>
                    <span class="text-xs text-neutral-700">
                        {formatedDate}
                    </span>
                </header>
                <p class="flex text-sm">
                    {content}
                </p>
            </main>
            <aside class="text-neutral-600 *:p-1 *:rounded *:hover:bg-neutral-200 *:cursor-pointer transition duration-300 opacity-0">
                <button type="button">
                    <EditIcon class="size-4" />
                </button>
                <button type="button">
                    <TrashIcon class="size-4" />
                </button>
            </aside>
        </article>
    )
}