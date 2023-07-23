/* eslint-disable @typescript-eslint/no-explicit-any */
export const not = <T extends any[]>(predicate: (...args: T) => boolean) => (...args: T) => !predicate(...args);
