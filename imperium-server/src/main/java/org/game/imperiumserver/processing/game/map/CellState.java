package org.game.imperiumserver.processing.game.map;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CellState {
    private int army;
    private int population;
    private String color;
}
