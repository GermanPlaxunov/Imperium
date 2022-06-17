package org.game.imperiumserver.processing.game.map;

import lombok.Data;

import java.util.List;

@Data
public class GameMap {

    private int width;
    private int height;
    private int cellSize;
    private List<Cell> cells;

}
