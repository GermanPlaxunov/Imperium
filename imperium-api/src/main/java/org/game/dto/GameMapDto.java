package org.game.dto;

import java.util.List;

public class GameMapDto {

    private int width;
    private int height;
    private int cellSize;
    private CellDto selected;
    private List<CellDto> cells;

    public CellDto getSelected() {
        return selected;
    }

    public void setSelected(CellDto selected) {
        this.selected = selected;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
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
