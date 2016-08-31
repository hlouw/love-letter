import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GameState, PlayerType } from './game.reducer';
import { GameActions } from './game.actions';

@Injectable()
export class AIService {

  private state: Observable<GameState>;

  constructor(store: Store<any>, private gameActions: GameActions) {
    this.state = store.select(s => s.game);
  }

  playCurrentTurn(): Observable<Action> {
    return this.state
      .map(s => s.players[s.playerQueue[0]])
      .filter(currentPlayer => currentPlayer.type === PlayerType.AI)
      .map(currentPlayer => this.gameActions.playCard(0));
  }
}
