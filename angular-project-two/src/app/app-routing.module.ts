import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

import { Cardpage3Component } from './cardpage3/cardpage3.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
//import { Cardpage3Component } from './cardpage3/cardpage3.component';
import { Cardpage4Component } from './cardpage4/cardpage4.component'  


const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },  
  {
    path: 'match',
    component: Cardpage4Component,
    
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'info',
    component: CarouselComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, Cardpage3Component, LeaderboardComponent]