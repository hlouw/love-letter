import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { PlayComponent } from './play.component';
import { PlayerComponent } from './player';
import { DeckComponent } from './deck';
import { BurnComponent } from './burn/burn.component';
import { CardNamePipe } from './shared';
import { routing } from './play.routing';
import { GameActions, AIService, reducer, GameEffects } from './game';

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
    AIService
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
