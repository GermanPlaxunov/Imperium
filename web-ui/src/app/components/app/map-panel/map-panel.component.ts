import {Component, Input, OnInit} from '@angular/core';
import {GameMap} from "../../../model/GameMap";
import {MapProcessor} from "../../../map/MapProcessor";
import {MapRenderer} from "../../../map/MapRenderer";

@Component({
  selector: 'app-map-panel',
  templateUrl: './map-panel.component.html',
  styleUrls: ['./map-panel.component.css']
})
export class MapPanelComponent implements OnInit {

  @Input() canvas?: HTMLCanvasElement;
  @Input() mapProcessor?: MapProcessor;
  @Input() mapRenderer?: MapRenderer;
  @Input() gameMap?: GameMap;

  constructor() {
  }

  ngOnInit(): void {
    this.mapRenderer?.renderMap(this.canvas!.getContext("2d"));
  }

  onMapCellClick($event: MouseEvent) {
    let xClick = $event.clientX;
    let yClick = $event.clientY;
    let rectTop = this.canvas!.getBoundingClientRect().top;
    let rectLeft = this.canvas!.getBoundingClientRect().left;
    this.mapRenderer?.selectMapCell(this.canvas!.getContext("2d"), this.gameMap!, xClick - rectLeft, yClick - rectTop);
  }
}
