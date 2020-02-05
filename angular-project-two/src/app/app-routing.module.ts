import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CarouselComponent } from './carousel/carousel.component';
//import { Cardpage3Component } from './cardpage3/cardpage3.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },  
  //{
  //  path: 'match',
  //  component: Cardpage3Component,
  //  canActivate: [AuthGuard]
  //},
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'info',
    component: CarouselComponent,
    //canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
