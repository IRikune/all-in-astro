export const normalizeObject = (obj: object): string => {
    return JSON.stringify(obj, Object.keys(obj).sort());
};