package org.game.imperiumserver.processing.game.map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.game.imperiumserver.processing.game.team.TeamColorSelector;
import org.game.imperiumserver.processing.game.team.TeamColors;

import java.util.ArrayList;

@Data
@Slf4j
@AllArgsConstructor
public class MapInitializer {
    private final int mapSize;
    private final Integer cellSize;

    public GameMap initMap() {
        var cells = new ArrayList<Cell>();
        var map = new GameMap(mapSize, cellSize);
        var mapSideSize = (mapSize / cellSize) - 1;
        for (var x = 0; x <= mapSideSize; x++) {
            for (var y = 0; y <= mapSideSize; y++) {
                cells.add(new Cell(x, y, new CellState(TeamColors.GREY.getColor())));
            }
        }
        map.setCells(cells);
        setTeamCellsOnCorners(map, mapSideSize);
        log.info("Map initialized. Map Size: {}", cells.size());
        return map;
    }

    private void setTeamCellsOnCorners(GameMap map, int mapSideSize) {
        map.getCells().add(new Cell(0, 0, new CellState(TeamColors.GREEN.getColor())));
        map.getCells().add(new Cell(0, mapSideSize, new CellState(TeamColors.BLUE.getColor())));
        map.getCells().add(new Cell(mapSideSize, 0, new CellState(TeamColors.RED.getColor())));
        map.getCells().add(new Cell(mapSideSize, mapSideSize, new CellState(TeamColors.ORANGE.getColor())));
    }

    private void setSideGreyCells(GameMap map, int mapSideSize) {
        for (var i = 1; i < mapSideSize - 1; i++) {
            map.getCells().add(new Cell(0, i, new CellState(TeamColors.GREY.getColor())));
            map.getCells().add(new Cell(mapSideSize, i, new CellState(TeamColors.GREY.getColor())));
            map.getCells().add(new Cell(i, 0, new CellState(TeamColors.GREY.getColor())));
            map.getCells().add(new Cell(i, mapSideSize, new CellState(TeamColors.GREY.getColor())));
        }
    }
}
