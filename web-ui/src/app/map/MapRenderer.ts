import {GameMap} from "../model/GameMap";
import {map} from "rxjs";

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
    let cell;
    for(let i = 0; i < map.cells.length; i ++){
      cell = map.cells[i];
      canvasContext.fillStyle = cell.color;
      canvasContext.fillRect(cell.x * this.cellSize, cell.y * this.cellSize, this.cellSize, this.cellSize);
    }
    // let size = this.canvasWidth / this.cellSize;
    // for (let i = 0; i < size; i++) {
    //   for (let j = 0; j < size; j++) {
    //     canvasContext.fillStyle = map.cells[i * size + j].color;
    //     canvasContext.fillRect(i * map.cellSize, j * map.cellSize, map.cellSize, map.cellSize);
    //   }
    // }
  }

  public selectMapCell(canvasContext: any, map: GameMap, x: number, y: number) {
    if (!(map.selected == null || map.selected.x == null || map.selected.y == null)) {
      this.clearCurrentSelectedCell(map);
    }
    let x_cell = this.getCellNumberX(x);
    let y_cell = this.getCellNumberY(y);
    map.selected = map.cells[this.getCellNumberByCoordinates(x, y)];
    canvasContext.fillStyle = "black";
    canvasContext.rect((x_cell * this.cellSize), (y_cell * this.cellSize), this.cellSize, this.cellSize);
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

  private getCellNumberByCoordinates(x: number, y: number): number {
    let mapWidth = this.canvasWidth / this.cellSize;
    return y * mapWidth + x;
  }

  private clearCurrentSelectedCell(map: GameMap) {
    let selectedX = map.selected.x;
    let selectedY = map.selected.y;
  }

}
