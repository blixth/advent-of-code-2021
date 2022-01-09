import {SonarSweep} from './Day 1 - Sonar Sweep/sonar-sweep';
import {AdventOfCodeClient} from './common/get-puzzle-input';
import {CommandParser} from './Day 2 - Dive!/command-parser';
import {Submarine} from './Day 2 - Dive!/submarine';
import {NewNavigationSystem} from './Day 2 - Dive!/new-navigation-system';
import {OldNavigationSystem} from './Day 2 - Dive!/old-navigation-system';
import {BinaryDiagnostic} from './Day 3 - Binary Diagnostic/binary-diagnostic';
import {compact} from 'utilitype';

export class ProblemSolver {
  public static SolvePuzzleOne = async (): Promise<void> => {
    console.log('Solving 1 - Sonar sweep part 1:');

    const input = await AdventOfCodeClient.getPuzzleInputAsNumbers(1);
    const sweepData = SonarSweep.analyzeSweep(input);
    const resultPartOne = SonarSweep.getNumberOfDepthIncreases(sweepData);

    console.log(`The number of increases for part one was ${resultPartOne}`);

    console.log('Solving 1 - Sonar sweep part 2:');

    const windows = SonarSweep.sumThreeMeasurementSlidingWindows(sweepData);
    const resultPartTwo = SonarSweep.getNumberOfDepthIncreases(windows);

    console.log(`The number of increases for part two was ${resultPartTwo}`);
  };

  public static SolvePuzzleTwo = async (): Promise<void> => {
    console.log('Solving 2 - Dive! part 1:');

    const input = await AdventOfCodeClient.getPuzzleInputAsString(2);
    const commands = CommandParser.parseCommands(input);

    const submarine = new Submarine(new OldNavigationSystem());

    commands.forEach(submarine.execute);

    console.log(`The multiple of the submarine is ${submarine.multiple()}`);

    console.log('Solving 2 - Dive! part 2:');

    const newSubmarine = new Submarine(new NewNavigationSystem());

    commands.forEach(newSubmarine.execute);

    console.log(`The multiple of the submarine is ${newSubmarine.multiple()}`);
  };

  public static SolvePuzzleThree = async (): Promise<void> => {
    console.log('Solving 3 - Binary Diagnostic part 1:');

    const input = (await AdventOfCodeClient.getPuzzleInputAsString(3)).map(
      str => str.split('')
    );

    const binaryDiagostic = new BinaryDiagnostic(compact(input) as string[][]);

    console.log(
      `The power consumption is ${binaryDiagostic.powerConsumption()}`
    );

    console.log(
      `The life support rating is ${binaryDiagostic.lifeSupportRating()}`
    );
  };
}
