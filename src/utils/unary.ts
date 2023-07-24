/* eslint-disable @typescript-eslint/no-explicit-any */
export const unary = <T, R>(fn: (...args: [T, ...any[]]) => R) => (arg: unknown extends T ? never : T) => fn(arg);
