package org.game.imperiumserver.mvc.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.game.imperiumserver.processing.data.MapStorage;
import org.game.imperiumserver.processing.game.map.MapInitializer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ImperiumController {

    private final MapInitializer mapInitializer;
    private final MapStorage storage;

    @GetMapping(path = "/save-map")
    public void saveMap(){
        var map = mapInitializer.initMap();
        storage.saveMap(map);
    }

}
