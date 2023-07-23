export const map = <T, R>(arr: T[], transformer: (val: T) => R) => {
  const newArr: R[] = [];

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (val) {
      newArr.push(transformer(val));
    }
  }

  return newArr;
};
