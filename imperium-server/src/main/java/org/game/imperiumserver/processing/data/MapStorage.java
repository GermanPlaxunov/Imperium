package org.game.imperiumserver.processing.data;

import lombok.extern.slf4j.Slf4j;
import org.game.imperiumserver.processing.game.map.GameMap;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Slf4j
public class MapStorage {

    private final Path path;

    public MapStorage(Path path){
        this.path = path;
    }

    public void saveMap(GameMap map){
        var builder = new StringBuilder();
        map.getCells().stream().forEach(cell -> {
            builder.append("{")
                    .append(cell.getX())
                    .append(";")
                    .append(cell.getY())
                    .append(";")
                    .append(cell.getCellState().getColor())
                    .append("},\n");
        });
        try {
            Files.createFile(path);
            Files.writeString(path, builder.toString());
            log.info("Map saved on file {}", "save.txt");
        } catch (IOException e) {
            log.error("Error while saving map: {}", e.getMessage());
        }
    }

}
