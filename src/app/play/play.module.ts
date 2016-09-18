import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { PlayComponent } from './play.component';
import { PlayerComponent } from './player';
import { DeckComponent } from './deck';
import { BurnComponent } from './burn';
import { CardNamePipe } from './shared/card';
import { routing } from './play.routing';
import { GameActions, GameService, reducer, GameEffects } from './shared/game';

@NgModule({
  declarations: [
    PlayComponent,
    DeckComponent,
    BurnComponent,
    PlayerComponent,
    CardNamePipe
  ],
  providers: [
    GameActions,
    GameService
  ],
  imports: [
    CommonModule,
    routing,
    EffectsModule.run(GameEffects)
  ]
})
export class PlayModule {

  static reducers = reducer;
}
