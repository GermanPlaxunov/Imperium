package org.game.imperiumserver.mvc.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.game.dto.GameMapDto;
import org.game.imperiumserver.processing.data.MapStorage;
import org.game.imperiumserver.processing.data.mapper.CellMapper;
import org.game.imperiumserver.processing.data.mapper.GameMapMapper;
import org.game.imperiumserver.processing.game.map.MapInitializer;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ImperiumController {

    private final MapInitializer mapInitializer;
    private final GameMapMapper gameMapMapper;
    private final CellMapper cellMapper;
    private final MapStorage storage;

    @GetMapping(path = "/save-map")
    public void saveMap(){
        var map = mapInitializer.initMap();
        storage.saveMap(map);
    }

    @GetMapping(path = "/generate-new-map")
    public GameMapDto generateNewMap(){
        var newMap = mapInitializer.initMap();
        var cellsDto = cellMapper.toDtos(newMap.getCells());
        var mapDto = gameMapMapper.toDto(newMap);
        mapDto.setCells(cellsDto);
        return mapDto;
    }

}
