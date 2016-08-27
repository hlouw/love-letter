import { Component, OnInit, Input } from '@angular/core';
import { Card } from "../shared";

@Component({
  selector: 'app-deck',
  templateUrl: 'deck.component.html',
  styleUrls: ['deck.component.less']
})
export class DeckComponent implements OnInit {

  @Input()
  deck: Card[];

  constructor() { }

  ngOnInit() {
  }
}
