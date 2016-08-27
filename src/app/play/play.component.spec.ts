/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PlayComponent } from './play-area.component';
import { Store } from "@ngrx/store";
import { AppState } from "../../shared/app-state.model";

describe('Component: Play', () => {
  it('should create an instance', () => {
    var store: Store<AppState>;
    let component = new PlayComponent(store);
    expect(component).toBeTruthy();
  });
});
