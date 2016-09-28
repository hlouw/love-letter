import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'play', loadChildren: 'app/play/play.module#PlayModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
