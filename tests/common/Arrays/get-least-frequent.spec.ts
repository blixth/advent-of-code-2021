import assert from 'assert';
import {getLeastFrequent} from '../../../src/common/arrays/get-least-frequent';

describe('Arrays', () => {
  context('#getLeastFrequent', () => {
    it('should return the least frequent value in the array', () => {
      const input = [0, 1, 1, 1, 0];

      const result = getLeastFrequent(input);

      assert.strictEqual(result, '0');
    });

    it('should return the least frequent value in the array', () => {
      const input = [1, 0, 0, 1, 0, 1];

      const result = getLeastFrequent(input);

      assert.strictEqual(result, '0');
    });
  });
});
