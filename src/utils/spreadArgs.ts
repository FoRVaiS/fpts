/* eslint-disable @typescript-eslint/no-explicit-any */
export const spreadArgs = <T extends any[], R>(fn: (...args: T) => R) => (args: T) => fn(...args);
