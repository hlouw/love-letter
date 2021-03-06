import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { PlayComponent } from './play.component';
import { PlayerComponent } from './player';
import { PlayerActionsComponent } from './player-actions';
import { CardCountComponent } from './card-count';
import { CardNamePipe } from './shared/card';
import { routing } from './play.routing';
import { GameActions, GameService, GameEffects } from './shared/game';

@NgModule({
  declarations: [
    PlayComponent,
    CardCountComponent,
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
    ReactiveFormsModule,
    routing,
    EffectsModule.run(GameEffects)
  ]
})
export class PlayModule { }
