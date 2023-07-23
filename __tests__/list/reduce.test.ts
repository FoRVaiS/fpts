import { reduce } from '!list/reduce';

const add = (a: number, b: number) => a + b;

it('should return the initial value if the array is empty', () => {
  const arr: number[] = [];
  const initial = 0;

  const result: number = reduce(arr, add, initial);
  const expected: number = initial;

  expect(result).toBe(expected);
});

it('should return an accumulated value by iterating through a non-empty array', () => {
  const arr: number[] = [1, 2, 3];
  const initial = 2;

  const result: number = reduce(arr, add, initial);
  const expected: number = 8;

  expect(result).toBe(expected);
});
