import { map } from '!list/map';

const capitalize = (val: string) => (val && val.length > 0 ? val[0]!.toUpperCase() + val.substr(1) : '');
const double = (val: number) => val * 2;
const appendSuffix = (suffix: string) => (val: string | number | boolean) => `${suffix}${val}`;

it('should return an empty array when given an empty array', () => {
  const arr: number[] = [];

  const result: number[] = map(arr, double);
  const expected: number[] = [];

  expect(result).toEqual(expected);
});

it('should return the same type as the input type', () => {
  const arr = ['hello', 'world'];

  const result: string[] = map(arr, capitalize);
  const expected: string[] = ['Hello', 'World'];

  expect(result).toEqual(expected);
});

it('should return a different type than the input type', () => {
  const arr = [1, 2, 3];

  const result: string[] = map(arr, appendSuffix('Value: '));
  const expected: string[] = ['Value: 1', 'Value: 2', 'Value: 3'];

  expect(result).toEqual(expected);
});
