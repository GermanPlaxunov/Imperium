package org.game.imperiumserver.processing.data.mapper;

import org.game.dto.QueueDto;
import org.game.imperiumserver.processing.game.Queue;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface QueueMapper {

    @Mapping(source = "queue", target = "queue")
    @Mapping(source = "currentActor", target = "currentActor")
    QueueDto toDto(Queue queue);

}
