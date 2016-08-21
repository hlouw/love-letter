import { Component } from '@angular/core';
import { PlayState } from "./play-area/play-area.reducer";

export interface AppState {
  play: PlayState;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.less']
})
export class AppComponent {
  title = 'app works!';
}
