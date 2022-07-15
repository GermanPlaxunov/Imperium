import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {QueueDto} from "../model/Queue";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  SERVER = "http://localhost:8080/imperium";

  constructor(private http: HttpClient) {
  }

  getCurrentActor(): Observable<QueueDto> {
    return this.http.get<QueueDto>(this.SERVER + "/get-current-actor");
  }

}
