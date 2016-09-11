import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concatMapTo';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { GameActions } from './game.actions';
import { AIService } from './ai.service';

@Injectable()
export class AIEffects {

  @Effect()
  playTurn = this.actions
    .ofType(GameActions.TURN_COMPLETE)
    .switchMapTo(this.aiService.playCurrentTurn());

  constructor(
    private actions: Actions,
    private gameActions: GameActions,
    private aiService: AIService
  ) { }
}
