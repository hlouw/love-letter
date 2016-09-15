import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlayerGameState } from '../game';

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

  @Output()
  playCard = new EventEmitter();

  constructor() { }

}
