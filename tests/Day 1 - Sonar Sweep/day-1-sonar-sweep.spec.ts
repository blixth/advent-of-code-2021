import assert from 'assert';
import {SonarSweep} from '../../src/Day 1 - Sonar Sweep/sonar-sweep';

describe('1 - Sonar Sweep', () => {
  context('#Example 1', () => {
    it('should return 7 increases', () => {
      const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
      const sweepData = SonarSweep.analyzeSweep(input);

      const result = SonarSweep.getNumberOfDepthIncreases(sweepData);

      assert.strictEqual(result, 7);
    });
  });

  context('#Example 2', () => {
    it('should return 5 increases', () => {
      const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
      const sweepData = SonarSweep.analyzeSweep(input);
      const windows = SonarSweep.sumThreeMeasurementSlidingWindows(sweepData);

      const result = SonarSweep.getNumberOfDepthIncreases(windows);

      assert.strictEqual(result, 5);
    });
  });
});
