/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { PlayComponent } from './play.component';
import { GameActions } from './shared/game';
import { Store } from '@ngrx/store';

describe('Component: Play', () => {
  it('should create an instance', () => {
    let store: Store<any>;
    let gameActions: GameActions;
    let component = new PlayComponent(store, gameActions);
    expect(component).toBeTruthy();
  });
});
