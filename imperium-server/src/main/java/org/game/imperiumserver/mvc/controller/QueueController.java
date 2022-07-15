package org.game.imperiumserver.mvc.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.game.dto.QueueDto;
import org.game.imperiumserver.processing.data.mapper.QueueMapper;
import org.game.imperiumserver.processing.game.queue.QueueProcessor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class QueueController {

    private final QueueProcessor queueProcessor;
    private final QueueMapper queueMapper;

    @GetMapping(path = "/get-current-actor")
    public QueueDto getCurrentActor(){
        var queue = queueProcessor.getQueue();
        var queueDto = queueMapper.toDto(queue);
        queueProcessor.moveQueue();
        return queueDto;
    }

}
