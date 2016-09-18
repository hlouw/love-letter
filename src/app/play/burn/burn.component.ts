import { Component, Input } from '@angular/core';
import { Card } from '../shared/card';

@Component({
  selector: 'app-burn',
  templateUrl: './burn.component.html',
  styleUrls: ['./burn.component.less']
})
export class BurnComponent {

  @Input()
  burn: Card[];

  constructor() { }

}
