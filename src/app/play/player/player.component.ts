import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from "../shared";

@Component({
  selector: 'app-player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.less']
})
export class PlayerComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  player: Player;

  @Input()
  active: boolean;

  @Output()
  drawCard = new EventEmitter();

  @Output()
  playCard = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
