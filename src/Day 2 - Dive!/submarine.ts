import {INavigationSystem} from './i-navigation-system';
import {SubmarineCommand} from './submarine-command';

export class Submarine {
  constructor(navigationSystem: INavigationSystem) {
    this.navigationSystem = navigationSystem;
  }

  public navigationSystem: INavigationSystem;

  public execute = (command: SubmarineCommand): void => {
    this.navigationSystem.execute(command);
  };

  public multiple = (): number => {
    const {horizontalPosition, depth} = this.navigationSystem;

    return horizontalPosition * depth;
  };
}
