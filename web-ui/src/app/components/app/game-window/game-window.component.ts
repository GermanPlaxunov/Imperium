import {Component, OnInit} from '@angular/core';
import {MapRenderer} from "../../../map/MapRenderer";
import {GameMap} from "../../../model/GameMap";
import {GameMapService} from "../../../services/GameMapService";
import {Cell} from "../../../model/Cell";
import {MapProcessor} from "../../../map/MapProcessor";

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit {

  private canvas: HTMLCanvasElement;

  private mapRenderer?: MapRenderer;
  private mapProcessor?: MapProcessor;
  private gameMap?: GameMap;

  constructor(private gameMapService: GameMapService) {
    this.canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
  }

  ngOnInit(): void {
    this.gameMapService.generateMap().subscribe(
      map => {
        let cells = [];
        for (let i = 0; i < map.cells.length; i++) {
          cells[i] = new Cell(map.cells[i].x, map.cells[i].y, map.cells[i].color);
        }
        this.gameMap = new GameMap(map.width, map.height, map.cellSize, map.selected, cells);
        this.mapRenderer = new MapRenderer(this.gameMap);
        this.mapProcessor = new MapProcessor(map.width, map.height, map.cellSize);
        this.initMap()
      }
    );
  }

  initMap(): void {
    let canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
    let context = canvas.getContext("2d")!;
    this.mapRenderer!.renderMap(context, this.gameMap!);
  }

  onClick($event: MouseEvent) {
    let x = $event.clientX;
    let y = $event.clientY;
    let canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
    let rect = canvas.getBoundingClientRect();
    let context = canvas.getContext("2d")!;
    let xLabel = document.getElementById("xCellPosition");
    let yLabel = document.getElementById("yCellPosition");
    let xLabelValue = this.mapProcessor!.getCellNumberX(x - rect.left).toString();
    let yLabelValue = this.mapProcessor!.getCellNumberY(y - rect.top).toString();
    xLabel!.textContent = "x: " + (Number(xLabelValue) + 1);
    yLabel!.textContent = "y: " + (Number(yLabelValue) + 1);
    this.mapRenderer!.selectMapCell(context, this.gameMap!, x - rect.left, y - rect.top);
  }
}
