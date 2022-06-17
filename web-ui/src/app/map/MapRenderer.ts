import {ColorSelector} from "./ColorSelector";

export class MapRenderer {

  private colorSelector = new ColorSelector();
  private readonly canvasWidth: number;
  private readonly canvasHeight: number;
  private readonly cellSize: number;

  constructor(width: number, height: number, cellSize: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.cellSize = cellSize;
  }

  public renderMap(canvasContext: any) {
    for (let i = 0; i < this.canvasWidth; i += this.cellSize) {
      for (let j = 0; j < this.canvasHeight; j += this.cellSize) {
        canvasContext.fillStyle = this.colorSelector.randomColor();
        canvasContext.fillRect(i, j, this.cellSize, this.cellSize);
      }
    }
  }

  public selectMapCell(canvasContext: any, x: number, y: number) {
    console.log(x + " " + y);
    let x_cell = this.getCellNumberX(x);
    let y_cell = this.getCellNumberY(y);
    canvasContext.fillStyle = "black";
    canvasContext.rect(x_cell * this.cellSize, y_cell * this.cellSize, this.cellSize, this.cellSize);
    canvasContext.stroke();
    canvasContext.clearRect(50, 50, 50, 50);
  }

  private getCellNumberX(x: number) : number{
    let mapSize = this.canvasWidth / this.cellSize;
    let x_1 = 0;
    let x_2 = x_1 + this.cellSize;

    for (let i = 0; i < mapSize; i++) {
      if ((x_1 < x) && (x_2 > x)) {
        return i;
      }
      x_1 = x_2;
      x_2 += this.cellSize;
    }
    return 0;
  }

  private getCellNumberY(y: number) : number{
    let mapSize = this.canvasWidth / this.cellSize;
    let y_1 = 0;
    let y_2 = y_1 + this.cellSize;
    for (let i = 0; i < mapSize; i++) {
      if ((y_1 < y) && (y_2 > y)) {
        return i;
      }
      y_1 = y_2;
      y_2 += this.cellSize;
    }
    return 0;
  }

}
