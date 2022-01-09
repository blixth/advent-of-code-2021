import assert from 'assert';
import {CommandDirection} from '../../src/Day 2 - Dive!/command-direction';
import {CommandParser} from '../../src/Day 2 - Dive!/command-parser';

describe('2 - Dive!', () => {
  context('#CommandParser', () => {
    it('should parse one command', () => {
      const command = 'forward 5';

      const result = CommandParser.parseCommand(command);

      if (result !== null) {
        assert.strictEqual(result.direction, CommandDirection.Forward);
        assert.strictEqual(result.amount, 5);
      }
    });

    it('should parse an array of commands', () => {
      const input = [
        'forward 5',
        'down 5',
        'forward 8',
        'up 3',
        'down 8',
        'forward 2',
      ];

      const result = CommandParser.parseCommands(input);

      assert.strictEqual(result.length, 6);
    });
  });
});
