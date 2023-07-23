export const filter = <T>(arr: T[], predicate: (val: T) => boolean) => {
  const newArr: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (val && predicate(val)) {
      newArr.push(val);
    }
  }

  return newArr;
};
