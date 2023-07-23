export const reduce = <A, T>(arr: T[], transformer: (acc: A, item: T) => A, initial: A) => {
  let acc: A = initial;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (value) {
      acc = transformer(acc, value);
    }
  }

  return acc;
};
