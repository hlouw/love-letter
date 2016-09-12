import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../shared';

@Component({
  selector: 'app-deck',
  templateUrl: 'deck.component.html',
  styleUrls: ['deck.component.less']
})
export class DeckComponent {

  @Input()
  deck: Card[];

  constructor() { }
  
}
