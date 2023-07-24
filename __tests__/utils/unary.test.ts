import { unary } from '!utils/unary';

const double = (val: number) => val * 2;
const add = (a: number, b: number = 0) => a + b;

it('should return a result given a single argument function', () => {
  const value = 1;

  const result = unary(double)(value);
  const expected = 2;

  expect(result).toBe(expected);
});

it('should return a result given a multi-argument function with only one required argument', () => {
  const value = 10;

  const result = unary(add)(value);
  const expected = 10;

  expect(result).toBe(expected);
});
