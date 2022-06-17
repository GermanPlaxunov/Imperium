package org.game.imperiumserver.processing.game.team;

import java.util.Random;

public class TeamColorSelector {

    private Random random = new Random();

    public String getRandomColor(){
        switch (random.nextInt(4)){
            case 0:
                return TeamColors.BLUE.getColor();
            case 1:
                return TeamColors.GREEN.getColor();
            case 2:
                return TeamColors.ORANGE.getColor();
            case 3:
                return TeamColors.RED.getColor();
            default:
                return TeamColors.GREY.getColor();
        }
    }

}
