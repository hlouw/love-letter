import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';

import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { GameActions } from './game.actions';
import { AIService } from './ai.service';
import { GameState, PlayerType } from './game.reducer';

@Injectable()
export class GameEffects {

  @Effect()
  newGame = this.actions
    .ofType(GameActions.NEW_GAME)
    .mergeMap(payload => [
      this.gameActions.shuffleDeck(),
      this.gameActions.burnCard(),
      this.gameActions.drawCard(0),
      this.gameActions.drawCard(1),
      this.gameActions.drawCard(2),
      this.gameActions.drawCard(0)
    ]);

  @Effect()
  endTurn = this.actions
    .ofType(GameActions.PLAY_CARD)
    .mapTo(this.gameActions.turnComplete());

  @Effect()
  playAITurn = this.actions
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
    private gameActions: GameActions,
    private aiService: AIService
  ) { }
}
