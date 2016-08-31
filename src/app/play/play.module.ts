import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play.component';
import { PlayerComponent } from './player';
import { DeckComponent } from './deck';
import { CardNamePipe } from './shared';
import { routing } from './play.routing';
import { GameActions, AIService, reducer } from './game';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    DeckComponent,
    PlayComponent,
    PlayerComponent,
    CardNamePipe
  ],
  providers: [
    GameActions,
    AIService
  ]
})
export class PlayModule {

  static reducers = reducer;
}
