import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../shared';

@Component({
  selector: 'app-player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.less']
})
export class PlayerComponent {

  @Input()
  player: Player;

  @Input()
  active: boolean;

  @Output()
  playCard = new EventEmitter();

  constructor() { }

}
