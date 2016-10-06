import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PlayComponent } from './play.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: PlayComponent }
]);
