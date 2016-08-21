/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { DeckComponent } from './deck.component';

describe('Component: Deck', () => {
  it('should create an instance', () => {
    let component = new DeckComponent();
    expect(component).toBeTruthy();
  });
});
