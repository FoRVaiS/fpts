import { spreadArgs } from '!utils/spreadArgs';

const double = (x: number) => x * 2;
const add = (x: number, y: number) => x + y;

it('should correctly apply a function that takes one argument', () => {
  const result = spreadArgs(double)([2]);
  const expected = 4;

  expect(result).toEqual(expected);
});

it('should correctly apply a function that takes multiple arguments', () => {
  const result = spreadArgs(add)([1, 2]);
  const expected = 3;

  expect(result).toEqual(expected);
});
