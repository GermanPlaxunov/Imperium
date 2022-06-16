export class ColorSelector {

  colors: string[] = ["green", "red", "blue", "orange", "grey"];

  constructor() {
  }

  public randomColor(): string {
    let num = Math.floor(Math.random() * 100);
    return this.chooseColor(num);
  }

  private chooseColor(num: number): string {
    switch (true) {
      case ((num >= 15) && (num < 20) || (num >= 50) && (num < 55)):
        return this.colors[0];
        break;
      case ((num >= 20) && (num < 25) || (num >= 55) && (num < 60)):
        return this.colors[1];
        break;
      case ((num >= 0) && (num < 5) || (num >= 60) && (num < 65)):
        return this.colors[2];
        break;
      case ((num >= 5) && (num < 10) || (num >= 65) && (num < 70)):
        return this.colors[3];
        break;
      case ((num >= 25) && (num < 50) || (num >= 70) && (num < 100)):
        return this.colors[4];
        break;
    }
    return "grey";
  }

}
