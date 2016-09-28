import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';

import { PlayComponent } from './play.component';
import { PlayerComponent } from './player';
import { PlayerActionsComponent } from './player-actions';
import { DeckComponent } from './deck';
import { BurnComponent } from './burn';
import { CardCountComponent } from './card-count';
import { CardNamePipe } from './shared/card';
import { routing } from './play.routing';
import { GameActions, GameService, reducer, GameEffects } from './shared/game';

@NgModule({
  declarations: [
    PlayComponent,
    DeckComponent,
    CardCountComponent,
    BurnComponent,
    PlayerComponent,
    PlayerActionsComponent,
    CardNamePipe
  ],
  providers: [
    GameActions,
    GameService
  ],
  imports: [
    CommonModule,
    FormsModule,
    routing,
    EffectsModule.run(GameEffects)
  ]
})
export class PlayModule {

  static reducers = reducer;
}
