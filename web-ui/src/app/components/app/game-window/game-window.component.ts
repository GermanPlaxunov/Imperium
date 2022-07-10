import {Component, OnInit} from '@angular/core';
import {MapRenderer} from "../../../map/MapRenderer";
import {GameMap} from "../../../model/GameMap";
import {GameMapService} from "../../../services/GameMapService";
import {Cell} from "../../../model/Cell";
import {MapProcessor} from "../../../map/MapProcessor";
import {CellInformationProvider} from "../info-panel/CellInformationProvider";

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit {

  private canvas: HTMLCanvasElement;

  private mapRenderer?: MapRenderer;
  private mapProcessor?: MapProcessor;
  private cellInfoProvider?: CellInformationProvider;

  gameMap?: GameMap;

  constructor(private gameMapService: GameMapService) {
    this.canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
  }

  ngOnInit(): void {
    this.gameMapService.generateMap().subscribe(
      map => {
        let cells = [];
        for (let i = 0; i < map.cells.length; i++) {
          cells[i] = new Cell(map.cells[i].x,
            map.cells[i].y,
            map.cells[i].army,
            map.cells[i].population,
            map.cells[i].color
          );
        }
        this.gameMap = new GameMap(map.width, map.height, map.cellSize, map.selected, cells);
        this.mapRenderer = new MapRenderer(this.gameMap);
        this.mapProcessor = new MapProcessor(map.width, map.height, map.cellSize, map.cells);
        this.cellInfoProvider = new CellInformationProvider(this.mapProcessor);
        this.initMap()
      }
    );
  }

  initMap(): void {
    let canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
    let context = canvas.getContext("2d")!;
    this.mapRenderer!.renderMap(context);
  }

  onClick($event: MouseEvent) {
    let x = $event.clientX;
    let y = $event.clientY;
    let canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
    let rect = canvas.getBoundingClientRect();
    this.cellInfoProvider?.fillCellData(x, y, rect);
    let context = canvas.getContext("2d")!;
    this.mapRenderer!.selectMapCell(context, this.gameMap!, x - rect.left, y - rect.top);
  }
}
