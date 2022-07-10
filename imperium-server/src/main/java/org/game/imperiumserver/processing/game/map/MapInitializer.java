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
    private final int width;
    private final int height;
    private final int cellSize;

    public GameMap initMap() {
        var cells = new ArrayList<Cell>();
        var map = new GameMap(height, width, cellSize);
        var mapWidth = (width / cellSize);
        var mapHeight = (height / cellSize);
        for (var x = 1; x < mapWidth - 1; x++) {
            for (var y = 1; y < mapHeight - 1; y++) {
                cells.add(new Cell(x, y, new CellState(15, 30, TeamColors.GREY.getColor())));
            }
        }
        map.setCells(cells);
        setSideGreyCells(map, mapWidth - 1, mapHeight - 1);
        setTeamCellsOnCorners(map, mapWidth - 1, mapHeight - 1);
        log.info("Map initialized. Map Size: {}", cells.size());
        return map;
    }

    private void setTeamCellsOnCorners(GameMap map, int mapWidth, int mapHeight) {
        map.getCells().add(new Cell(0, 0, new CellState(30, 80, TeamColors.GREEN.getColor())));
        map.getCells().add(new Cell(0, mapWidth, new CellState(30, 80, TeamColors.BLUE.getColor())));
        map.getCells().add(new Cell(mapHeight, 0, new CellState(30, 80, TeamColors.RED.getColor())));
        map.getCells().add(new Cell(mapWidth, mapHeight, new CellState(30, 80, TeamColors.ORANGE.getColor())));
    }

    private void setSideGreyCells(GameMap map, int mapWidth, int mapHeight) {
        for (var i = 1; i < mapWidth; i++) {
            map.getCells().add(new Cell(i, 0, new CellState(15, 30, TeamColors.GREY.getColor())));
            map.getCells().add(new Cell(i, mapHeight, new CellState(15, 30, TeamColors.GREY.getColor())));
        }
        for(var i = 1; i < mapHeight; i++){
            map.getCells().add(new Cell(0, i, new CellState(15, 30, TeamColors.GREY.getColor())));
            map.getCells().add(new Cell(mapWidth, i, new CellState(15, 30, TeamColors.GREY.getColor())));
        }
    }
}
