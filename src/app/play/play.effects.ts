import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMapTo';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { PlayActions } from './play.actions';

@Injectable()
export class PlayEffects {

    @Effect()
    playTurn = this.actions
        .ofType(PlayActions.PLAY_CARD)
        .mapTo(this.playActions.nextPlayer());

    @Effect()
    setupGame = this.actions
        .ofType(PlayActions.RESET)
        .mergeMapTo([
            this.playActions.shuffle(),
            this.playActions.draw('Player1'),
            this.playActions.draw('Player2'),
            this.playActions.draw('Player3')
        ]);

    constructor(
        private actions: Actions,
        private playActions: PlayActions
    ) { }
}
