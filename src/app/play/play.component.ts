import '@ngrx/core/add/operator/select';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { PlayState, Player, Card } from './shared';
import { PlayActions } from './play.actions';

@Component({
  selector: 'app-play',
  templateUrl: 'play.component.html',
  styleUrls: ['play.component.less']
})
export class PlayComponent implements OnInit {

  deck: Observable<Card[]>;
  players: Observable<Player[]>;
  activePlayer: Observable<number>;

  constructor(private store: Store<any>, private playActions: PlayActions) { }

  ngOnInit() {
    const playState: Observable<PlayState> = this.store.select(s => s.play);
    this.deck = playState.select(s => s.deck);
    this.players = playState.select(s => s.players);
    this.activePlayer = playState.select(s => s.activePlayer);
  }

  isPlayerActive(index: number): Observable<boolean> {
    return this.activePlayer.map(p => p === index);
  }

  drawCard(player: string): void {
    this.store.dispatch(this.playActions.draw(player));
  }

  playCard(player: string, cardIndex: number): void {
    this.store.dispatch(this.playActions.playCard(player, cardIndex));
  }

  shuffle(): void {
    this.store.dispatch(this.playActions.shuffle());
  }

  resetGame(): void {
    this.store.dispatch(this.playActions.resetGame());
  }

}
