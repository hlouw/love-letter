import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PlayerGameState } from '../shared/game';
import { Card } from '../shared/card';
import { PlayerAction } from './player-action';

@Component({
  selector: 'app-player-actions',
  templateUrl: 'player-actions.component.html'
})
export class PlayerActionsComponent {

  @Input()
  active: boolean;

  @Input()
  player: PlayerGameState;

  @Input()
  playerQueue: number[];

  @Output()
  action = new EventEmitter();

  model: PlayerAction = new PlayerAction();

  constructor() { }

  onPlay(): void {
    this.action.emit(this.model);
    this.model = new PlayerAction();
  }

  private get selectedCard(): Card {
    return this.player.hand[this.model.cardIndex];
  }

  get canTargetPlayers(): boolean {
    return [ Card.Guard, Card.Priest, Card.Baron, Card.Prince, Card.King ].includes(this.selectedCard);
  }

  get canChooseTargetCard(): boolean {
    return this.targetCardOptions.length > 0;
  }

  get targetCardOptions(): Card[] {
    switch (this.selectedCard) {
      case Card.Guard:
        return [ Card.Priest, Card.Baron, Card.Handmaid, Card.Prince, Card.King, Card.Countess, Card.Princess ];

      default:
        return [];
    }
  }

  get readyToPlay(): boolean {
    let cardOK: boolean = (this.model.cardIndex != null);
    let targetPlayerOK: boolean = !this.canTargetPlayers || (this.model.targetPlayer != null);
    let targetCardOK: boolean = !this.canChooseTargetCard || (this.model.targetCard != null);
    return cardOK && targetPlayerOK && targetCardOK;
  }

}
