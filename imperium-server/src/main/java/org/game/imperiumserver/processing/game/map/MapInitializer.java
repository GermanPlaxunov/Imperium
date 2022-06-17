package org.game.imperiumserver.processing.game.map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.game.imperiumserver.processing.game.team.TeamColorSelector;

import java.util.ArrayList;

@Data
@Slf4j
@AllArgsConstructor
public class MapInitializer {

    private final Integer width;
    private final Integer height;
    private final Integer cellSize;

    public GameMap initMap() {
        var colorSelector = new TeamColorSelector();
        var cells = new ArrayList<Cell>();
        var map = new GameMap(width, height, cellSize);
        for (var x = 0; x < width / cellSize; x ++) {
            for(var y = 0; y < height / cellSize; y ++){
                cells.add(new Cell(x, y, new CellState(colorSelector.getRandomColor())));
            }
        }
        map.setCells(cells);
        log.info("Map initialized. Map Size: {}", cells.size());
        return map;
    }

}
