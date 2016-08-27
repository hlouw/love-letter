import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player';
import { DeckComponent } from "./deck";
import { CardNamePipe } from "./shared";
import { routing } from "./play.routing";
import { StoreModule } from "@ngrx/store";
import { PlayAreaReducer, PlayAreaActions } from "./play-area";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    DeckComponent,
    PlayerComponent,
    CardNamePipe
  ],
  providers: [
    PlayAreaActions
  ]
})
export class PlayModule { }
