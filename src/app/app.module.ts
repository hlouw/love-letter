import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { StoreModule } from '@ngrx/store';

import { PlayAreaComponent, playReducer } from './play-area';
import { NavigationComponent } from './navigation/navigation.component';
import { PlayerComponent } from './player/player.component';
import { DeckComponent } from './deck/deck.component';
import { HomeComponent } from './home/home.component';
import { CardNamePipe } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    PlayAreaComponent,
    NavigationComponent,
    PlayerComponent,
    DeckComponent,
    HomeComponent,
    CardNamePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing,
    StoreModule.provideStore({ play: playReducer })
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
