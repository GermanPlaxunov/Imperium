package org.game.imperiumserver.processing.game.map;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Cell {

    private int x;
    private int y;
    private CellState cellState;

}
