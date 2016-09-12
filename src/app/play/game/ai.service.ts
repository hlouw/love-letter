import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { GameActions } from './game.actions';
import { GameState } from './game.reducer';

@Injectable()
export class AIService {

    constructor(
        private gameActions: GameActions
    ) { }

    playAITurn(action: Action, state: GameState): Action {
        return this.gameActions.playCard(0);
    }
}
