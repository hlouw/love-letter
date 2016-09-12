import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { PlayComponent } from './play.component';
import { PlayerComponent } from './player';
import { DeckComponent } from './deck';
import { CardNamePipe } from './shared';
import { routing } from './play.routing';
import { GameActions, AIService, reducer, AIEffects, GameEffects } from './game';

@NgModule({
  declarations: [
    PlayComponent,
    DeckComponent,
    PlayerComponent,
    CardNamePipe
  ],
  providers: [
    GameActions,
    AIService
  ],
  imports: [
    CommonModule,
    routing,
    EffectsModule.run(GameEffects),
    EffectsModule.run(AIEffects)
  ]
})
export class PlayModule {

  static reducers = reducer;
}
