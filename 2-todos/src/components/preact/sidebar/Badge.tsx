import { PriorityIcon } from "../icons/PriorityIcon";
import { ClockIcon } from "../icons/ClockIcon";
import { BookMarkIcon } from "../icons/BookMarkIcon";
import { CalendarIcon } from "../icons/CalendarIcon";


export enum Badges {
    Date = "Date",
    Priority = "Priority",
    Reminder = "Reminder",
    Labels = "Labels",
    Calendar = "Calendar",
}

interface Props {
    badge: Badges;
}

export function Badge({ badge }: Props) {
    const badgeIcons = {
        [Badges.Date]: <CalendarIcon />,
        [Badges.Priority]: <PriorityIcon />,
        [Badges.Reminder]: <ClockIcon />,
        [Badges.Labels]: <BookMarkIcon />,
        [Badges.Calendar]: <CalendarIcon />,
    }
    const Icon = badgeIcons[badge];
    return (
        <>
            <h2>{badge}</h2>
            {Icon}
        </>
    )
}