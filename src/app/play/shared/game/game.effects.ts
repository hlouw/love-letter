import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';

import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { GameActions } from './game.actions';
import { GameService } from './game.service';
import { GameState, PlayerType } from './game.reducer';

@Injectable()
export class GameEffects {

  @Effect()
  newGame = this.actions
    .ofType(GameActions.NEW_GAME)
    .mergeMapTo([
      this.gameActions.shuffleDeck(),
      this.gameActions.burnCard(),
      this.gameActions.drawCard(0),
      this.gameActions.drawCard(1),
      this.gameActions.drawCard(2),
      this.gameActions.drawCard(0)
    ]);

  @Effect()
  applyCardEffects = this.actions
    .ofType(GameActions.PLAY_CARD)
    .withLatestFrom(this.store.select(s => s.game))
    .mergeMap(([action, state]: [Action, GameState]) => {
      return [
        ... this.gameService.cardEffects(action, state),
        this.gameActions.turnComplete()
      ];
    });

  @Effect()
  proceedToNextTurn = this.actions
    .ofType(GameActions.TURN_COMPLETE)
    .withLatestFrom(this.store.select(s => s.game))
    .filter(([action, state]: [Action, GameState]) => state.inProgress)
    .mapTo(this.gameActions.nextTurn());

  @Effect()
  playAITurn = this.actions
    .ofType(GameActions.NEXT_TURN)
    .withLatestFrom(this.store.select(s => s.game))
    .filter(([action, state]: [Action, GameState]) => {
      const nextPlayer = state.players[state.playerQueue[0]];
      return nextPlayer.type === PlayerType.AI;
    })
    .map(([action, state]: [Action, GameState]) => {
      return this.gameService.playAITurn(state);
    });

  constructor(
    private store: Store<any>,
    private actions: Actions,
    private gameActions: GameActions,
    private gameService: GameService
  ) { }
}
