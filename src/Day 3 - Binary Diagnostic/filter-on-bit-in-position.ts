export const filterOnBitInPosition = (
  array: string[],
  firstBit: string,
  position: number
) => {
  return array[position] === firstBit;
};
