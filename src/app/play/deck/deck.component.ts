import { Component, Input } from '@angular/core';
import { Card } from '../shared/card';

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
