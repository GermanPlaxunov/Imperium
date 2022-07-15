import {MapProcessor} from "./MapProcessor";

export class CellInformationProvider {

  constructor(private mapProcessor: MapProcessor) {
  }

  public fillCellData(xScreenClick: number, yScreenClick: number, rectBounds: any){
    let xCellNum = this.getXCellNumber(rectBounds, xScreenClick);
    let yCellNum = this.getYCellNumber(rectBounds, yScreenClick);
    this.fillCoordinates(xCellNum, yCellNum);
    this.fillCellState(xCellNum, yCellNum);
  }

  private fillCoordinates(xCell: number, yCell: number) {
    let xLabel = document.getElementById("xCellPosition")!;
    let yLabel = document.getElementById("yCellPosition")!;
    xLabel.textContent = "x: " + (xCell + 1);
    yLabel.textContent = "y: " + (yCell + 1);
  }

  private fillCellState(xCell: number, yCell: number){
    let populationLabel = document.getElementById("cellPopulation");
    let armyLabel = document.getElementById("cellArmy");
    let cell = this.mapProcessor.getCellFromMapByCoordinates(xCell, yCell);
    populationLabel!.textContent = "population: " + cell.population;
    armyLabel!.textContent = "army: " + cell.army;
  }

  private getXCellNumber(canvasRect: any, xScreen: number): number {
    return this.mapProcessor.getCellNumberX(xScreen - canvasRect.left);
  }

  private getYCellNumber(canvasRect: any, yScreen: number): number {
    return this.mapProcessor.getCellNumberY(yScreen - canvasRect.top);
  }

}
