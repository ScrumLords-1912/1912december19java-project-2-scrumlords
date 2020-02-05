import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { Cardpage3Component } from './cardpage3/cardpage3.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';


const routes: Routes = [
  
  { path: '', component: LoginComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Cardpage3', component: Cardpage3Component},
  { path: 'Leaderboard', component: LeaderboardComponent}
  //canActivate: [AuthGuard]
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, Cardpage3Component, LeaderboardComponent]