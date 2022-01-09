import assert from 'assert';
import {CommandParser} from '../../src/Day 2 - Dive!/command-parser';
import {OldNavigationSystem} from '../../src/Day 2 - Dive!/old-navigation-system';
import {NewNavigationSystem} from '../../src/Day 2 - Dive!/new-navigation-system';
import {Submarine} from '../../src/Day 2 - Dive!/submarine';

describe('2 - Dive!', () => {
  context('#Example 1', () => {
    context('following the example commands', () => {
      const input = [
        'forward 5',
        'down 5',
        'forward 8',
        'up 3',
        'down 8',
        'forward 2',
      ];

      const commands = CommandParser.parseCommands(input);

      it('should have a horizontal position of 15', () => {
        const submarine = new Submarine(new OldNavigationSystem());

        commands.forEach(submarine.execute);

        assert.strictEqual(submarine.navigationSystem.horizontalPosition, 15);
      });

      it('should have a depth of 10', () => {
        const submarine = new Submarine(new OldNavigationSystem());

        commands.forEach(submarine.execute);

        assert.strictEqual(submarine.navigationSystem.depth, 10);
      });

      it('should have a multiple of 150', () => {
        const submarine = new Submarine(new OldNavigationSystem());

        commands.forEach(submarine.execute);

        assert.strictEqual(submarine.multiple(), 150);
      });
    });

    context('#Example 2', () => {
      context('following the example commands', () => {
        const input = [
          'forward 5',
          'down 5',
          'forward 8',
          'up 3',
          'down 8',
          'forward 2',
        ];

        const commands = CommandParser.parseCommands(input);

        it('should have a horizontal position of 15', () => {
          const submarine = new Submarine(new NewNavigationSystem());

          commands.forEach(submarine.execute);

          assert.strictEqual(submarine.navigationSystem.horizontalPosition, 15);
        });

        it('should have a depth of 60', () => {
          const submarine = new Submarine(new NewNavigationSystem());

          commands.forEach(submarine.execute);

          assert.strictEqual(submarine.navigationSystem.depth, 60);
        });

        it('should have a multiple of 900', () => {
          const submarine = new Submarine(new NewNavigationSystem());

          commands.forEach(submarine.execute);

          assert.strictEqual(submarine.multiple(), 900);
        });
      });
    });
  });
});
