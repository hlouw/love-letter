import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import { PlayModule } from './play';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';


const stateLogger = reducer => {
  return function (state, action) {
    console.log('Action: ' + JSON.stringify(action));
    const nextState = reducer(state, action);
    console.log('State: ' + JSON.stringify(nextState));
    return nextState;
  };
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlayModule,
    routing,
    StoreModule.provideStore(compose(stateLogger)(PlayModule.reducers))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
