package org.game.imperiumserver.config;

import org.game.imperiumserver.processing.data.MapStorage;
import org.game.imperiumserver.processing.game.map.MapInitializer;
import org.game.imperiumserver.processing.game.queue.QueueProcessor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.nio.file.Paths;

@Configuration
public class AppBeans {

    @Bean
    public MapInitializer mapInitializer() {
        return new MapInitializer(500, 500, 50);
    }

    @Bean
    public MapStorage mapStorage(@Value("${game.save.storagePath}") String path){
        return new MapStorage(Paths.get(path + "save.txt"));
    }

    @Bean
    public QueueProcessor queueProcessor(){
        return new QueueProcessor();
    }

}
