import {SonarSweep} from './1 - Sonar Sweep/sonar-sweep';
import {AdventOfCodeClient} from './common/get-puzzle-input';

export class ProblemSolver {
  public static SolvePuzzleOne = async (): Promise<void> => {
    console.log('Solving 1 - Sonar sweep part 1:');

    const input = await AdventOfCodeClient.getPuzzleInputAsNumbers(1, 1);
    const sweepData = SonarSweep.analyzeSweep(input);
    const resultPartOne = SonarSweep.getNumberOfDepthIncreases(sweepData);

    console.log(`The number of increases for part one was ${resultPartOne}`);

    console.log('Solving 1 - Sonar sweep part 2:');

    const windows = SonarSweep.sumThreeMeasurementSlidingWindows(sweepData);
    const resultPartTwo = SonarSweep.getNumberOfDepthIncreases(windows);

    console.log(`The number of increases for part two was ${resultPartTwo}`);
  };
}
