import { when } from '!utils/when';

// Predicates
const alwaysTrue = (val: number) => true;
const alwaysFalse = (val : number) => false;
const isEven = (x: number) => x % 2 === 0;

// Transformers
const double = (x: number) => x * 2;

it('should call fn when the predicate returns true', () => {
  const value = 4;

  const result = when(alwaysTrue, double)(value);
  const expected = 8;

  expect(result).toEqual(expected);
});

it('should not call fn when the predicate returns false', () => {
  const value = 4;

  const result = when(alwaysFalse, double)(value);
  const expected = undefined;

  expect(result).toEqual(expected);
});

it('should conditionally call fn based on the predicate', () => {
  const whenEvenDouble = when(isEven, double);

  const resultA = whenEvenDouble(2);
  const expectedA = 4;

  const resultB = whenEvenDouble(3);

  expect(resultA).toEqual(expectedA);
  expect(resultB).toBeUndefined();
});
