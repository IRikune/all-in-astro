import { formatDistanceToNow } from "date-fns";

interface useFormatedDateOptions {
    date: number;
}

export const useFormatedDate = ({ date }: useFormatedDateOptions): string => {
    const parsedDate = new Date(date);
    const parsedDateString = formatDistanceToNow(parsedDate, {addSuffix: true});
    return parsedDateString;
}