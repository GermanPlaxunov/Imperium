import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GameMapDto} from "../model/GameMap";

@Injectable({
  providedIn: 'root'
})
export class GameMapService{

  SERVER = "http://localhost:8080/imperium";

  constructor(private http: HttpClient) {
  }

  generateMap(){
    return this.http.get<GameMapDto>(this.SERVER + "/generate-new-map");
  }

}
