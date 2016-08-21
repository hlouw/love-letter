/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PlayAreaComponent } from './play-area.component';
import { Store } from "@ngrx/store";
import {AppState} from "../app.component";

describe('Component: PlayArea', () => {
  it('should create an instance', () => {
    var store: Store<AppState>;
    let component = new PlayAreaComponent(store);
    expect(component).toBeTruthy();
  });
});
