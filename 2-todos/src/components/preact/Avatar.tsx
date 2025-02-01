import { useMemo } from "preact/hooks";
import { createAvatar } from "@dicebear/core";
import { avataaars as avatars } from "@dicebear/collection";

interface AvatarProps {
    seed?: string;
    size?: number;
    class?: string;
}
export function Avatar({ size = 128, seed = "riku", class: className }: AvatarProps) {
    const avatar = useMemo(() => {
        const avatarOptions = {
            seed,
            size,
        }
        const avatarSrc = createAvatar(avatars, avatarOptions).toDataUri()
        return avatarSrc
    }, [seed, size])

    return <img class={`${className}`} src={avatar} alt="Avatar" />

} 