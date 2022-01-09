import {CommandDirection} from './command-direction';

export class SubmarineCommand {
  constructor(direction: CommandDirection, amount: number) {
    this.direction = direction;
    this.amount = amount;
  }

  public direction: CommandDirection;
  public amount: number;
}
