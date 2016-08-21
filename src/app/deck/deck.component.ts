import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card } from "../play-area";

@Component({
  selector: 'app-deck',
  templateUrl: 'deck.component.html',
  styleUrls: ['deck.component.less']
})
export class DeckComponent implements OnInit {

  @Input()
  deck: Card[];

  constructor() {
  }

  ngOnInit() {
  }
}
