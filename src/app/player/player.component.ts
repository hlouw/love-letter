import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from "../play-area";

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

  @Output()
  drawCard = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
