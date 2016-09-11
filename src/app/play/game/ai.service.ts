import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/filter';

import { Injectable, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GameActions } from './game.actions';
import { GameState, PlayerType } from './game.reducer';

@Injectable()
export class AIService implements OnInit {

    private gameState: Observable<GameState>;

    constructor(
        private store: Store<any>,
        private gameActions: GameActions
    ) { }

    ngOnInit() {
        this.gameState = this.store.select(s => s.game);
    }

    playCurrentTurn(): Observable<Action> {
        return this.gameState
            .map(s => s.players[s.playerQueue[0]])
            .filter(player => player.type === PlayerType.AI)
            .mapTo(this.gameActions.playCard(0));
    }

}
