/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PlayComponent } from './play.component';
import { GameActions } from './game';
import { Store } from '@ngrx/store';

describe('Component: Play', () => {
  it('should create an instance', () => {
    let store: Store<any>;
    let gameActions: GameActions;
    let component = new PlayComponent(store, gameActions);
    expect(component).toBeTruthy();
  });
});
