import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';

import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { GameActions } from './game.actions';
import { AIService } from './ai.service';
import { GameState, PlayerType } from './game.reducer';

@Injectable()
export class AIEffects {

  @Effect()
  playTurn = this.actions
    .ofType(GameActions.TURN_COMPLETE)
    .withLatestFrom(this.store.select(s => s.game))
    .filter((actionState: [Action, GameState]) => {
      let state = actionState[1];
      let newPlayer = state.players[state.playerQueue[0]];
      return newPlayer.type === PlayerType.AI;
    })
    .map((actionState: [Action, GameState]) => this.aiService.playAITurn(actionState[0], actionState[1]));

  constructor(
    private store: Store<any>,
    private actions: Actions,
    private aiService: AIService
  ) { }
}
