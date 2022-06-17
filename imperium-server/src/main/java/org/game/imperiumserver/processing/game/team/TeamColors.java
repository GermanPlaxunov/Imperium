package org.game.imperiumserver.processing.game.team;

public enum TeamColors {
    BLUE("blue"),
    GREEN("green"),
    ORANGE("orange"),
    RED("red"),
    GREY("grey");

    private String color;

    TeamColors(String color) {
        this.color = color;
    }

    public String getColor(){
        return color;
    }
}
