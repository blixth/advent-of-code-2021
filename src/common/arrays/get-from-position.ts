export const getFromPosition = <T>(
  input: Array<Array<T>>,
  position: number
): Array<T> => input.map(i => i[position]);
