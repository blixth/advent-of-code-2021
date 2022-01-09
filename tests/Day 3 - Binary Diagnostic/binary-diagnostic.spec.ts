import assert from 'assert';
import {BinaryDiagnostic} from '../../src/Day 3 - Binary Diagnostic/binary-diagnostic';
import {CO2ScrubberRating} from '../../src/Day 3 - Binary Diagnostic/CO2-scrubber-rating';
import {EpsilonRate} from '../../src/Day 3 - Binary Diagnostic/epsilon-rate';
import {GammaRate} from '../../src/Day 3 - Binary Diagnostic/gamma-rate';
import {OxygenGeneratorRating} from '../../src/Day 3 - Binary Diagnostic/oxygen-generator-rating';

describe('3 - Binary Diagnostic', () => {
  const input = [
    '00100'.split(''),
    '11110'.split(''),
    '10110'.split(''),
    '10111'.split(''),
    '10101'.split(''),
    '01111'.split(''),
    '00111'.split(''),
    '11100'.split(''),
    '10000'.split(''),
    '11001'.split(''),
    '00010'.split(''),
    '01010'.split(''),
  ];

  context('#EpsilonRate', () => {
    it('should calculate the correct value', () => {
      const epsilonRate = new EpsilonRate(input);

      const result = epsilonRate.value();

      assert.strictEqual(9, result);
    });
  });

  context('#GammaRate', () => {
    it('should calculate the correct value', () => {
      const gammaRate = new GammaRate(input);

      const result = gammaRate.value();

      assert.strictEqual(22, result);
    });
  });

  context('#OxygenGeneratorRating', () => {
    it('should calculate the correct value', () => {
      const oxygenGeneratorRating = new OxygenGeneratorRating(input);

      const result = oxygenGeneratorRating.value();

      assert.strictEqual(23, result);
    });
  });

  context('#CO2ScrubberRating', () => {
    it('should calculate the correct value', () => {
      const co2ScrubberRating = new CO2ScrubberRating(input);

      const result = co2ScrubberRating.value();

      assert.strictEqual(10, result);
    });
  });

  context('#BinaryDiagnostic', () => {
    context('powerConsumption', () => {
      it('should calculate the power consumption', () => {
        const diagnostic = new BinaryDiagnostic(input);

        const result = diagnostic.powerConsumption();

        assert.strictEqual(result, 198);
      });
    });

    context('lifeSupportRating', () => {
      it('should calculate the power consumption', () => {
        const diagnostic = new BinaryDiagnostic(input);

        const result = diagnostic.lifeSupportRating();

        assert.strictEqual(result, 230);
      });
    });
  });
});
