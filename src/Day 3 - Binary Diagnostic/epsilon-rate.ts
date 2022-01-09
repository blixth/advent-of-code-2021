import {range} from 'utilitype';
import {getFromPosition} from '../common/arrays/get-from-position';
import {getLeastFrequent} from '../common/arrays/get-least-frequent';

export class EpsilonRate {
  private binaryInput: Array<Array<string>>;

  constructor(binaryInput: Array<Array<string>> = []) {
    this.binaryInput = binaryInput;
  }

  public value = (): number => parseInt(this.binaryValue(), 2);

  private binaryValue = (): string => {
    const lastPosition = this.binaryInput[0].length - 1;

    return range(0, lastPosition)
      .map(i => getLeastFrequent(getFromPosition(this.binaryInput, i)))
      .join('');
  };
}
