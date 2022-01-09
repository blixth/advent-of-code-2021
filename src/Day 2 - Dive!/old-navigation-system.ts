import {CommandDirection} from './command-direction';
import {INavigationSystem} from './i-navigation-system';
import {SubmarineCommand} from './submarine-command';

export class OldNavigationSystem implements INavigationSystem {
  public horizontalPosition: number;
  public depth: number;

  constructor() {
    this.horizontalPosition = 0;
    this.depth = 0;
  }

  public execute = (command: SubmarineCommand): void => {
    this.commandMap[command.direction](command.amount);
  };

  private up = (amount: number) => {
    this.depth -= amount;
  };

  private down = (amount: number) => {
    this.depth += amount;
  };

  private forward = (amount: number) => {
    this.horizontalPosition += amount;
  };

  private readonly commandMap: {
    [key in CommandDirection]: (amount: number) => void;
  } = {
    [CommandDirection.Up]: this.up,
    [CommandDirection.Down]: this.down,
    [CommandDirection.Forward]: this.forward,
  };
}
