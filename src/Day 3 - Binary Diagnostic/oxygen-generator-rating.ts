import {getFromPosition} from '../common/arrays/get-from-position';
import {getMostFrequent} from '../common/arrays/get-most-frequent';
import {filterOnBitInPosition} from './filter-on-bit-in-position';

export class OxygenGeneratorRating {
  private binaryInput: Array<Array<string>>;

  constructor(binaryInput: Array<Array<string>> = []) {
    this.binaryInput = binaryInput;
  }

  public value = (): number => parseInt(this.binaryValue(), 2);

  private binaryValue = (): string => {
    const lastPosition = this.binaryInput[0].length - 1;

    for (let i = 0; i <= lastPosition; i++) {
      const mostCommonBit = getMostFrequent(
        getFromPosition(this.binaryInput, i)
      );

      this.binaryInput = this.binaryInput.filter(arr =>
        filterOnBitInPosition(arr, mostCommonBit, i)
      );

      if (this.binaryInput.length === 1) {
        break;
      }
    }

    return this.binaryInput[0].join('');
  };
}
