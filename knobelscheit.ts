export class Knobelscheit {
  private state: Array<boolean> = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  public inspect(): Map<number, boolean> {
    const stateByNumber = new Map<number, boolean>();
    for (let i = 0; i < this.state.length; i++) {
      stateByNumber.set(i + 1, this.state[i]);
    }
    return stateByNumber;
  }
}
