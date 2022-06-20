import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { GameWindowComponent } from './components/app/game-window/game-window.component';
import {HttpClientModule} from "@angular/common/http";
import { ActionPanelComponent } from './components/app/action-panel/action-panel.component';
import { InfoPanelComponent } from './components/app/info-panel/info-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    GameWindowComponent,
    ActionPanelComponent,
    InfoPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
