import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PlayerGameState } from '../shared/game';
import { Card } from '../shared/card';
import { PlayerAction } from './player-action';

@Component({
  selector: 'app-player-actions',
  templateUrl: 'player-actions.component.html'
})
export class PlayerActionsComponent implements OnInit {

  @Input()
  active: boolean;

  @Input()
  player: PlayerGameState;

  @Input()
  playerQueue: number[];

  @Output()
  action = new EventEmitter();

  targetCardOptions: Card[];
  readyToPlay: boolean;

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      cardIndex: '',
      targetPlayer: this.fb.control({value: '', disabled: true}),
      targetCard: this.fb.control({value: '', disabled: true})
    });

    this.formGroup.get('cardIndex').valueChanges.subscribe(data => this.onCardSelected(data));
    this.formGroup.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onCardSelected();
    this.onValueChanged();
  }

  onCardSelected(cardIndex?: number): void {
    if (!this.formGroup || cardIndex == null) { return; }

    const form = this.formGroup;
    const selectedCard = this.player.hand[cardIndex];

    if (this.canTargetPlayers(selectedCard)) {
      form.get('targetPlayer').enable();
    } else {
      form.get('targetPlayer').disable();
    }

    switch (selectedCard) {
      case Card.Guard:
        this.targetCardOptions = [ Card.Priest, Card.Baron, Card.Handmaid, Card.Prince, Card.King, Card.Countess, Card.Princess ];
        form.get('targetCard').enable();
        break;

      default:
        this.targetCardOptions = [];
        form.get('targetCard').disable();
    }
  }

  onValueChanged(data?: any): void {
    if (!this.formGroup) { return; }
    const form = this.formGroup;

    let cardOK = (form.get('cardIndex').value !== '');
    let targetPlayerOK = (form.get('targetPlayer').disabled || form.get('targetPlayer').value !== '');
    let targetCardOK = (form.get('targetCard').disabled || form.get('targetCard').value !== '');
    this.readyToPlay = cardOK && targetPlayerOK && targetCardOK;
  }

  onPlay(): void {
    let model: PlayerAction = this.formGroup.value;
    this.action.emit(model);
    this.formGroup.reset();
  }

  private canTargetPlayers(card: Card): boolean {
    return [ Card.Guard, Card.Priest, Card.Baron, Card.Prince, Card.King ].includes(card);
  }
}
