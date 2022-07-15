package org.game.imperiumserver.processing.game.queue;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.game.imperiumserver.processing.game.Queue;

import java.util.List;

@Slf4j
@Getter
public class QueueProcessor {

    private int qCounter;
    private String currentActor;
    private List<String> queue;

    public Queue getQueue(){
        var queue = new Queue();
        queue.setCurrentActor(this.currentActor);
        queue.setQueue(this.queue);
        return queue;
    }

    public QueueProcessor(){
        queue = new QueueGenerator().generateQueue();
        qCounter = 0;
        currentActor = queue.get(qCounter);
    }

    public void moveQueue(){
        qCounter ++;
        if(qCounter == queue.size()){
            qCounter = 0;
        }
        currentActor = queue.get(qCounter);
    }

}
