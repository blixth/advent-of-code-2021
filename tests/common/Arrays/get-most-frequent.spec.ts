import assert from 'assert';
import {getMostFrequent} from '../../../src/common/arrays/get-most-frequent';

describe('Arrays', () => {
  context('#getMostFrequent', () => {
    it('should return the most frequent value in the array', () => {
      const input = [1, 1, 2, 3, 2222];

      const result = getMostFrequent(input);

      assert.strictEqual(result, '1');
    });

    it('should return the most frequent value in the array', () => {
      const input = [0, 1, 0, 1, 1, 0];

      const result = getMostFrequent(input);

      assert.strictEqual(result, '1');
    });
  });
});
