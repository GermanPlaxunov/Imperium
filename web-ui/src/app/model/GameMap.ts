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
  private _width: number;
  private _height: number;
  private _cellSize: number;
  private _selected: Cell;
  private _cells: Cell[];

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

  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get cellSize(): number {
    return this._cellSize;
  }

  set cellSize(value: number) {
    this._cellSize = value;
  }

  get selected(): Cell {
    return this._selected;
  }

  set selected(value: Cell) {
    this._selected = value;
  }

  get cells(): Cell[] {
    return this._cells;
  }

  set cells(value: Cell[]) {
    this._cells = value;
  }
}
