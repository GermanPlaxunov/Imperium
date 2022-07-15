import {Cell} from "../model/Cell";
import {GameConverter} from "./GameConverter";

export class MapProcessor {

  private readonly cellsHashMap: Map<string, Cell>;
  private readonly canvasWidth: number;
  private readonly canvasHeight: number;
  private readonly cellSize: number;

  constructor(canvasWidth: number, canvasHeight: number, cellSize: number, cellsList: Cell[]) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.cellSize = cellSize;
    this.cellsHashMap = new GameConverter().convertCellsArrayToMap(cellsList);
  }

  public getCellFromMapByCoordinates(x: number, y: number) : Cell{
    return this.cellsHashMap.get(x.toString() + "::" + y.toString())!;
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
