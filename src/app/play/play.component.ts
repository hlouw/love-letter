import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { PlayState, Player, Card } from "./shared";
import { PlayActions } from "./play.actions";
import { AppState } from "../shared";

@Component({
  selector: 'app-play',
  templateUrl: 'play.component.html',
  styleUrls: ['play.component.less']
})
export class PlayComponent implements OnInit {

  deck: Observable<Card[]>;
  players: Observable<Player[]>;

  constructor(private store: Store<AppState>, private actions: PlayActions) {
  }

  ngOnInit() {
    const playState = this.store.select<PlayState>('play');
    this.deck = playState.map(s => s.deck);
    this.players = playState.map(s => s.players);
  }

  drawCard(player: string): void {
    this.store.dispatch(this.actions.draw(player));
  }

  playCard(player: string, cardIndex: number): void {
    this.store.dispatch(this.actions.playCard(player, cardIndex));
  }

  shuffle(): void {
    this.store.dispatch(this.actions.shuffle());
  }

  resetGame(): void {
    this.store.dispatch(this.actions.resetGame());
  }

}
