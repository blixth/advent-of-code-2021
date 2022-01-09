import {compact, isMissing} from 'utilitype';
import {CommandDirection} from './command-direction';
import {SubmarineCommand} from './submarine-command';

export class CommandParser {
  public static parseCommands = (input: string[]): SubmarineCommand[] => {
    return compact(input.map(this.parseCommand)) as SubmarineCommand[];
  };

  public static parseCommand = (input: string): SubmarineCommand | null => {
    const [command, amount] = input.split(' ');

    if (isMissing(command) || isMissing(amount)) {
      return null;
    }

    return new SubmarineCommand(this.commands[command], Number(amount));
  };

  private static readonly commands: Record<string, CommandDirection> = {
    up: CommandDirection.Up,
    down: CommandDirection.Down,
    forward: CommandDirection.Forward,
  };
}
