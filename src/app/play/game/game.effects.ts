import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/switchMapTo';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { GameActions } from './game.actions';

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

  constructor(
    private actions: Actions,
    private gameActions: GameActions
  ) { }
}
