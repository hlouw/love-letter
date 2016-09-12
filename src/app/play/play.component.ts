import '@ngrx/core/add/operator/select';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Card } from './shared';
import { GameActions, GameState, PlayerGameState } from './game';

@Component({
  selector: 'app-play',
  templateUrl: 'play.component.html',
  styleUrls: ['play.component.less']
})
export class PlayComponent implements OnInit {

  deck: Observable<Card[]>;
  players: Observable<PlayerGameState[]>;
  gameState: Observable<GameState>;

  constructor(private store: Store<any>, private gameActions: GameActions) { }

  ngOnInit() {
    this.gameState = this.store.select(s => s.game);
    this.deck = this.gameState.select(s => s.deck);
    this.players = this.gameState.select(s => s.players);
  }

  isPlayerActive(index: number): Observable<boolean> {
    return this.gameState.map(s => s.playerQueue[0] === index);
  }

  playCard(player: string, cardIndex: number): void {
    this.store.dispatch(this.gameActions.playCard(cardIndex));
  }

  newGame(): void {
    this.store.dispatch(this.gameActions.newGame(3));
  }

}
