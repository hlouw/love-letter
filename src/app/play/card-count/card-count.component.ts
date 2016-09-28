import { Component, Input } from '@angular/core';
import { Card } from '../shared/card';

@Component({
  selector: 'app-card-count',
  templateUrl: 'card-count.component.html',
  styleUrls: ['card-count.component.less']
})
export class CardCountComponent {

  @Input()
  title: string;

  @Input()
  description: string;

  @Input()
  cards: Card[];

  constructor() { }

}
