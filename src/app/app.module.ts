import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PlayModule } from './play';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AIEffects } from './play/game';

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
    StoreModule.provideStore(PlayModule.reducers),
    EffectsModule.runAfterBootstrap(AIEffects)
  ],
  providers: [ ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
