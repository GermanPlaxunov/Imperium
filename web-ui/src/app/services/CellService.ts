import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CellService{

  SERVER = "http://localhost:8080/imperium";

  constructor(private http: HttpClient) {
  }

  getCellsForMap(){
    return this.http.get(this.SERVER + "");
  }
}
