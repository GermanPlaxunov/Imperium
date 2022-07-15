package org.game.imperiumserver.processing.game;

import lombok.Data;

import java.util.List;

@Data
public class Queue {
    private List<String> queue;
    private String currentActor;
}
