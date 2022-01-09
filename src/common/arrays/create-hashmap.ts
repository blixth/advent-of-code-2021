/* eslint-disable @typescript-eslint/no-explicit-any */
export const createHashmap = <T>(arr: Array<T>): Record<string, number> => {
  return arr.reduce((accumulated: Record<string, number>, value: any) => {
    accumulated[value] = (accumulated[value] || 0) + 1;

    return accumulated;
  }, {});
};
