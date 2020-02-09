import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { DeckComponent } from './deck/deck.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardpageComponent } from './cardpage/cardpage.component';
import { Cardpage2Component } from './cardpage2/cardpage2.component';
import { MatCardModule, MatGridListModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Cardpage3Component } from './cardpage3/cardpage3.component';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { Cardpage4Component } from './cardpage4/cardpage4.component';
import { CookieclickerComponent } from './cookieclicker/cookieclicker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    LeaderboardComponent,
    DeckComponent,
    CardComponent,
    NavbarComponent,
    CarouselComponent,
    CardpageComponent,
    Cardpage2Component,
    Cardpage3Component,
    Cardpage4Component,
    CookieclickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
