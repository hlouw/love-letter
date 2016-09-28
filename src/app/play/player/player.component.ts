import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlayerGameState } from '../shared/game';

@Component({
  selector: 'app-player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.less']
})
export class PlayerComponent {

  @Input()
  player: PlayerGameState;

  @Input()
  active: boolean;

  @Input()
  eliminated: boolean;

  @Input()
  winner: boolean;

  @Output()
  playCard = new EventEmitter();

  constructor() { }

  get playerQueue(): number[] {
    return [ 0, 1, 2 ];
  }
}
