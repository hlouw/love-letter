import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/switchMapTo';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { GameActions } from './game.actions';
import { AIService } from './ai.service';

@Injectable()
export class AIEffects {

  @Effect()
  playTurn = this.actions
    .ofType(GameActions.TURN_COMPLETE)
    .mapTo(this.aiService.playCurrentTurn);

  constructor(
    private actions: Actions,
    private aiService: AIService
  ) { }
}
