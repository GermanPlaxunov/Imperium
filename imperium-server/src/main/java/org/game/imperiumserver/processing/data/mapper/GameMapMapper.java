package org.game.imperiumserver.processing.data.mapper;

import org.game.dto.GameMapDto;
import org.game.imperiumserver.processing.game.map.GameMap;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper
public interface GameMapMapper {

    @Mappings({
            @Mapping(source = "width", target = "width"),
            @Mapping(source = "height", target = "height"),
            @Mapping(source = "cellSize", target = "cellSize"),
            @Mapping(source = "cells", target = "cells")
    })
    GameMapDto toDto(GameMap map);
}
