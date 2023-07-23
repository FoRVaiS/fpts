import { filter } from '!list/filter';

const alwaysTruePredicate = () => true;
const alwaysFalsePredicate = () => false;
const stringLengthPredicate = (length: number) => (val: string) => val.length >= length;

it('should return an empty array when given an empty array', () => {
  const arr: [] = [];

  const result = filter(arr, () => true);
  const expected: [] = [];

  expect(result).toEqual(expected);
});

it('should always return true when given a predicate that always returns true', () => {
  const arr = ['hello', 'world'];

  const result = filter(arr, alwaysTruePredicate);
  const expected = ['hello', 'world'];

  expect(result).toEqual(expected);
});

it('should always return false when given a predicate that always returns false', () => {
  const arr = ['hello', 'world'];

  const result = filter(arr, alwaysFalsePredicate);
  const expected: [] = [];

  expect(result).toEqual(expected);
});

it('should return a subset of an array when given a predicate that matches some values', () => {
  const arr = ['hello', 'majestic', 'world'];

  const result = filter(arr, stringLengthPredicate(6));
  const expected = ['majestic'];

  expect(result).toEqual(expected);
});
