package org.game.dto;

import java.util.List;

public class QueueDto {
    private String currentActor;
    private List<String> queue;

    public QueueDto(String currentActor, List<String> queue) {
        this.currentActor = currentActor;
        this.queue = queue;
    }

    public List<String> getQueue() {
        return queue;
    }

    public void setQueue(List<String> queue) {
        this.queue = queue;
    }

    public String getCurrentActor() {
        return currentActor;
    }

    public void setCurrentActor(String currentActor) {
        this.currentActor = currentActor;
    }
}
