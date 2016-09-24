import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PlayerGameState } from '../shared/game';

@Component({
  selector: 'app-player-actions',
  templateUrl: 'player-actions.component.html'
})
export class PlayerActionsComponent{

  @Input()
  player: PlayerGameState;

  @Input()
  playerQueue: number[];

  @Output()
  action = new EventEmitter();

  active: boolean = true;

  constructor() { }

}
