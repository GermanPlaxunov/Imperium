import {Component, OnInit} from '@angular/core';
import {MapRenderer} from "../../../map/MapRenderer";
import {GameMap} from "../../../model/GameMap";
import {GameMapService} from "../../../services/GameMapService";
import {Cell} from "../../../model/Cell";

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit {

  gameMap?: GameMap;

  private mapRenderer: MapRenderer;
  private canvas: HTMLCanvasElement;

  constructor(private gameMapService: GameMapService) {
    this.canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
    this.mapRenderer = new MapRenderer(500, 500, 50);
  }

  ngOnInit(): void {
    this.gameMapService.generateMap().subscribe(
      map => {
        let cells = [];
        for (let i = 0; i < map.cells.length; i++) {
          cells[i] = new Cell(map.cells[i].x, map.cells[i].y, map.cells[i].color);
        }
        this.gameMap = new GameMap(map.width, map.height, map.cellSize, map.selected, cells);
        this.initMap()
      }
    );
  }

  initMap(): void {
    let canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
    let context = canvas.getContext("2d")!;
    this.mapRenderer.renderMap(context, this.gameMap!);
  }

  onClick($event: MouseEvent) {
    let x = $event.clientX;
    let y = $event.clientY;
    let canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
    let rect = canvas.getBoundingClientRect();
    let context = canvas.getContext("2d")!;
    let xLabel = document.getElementById("xCellPosition");
    let yLabel = document.getElementById("yCellPosition");
    let xLabelValue = this.mapRenderer.getCellNumberX(x - rect.left).toString();
    let yLabelValue = this.mapRenderer.getCellNumberY(y - rect.top).toString();
    xLabel!.textContent = "x: " + (Number(xLabelValue) + 1);
    yLabel!.textContent = "y: " + (Number(yLabelValue) + 1);
    this.mapRenderer.selectMapCell(context, this.gameMap!, x - rect.left, y - rect.top);
  }
}
