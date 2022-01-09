import {CommandDirection} from './command-direction';
import {INavigationSystem} from './i-navigation-system';
import {SubmarineCommand} from './submarine-command';

export class NewNavigationSystem implements INavigationSystem {
  public horizontalPosition: number;
  public depth: number;
  private aim: number;

  constructor() {
    this.horizontalPosition = 0;
    this.depth = 0;
    this.aim = 0;
  }

  public execute = (command: SubmarineCommand): void => {
    this.commandMap[command.direction](command.amount);
  };

  private up = (amount: number) => {
    this.aim -= amount;
  };

  private down = (amount: number) => {
    this.aim += amount;
  };

  private forward = (amount: number) => {
    this.horizontalPosition += amount;

    this.depth += this.aim * amount;
  };

  private readonly commandMap: {
    [key in CommandDirection]: (amount: number) => void;
  } = {
    [CommandDirection.Up]: this.up,
    [CommandDirection.Down]: this.down,
    [CommandDirection.Forward]: this.forward,
  };
}
