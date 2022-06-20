import {GameMap} from "../model/GameMap";

export class MapRenderer {

  private readonly canvasWidth: number;
  private readonly canvasHeight: number;
  private readonly cellSize: number;

  constructor(width: number, height: number, cellSize: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.cellSize = cellSize;
  }

  public renderMap(canvasContext: any, map: GameMap) {
    let cellNumber = 0;
    for (let i = 0; i < map.height / map.cellSize; i++) {
      for (let j = 0; j < map.width / map.cellSize; j++) {
        canvasContext.fillStyle = map.cells[cellNumber++].color;
        canvasContext.fillRect(i * map.cellSize, j * map.cellSize, map.cellSize, map.cellSize);
      }
    }
  }

  public selectMapCell(canvasContext: any, x: number, y: number) {
    let x_cell = this.getCellNumberX(x);
    let y_cell = this.getCellNumberY(y);
    canvasContext.fillStyle = "black";
    canvasContext.rect((x_cell * this.cellSize), (y_cell * this.cellSize) , this.cellSize, this.cellSize);
    canvasContext.stroke();
  }

  public getCellNumberX(x: number): number {
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

  public getCellNumberY(y: number): number {
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
