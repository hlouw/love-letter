import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { PlayState, Player, DRAW, SHUFFLE, RESET, PLAY_CARD } from "./play-area.reducer";
import { Card } from "./card.enum";
import { AppState } from "../app.component";

@Component({
  selector: 'app-play-area',
  templateUrl: 'play-area.component.html',
  styleUrls: ['play-area.component.less']
})
export class PlayAreaComponent implements OnInit {

  deck: Observable<Card[]>;
  players: Observable<Player[]>;

  constructor(private store: Store<AppState>) {
    let playState = store.select<PlayState>('play');
    this.deck = playState.map(s => s.deck);
    this.players = playState.map(s => s.players);
  }

  ngOnInit() {
  }

  drawCard(player: string): void {
    this.store.dispatch({ type: DRAW, payload: player });
  }

  playCard(player: string, cardIndex: number): void {
    this.store.dispatch({ type: PLAY_CARD, payload: { player: player, cardIndex: cardIndex }});
  }

  shuffle(): void {
    this.store.dispatch({ type: SHUFFLE });
  }

  resetGame(): void {
    this.store.dispatch({ type: RESET });
  }

}
