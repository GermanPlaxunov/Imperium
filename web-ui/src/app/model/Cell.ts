import {Status} from "./Status";

export interface CellDto extends Status {
  x: number;
  y: number;
  color: number;
}

export class Cell {
  private readonly _x: number;
  private readonly _y: number;
  private readonly _color: string;

  constructor(x: number, y: number, color: string) {
    this._x = x;
    this._y = y;
    this._color = color;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get color(): string {
    return this._color;
  }
}
