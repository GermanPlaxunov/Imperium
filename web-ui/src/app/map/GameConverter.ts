import {Cell} from "../model/Cell";

export class GameConverter {

  public convertCellsArrayToMap(cellsArr: Cell[]): Map<string, Cell> {
    let map = new Map();
    cellsArr.forEach(
      (cell) => map.set(
        cell.x.toString() + "::" + cell.y.toString(), cell
      )
    )
    return map;
  }

}
