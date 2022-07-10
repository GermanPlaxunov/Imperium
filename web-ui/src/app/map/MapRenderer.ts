import {GameMap} from "../model/GameMap";
import {MapProcessor} from "./MapProcessor";
import {GameConverter} from "./GameConverter";
import {Cell} from "../model/Cell";

export class MapRenderer {

  private readonly cellHashMap: Map<string, Cell>;
  private readonly canvasWidth: number;
  private readonly canvasHeight: number;
  private readonly cellSize: number;

  private mapProcessor: MapProcessor;

  constructor(gameMap: GameMap) {
    this.cellHashMap = new GameConverter().convertCellsArrayToMap(gameMap.cells);
    this.mapProcessor = new MapProcessor(gameMap.width, gameMap.height, gameMap.cellSize, gameMap.cells);
    this.canvasWidth = gameMap.width;
    this.canvasHeight = gameMap.height;
    this.cellSize = gameMap.cellSize;
  }

  public renderMap(canvasContext: any) {
    this.cellHashMap.forEach((cell) => {
      canvasContext.fillStyle = cell.color;
      canvasContext.fillRect(cell.x * this.cellSize, cell.y * this.cellSize, this.cellSize, this.cellSize);
    })
  }

  public selectMapCell(canvasContext: any, map: GameMap, x: number, y: number) {
    if (map.selected != null) {
      this.clearCurrentSelectedCell(map, canvasContext);
    }
    let x_cell = this.mapProcessor.getCellNumberX(x);
    let y_cell = this.mapProcessor.getCellNumberY(y);
    map.selected = this.mapProcessor.getCellFromMapByCoordinates(x_cell, y_cell)
    canvasContext.fillStyle = "black";
    canvasContext.strokeRect((x_cell * this.cellSize), (y_cell * this.cellSize), this.cellSize, this.cellSize);
  }

  private clearCurrentSelectedCell(map: GameMap, ctx: any) {
    let selectedX = map.selected.x;
    let selectedY = map.selected.y;
    ctx.clearRect(selectedX * this.cellSize, selectedY * this.cellSize, this.cellSize, this.cellSize);
    ctx.fillStyle = this.mapProcessor.getCellFromMapByCoordinates(selectedX, selectedY).color;
    ctx.fillRect((selectedX * this.cellSize) - 1, (selectedY * this.cellSize) - 1, this.cellSize + 2, this.cellSize + 2);
    ctx.stroke();
  }

}
