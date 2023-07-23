import { not } from '!utils/not';

const alwaysTruePredicate = () => true;
const alwaysFalsePredicate = () => false;
const isEven = (n: number) => (n % 2 === 0);

it('should return false given a predicate that always returns true', () => {
  const result = not(alwaysTruePredicate)();
  const expected = false;

  expect(result).toBe(expected);
});

it('should return true given a predicate that always returns false', () => {
  const result = not(alwaysFalsePredicate)();
  const expected = true;

  expect(result).toBe(expected);
});

it('should negate the result of a given predicate with more than one output', () => {
  const resultA = not(isEven)(2);
  const expectedA = false;

  expect(resultA).toBe(expectedA);

  const resultB = not(isEven)(1);
  const expectedB = true;

  expect(resultB).toBe(expectedB);
});
