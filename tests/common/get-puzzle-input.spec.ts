import assert from 'assert';
import {isPresent} from 'utilitype';
import {AdventOfCodeClient} from '../../src/common/get-puzzle-input';

describe('common', () => {
  context('#getPuzzleInput', () => {
    it('should not be an empty array', async () => {
      const day = 1;
      const part = 1;

      const result = await AdventOfCodeClient.getPuzzleInputAsNumbers(
        day,
        part
      );

      assert.strictEqual(true, isPresent(result));
    });
  });
});
