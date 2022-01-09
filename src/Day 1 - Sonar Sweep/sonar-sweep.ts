import {SonarSweepData} from './sonar-sweep-data';
import {SonarSweepStatus as Status} from './sonar-sweep-status';

export class SonarSweep {
  public static analyzeSweep = (sweepData: number[]): SonarSweepData[] => {
    return sweepData.map((currentValue, index) => {
      const previousValue = index === 0 ? null : sweepData[index - 1];
      const nextValue =
        index === sweepData.length - 1 ? null : sweepData[index + 1];

      return new SonarSweepData(currentValue, previousValue, nextValue);
    });
  };

  public static getNumberOfDepthIncreases = (
    sweepData: SonarSweepData[]
  ): number =>
    sweepData.filter(
      data =>
        this.getStatus(data.previousValue, data.currentValue) ===
        Status.Increased
    ).length;

  public static sumThreeMeasurementSlidingWindows = (
    sweepData: SonarSweepData[]
  ): SonarSweepData[] => {
    const windows = sweepData
      .filter(data => data.previousValue !== null && data.nextValue !== null)
      .map(data => data.totalValue());

    return this.analyzeSweep(windows);
  };

  private static getStatus = (
    previousValue: number | null,
    currentValue: number
  ): Status => {
    if (previousValue === null) {
      return Status.NotAvailable;
    }

    if (currentValue === previousValue) {
      return Status.NoChange;
    }

    if (currentValue > previousValue) {
      return Status.Increased;
    }

    return Status.Decreased;
  };
}
