package org.game.imperiumserver.processing.data.mapper;

import org.game.dto.CellDto;
import org.game.imperiumserver.processing.game.map.Cell;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper
public interface CellMapper {
    @Mappings({
            @Mapping(source = "x", target = "x"),
            @Mapping(source = "y", target = "y"),
            @Mapping(source = "cellState.color", target = "color")
    })
    CellDto toDto(Cell cell);

    @Mappings({
            @Mapping(source = "x", target = "x"),
            @Mapping(source = "y", target = "y"),
            @Mapping(source = "cellState.color", target = "color")
    })
    List<CellDto> toDtos(List<Cell> cells);
}
