package org.game.dto;

import java.util.List;

public class GameMapDto {

    private int size;
    private int cellSize;
    private CellDto selected;
    private List<CellDto> cells;

    public CellDto getSelected() {
        return selected;
    }

    public void setSelected(CellDto selected) {
        this.selected = selected;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getCellSize() {
        return cellSize;
    }

    public void setCellSize(int cellSize) {
        this.cellSize = cellSize;
    }

    public List<CellDto> getCells() {
        return cells;
    }

    public void setCells(List<CellDto> cells) {
        this.cells = cells;
    }
}
