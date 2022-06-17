import {Cell} from "./Cell";
import {Status} from "./Status";

export interface GameMapDto extends Status {
  width: number;
  height: number;
  cellSize: number;
  selected: Cell;
  cells: Cell[];
}

export class GameMap {
  private readonly _width: number;
  private readonly _height: number;
  private readonly _cellSize: number;
  private readonly _selected: Cell;
  private readonly _cells: Cell[];

  constructor(width: number, height: number, cellSize: number, selected: Cell, cells: Cell[]) {
    this._width = width;
    this._height = height;
    this._cellSize = cellSize;
    this._selected = selected;
    this._cells = cells;
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  get cellSize(): number {
    return this._cellSize;
  }

  get selected(): Cell {
    return this._selected;
  }

  get cells(): Cell[] {
    return this._cells;
  }
}
