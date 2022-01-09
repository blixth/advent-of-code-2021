import {SubmarineCommand} from './submarine-command';

export interface INavigationSystem {
  horizontalPosition: number;
  depth: number;
  execute: (command: SubmarineCommand) => void;
}
