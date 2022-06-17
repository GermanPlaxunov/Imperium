import { Component, OnInit } from '@angular/core';
import {ColorSelector} from "../../map/ColorSelector";
import {MapRenderer} from "../../map/MapRenderer";

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit {

  private mapRenderer: MapRenderer = new MapRenderer(500, 500, 50);

  constructor() {
  }

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void{
    let canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
    let context = canvas.getContext("2d")!;
    this.mapRenderer.renderMap(context);
  }

  onClick($event: MouseEvent) {
    let x = $event.clientX;
    let y = $event.clientY;
    let canvas = document.getElementById("mapCanvas") as HTMLCanvasElement;
    let rect = canvas.getBoundingClientRect();
    let context = canvas.getContext("2d")!;
    this.mapRenderer.selectMapCell(context, x - rect.left, y - rect.top);
  }
}
