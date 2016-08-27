import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { PlayModule } from './play';
import { PlayAreaReducer } from "./play/play-area";
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PlayModule,
    routing,
    StoreModule.provideStore({
      play: PlayAreaReducer.playReducer
    })
  ],
  providers: [ ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
