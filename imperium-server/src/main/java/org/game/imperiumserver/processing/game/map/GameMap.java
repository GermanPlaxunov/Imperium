package org.game.imperiumserver.processing.game.map;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Data
@RequiredArgsConstructor
public class GameMap {

    private final int height;
    private final int width;
    private final int cellSize;
    private Cell selected;
    private List<Cell> cells;

}
