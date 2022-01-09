export class SonarSweepData {
  constructor(
    currentValue: number,
    previousValue: number | null = null,
    nextValue: number | null = null
  ) {
    this.currentValue = currentValue;
    this.previousValue = previousValue;
    this.nextValue = nextValue;
  }

  public currentValue: number;
  public nextValue: number | null;
  public previousValue: number | null;

  public totalValue = (): number =>
    (this.previousValue ?? 0) + this.currentValue + (this.nextValue ?? 0);
}
