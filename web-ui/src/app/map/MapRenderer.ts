import {GameMap} from "../model/GameMap";
import {MapProcessor} from "./MapProcessor";
import {GameConverter} from "./GameConverter";

export class MapRenderer {

  private readonly canvasWidth: number;
  private readonly canvasHeight: number;
  private readonly cellSize: number;

  private mapProcessor: MapProcessor;
  private gameConverter: GameConverter;

  constructor(gameMap: GameMap) {
    this.mapProcessor = new MapProcessor(gameMap.width, gameMap.height, gameMap.cellSize);
    this.gameConverter = new GameConverter();
    this.canvasWidth = gameMap.width;
    this.canvasHeight = gameMap.height;
    this.cellSize = gameMap.cellSize;
  }

  public renderMap(canvasContext: any, map: GameMap) {
    let cellsMap = this.gameConverter.convertCellsArrayToMap(map.cells);
    cellsMap.forEach((cell) => {
      canvasContext.fillStyle = cell.color;
      canvasContext.fillRect(cell.x * this.cellSize, cell.y * this.cellSize, this.cellSize, this.cellSize);
    })
  }

  public selectMapCell(canvasContext: any, map: GameMap, x: number, y: number) {
    this.clearCurrentSelectedCell(map, canvasContext);
    let x_cell = this.mapProcessor.getCellNumberX(x);
    let y_cell = this.mapProcessor.getCellNumberY(y);
    map.selected = map.cells[this.getCellNumberByCoordinates(x, y)];
    canvasContext.fillStyle = "black";
    canvasContext.rect((x_cell * this.cellSize), (y_cell * this.cellSize), this.cellSize, this.cellSize);
    canvasContext.stroke();
  }

  private getCellNumberByCoordinates(x: number, y: number): number {
    let mapWidth = this.canvasWidth / this.cellSize;
    return y * mapWidth + x;
  }

  private clearCurrentSelectedCell(map: GameMap, ctx: any) {
    let selectedX = map.selected.x;
    let selectedY = map.selected.y;
    ctx.fillStyle = map.selected.color;
    ctx.rect(selectedX * this.cellSize, selectedY * this.cellSize, this.cellSize, this.cellSize);
    ctx.stroke();
  }

}
