import { Routes, RouterModule } from '@angular/router';
import { PlayAreaComponent } from './play-area';
import { HomeComponent } from './home';

const appRoutes: Routes = [
  { path: 'play', component: PlayAreaComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
