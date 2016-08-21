import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { PlayState, Player, DRAW, SHUFFLE, RESET } from "./play-area.reducer";
import { Card } from "./card.enum";

interface AppState {
  play: PlayState;
}

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

  shuffle(): void {
    this.store.dispatch({ type: SHUFFLE });
  }

  resetGame(): void {
    this.store.dispatch({ type: RESET });
  }

}
