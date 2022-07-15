import {Component, Input, OnInit} from '@angular/core';
import {CellInformationProvider} from "../../../map/CellInformationProvider";
import {MapProcessor} from "../../../map/MapProcessor";

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {

  @Input() cellInfoProvider?: CellInformationProvider;
  @Input() mapProcessor?: MapProcessor;
  @Input() canvas?: HTMLCanvasElement;

  constructor() { }

  ngOnInit(): void {
  }

  fillCellData($event: MouseEvent){
    let xLabel = document.getElementById("xCellPosition")!;
    let yLabel = document.getElementById("yCellPosition")!;
    let armyLabel = document.getElementById("cellArmy")!;
    let population = document.getElementById("cellPopulation")!;
    let mapClickX = $event.clientX - this.canvas?.getBoundingClientRect().left!;
    let mapClickY = $event.clientY - this.canvas?.getBoundingClientRect().top!;
    let cellX = this.mapProcessor!.getCellNumberX(mapClickX)!;
    let cellY = this.mapProcessor!.getCellNumberY(mapClickY)!;
    let cell = this.mapProcessor!.getCellFromMapByCoordinates(cellX, cellY)!;
    xLabel.textContent = 'x: ' + (cellX + 1).toString();
    yLabel.textContent = 'y: ' + (cellY + 1).toString();
    armyLabel.textContent = 'army: ' + cell.army.toString();
    population.textContent = 'population: ' + cell.population.toString();
  }

}
