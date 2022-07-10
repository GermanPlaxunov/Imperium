import {Status} from "./Status";

export interface CellDto extends Status {
  x: number;
  y: number;
  color: number;
}

export class Cell {
  private readonly _x: number;
  private readonly _y: number;
  private readonly _army: number;
  private readonly _population: number;
  private readonly _color: string;

  constructor(x: number, y: number, army: number, population: number, color: string) {
    this._x = x;
    this._y = y;
    this._army = army;
    this._population = population;
    this._color = color;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get army(): number {
    return this._army;
  }

  get population(): number {
    return this._population;
  }

  get color(): string {
    return this._color;
  }
}
