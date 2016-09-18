import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { GameActions } from './game.actions';
import { GameState } from './game.reducer';

@Injectable()
export class GameService {

    constructor(
        private gameActions: GameActions
    ) { }

    playAITurn(state: GameState): Action {
        const actions = this.legalActions(state);
        const whichAction = Math.round(Math.random() * (actions.length - 1));
        return actions[whichAction];
    }

    legalActions(state: GameState): Action[] {
        let actions: Action[] = [];

        // const currentPlayer = state.players[state.playerQueue[0]];
        actions.push(this.gameActions.playCard(0));
        actions.push(this.gameActions.playCard(1));

        return actions;
    }
}
