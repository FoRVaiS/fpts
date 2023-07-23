import { constant } from '!utils/constant';

it('should return a function that returns the value', () => {
  const value = 1;

  const result = constant(value)();
  const expected = 1;

  expect(result).toBe(expected);
});

it('should return a function that returns the object', () => {
  const obj = { a: 1 };

  const result = constant(obj)();
  const expected = { a: 1 };

  expect(result).toEqual(expected);
});

it('should return a function that returns the function', () => {
  const fn = () => 1;

  const result = constant(fn)()();
  const expected = 1;

  expect(result).toBe(expected);
});


it('should return a function that returns the result of a function with arguments', () => {
  const fn = (a: number, b: number) => a + b;

  const result = constant(fn)()(5, 6);
  const expected = 11;

  expect(result).toBe(expected);
});
