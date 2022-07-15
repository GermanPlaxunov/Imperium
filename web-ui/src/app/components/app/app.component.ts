import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-ui';

  getCanvas() {
    return document.getElementById("mapCanvas") as HTMLCanvasElement;
  }
}
