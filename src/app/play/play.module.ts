import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player';
import { DeckComponent } from "./deck";
import { CardNamePipe } from "./shared";
import { routing } from "./play.routing";
import { PlayActions } from "./play.actions";
import { PlayReducer } from "./play.reducer";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    DeckComponent,
    PlayerComponent,
    CardNamePipe
  ],
  providers: [
    PlayActions
  ]
})
export class PlayModule {

  static reducers = {
    play: PlayReducer.reducer
  };
}
