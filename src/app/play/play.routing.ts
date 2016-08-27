import {RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {PlayAreaComponent} from "./play-area";

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'play', component: PlayAreaComponent}
]);
