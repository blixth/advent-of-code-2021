import assert from 'assert';
import {getFromPosition} from '../../src/common/arrays/get-from-position';

describe('3 - Binary Diagnostic', () => {
  context('#getFromPosition', () => {
    it('should return value from given position in array of arrays', () => {
      const input = [
        ['1', '2', '3', '4', '5'],
        ['6', '7', '8', '9', '0'],
      ];

      const result = getFromPosition(input, 2);

      assert.strictEqual(result[0], '3');
      assert.strictEqual(result[1], '8');
    });
  });
});
