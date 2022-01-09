import {createHashmap} from './create-hashmap';

export const getMostFrequent = <T>(arr: T[]): string => {
  const hashmap = createHashmap(arr);

  return Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] > hashmap[b] ? a : b
  );
};
