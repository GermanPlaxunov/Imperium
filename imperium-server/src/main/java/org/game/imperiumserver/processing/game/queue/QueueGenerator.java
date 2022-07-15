package org.game.imperiumserver.processing.game.queue;

import org.game.imperiumserver.processing.game.team.TeamColors;

import java.util.ArrayList;
import java.util.List;

public class QueueGenerator {

    public List<String> generateQueue(){
        var queue = new ArrayList<String>();
        queue.add(TeamColors.BLUE.getColor());
        queue.add(TeamColors.RED.getColor());
        queue.add(TeamColors.GREEN.getColor());
        queue.add(TeamColors.ORANGE.getColor());
        return queue;
    }

}
