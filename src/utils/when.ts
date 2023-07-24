/* eslint-disable @typescript-eslint/no-explicit-any */
export const when = <T extends any[], R>(predicate: (...args: T) => boolean, fn: (...args: T) => R) => (...args: T) => (predicate(...args)
  ? fn(...args)
  : undefined);
