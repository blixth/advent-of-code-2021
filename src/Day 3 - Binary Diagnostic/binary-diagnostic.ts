import {CO2ScrubberRating} from './CO2-scrubber-rating';
import {EpsilonRate} from './epsilon-rate';
import {GammaRate} from './gamma-rate';
import {OxygenGeneratorRating} from './oxygen-generator-rating';

export class BinaryDiagnostic {
  private gammaRate: GammaRate;
  private epsilonRate: EpsilonRate;
  private oxygenGeneratorRating: OxygenGeneratorRating;
  private co2ScrubberRating: CO2ScrubberRating;

  constructor(binaryInput: Array<Array<string>> = []) {
    this.gammaRate = new GammaRate(binaryInput);
    this.epsilonRate = new EpsilonRate(binaryInput);
    this.oxygenGeneratorRating = new OxygenGeneratorRating(binaryInput);
    this.co2ScrubberRating = new CO2ScrubberRating(binaryInput);
  }

  public powerConsumption = (): number => {
    const gammaValue = this.gammaRate.value();
    const epsilonValue = this.epsilonRate.value();

    return gammaValue * epsilonValue;
  };

  public lifeSupportRating = (): number => {
    const oxygenRating = this.oxygenGeneratorRating.value();
    const co2Rating = this.co2ScrubberRating.value();

    return oxygenRating * co2Rating;
  };
}
