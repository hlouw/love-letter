/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { PlayerActionsComponent } from './player-actions.component';

describe('Component: PlayerActions', () => {
  it('should create an instance', () => {
    let fb: FormBuilder;
    let component = new PlayerActionsComponent(fb);
    expect(component).toBeTruthy();
  });
});
