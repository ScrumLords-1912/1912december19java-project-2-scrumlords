import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Scores } from './scores';
import { UserService } from './user.service';
import {Card} from './cardpage3/cardpage3.component';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient, private user: UserService) { }

  baseUrl = 'http://localhost:8080/leaderboards';

  gameUrl = 'http://localhost:8080/gamecard';

  getUserScores(): Promise<Scores[]> {
    return this.http.get<Scores[]>(`${this.baseUrl}/users/${this.user.loggedInUser.id}`).toPromise();
  }

  getAllScores(gameId: number): Promise<Scores[]> {
    return this.http.get<Scores[]>(`${this.baseUrl}/games/${gameId}`).toPromise();
  }

 // sendUserPreferredCardSize(columns: number, gameId: number): Promise<Card[]> {
  //  var user_id = this.user.loggedInUser.id;
   // let cardPairCount = board size / 2
    //Just make cardPairCount the number of card pairs, so a 4x4 would be 8 and a 6x6 would be 18.
//    let request = {columns, gameId, user_id};
    //this needs to be a get. gameID isn't needed here.
  //  return this.http.get<Card[]>(`${this.gameUrl}/cardlist/${user_id}/${cardPairCount}`).toPromise();
  }

  //Send username and card position, and get back the card cardID for the array and a flag, so 0 is nothing, 1 is match, and 2 is finish.modal
  //Format will be cardID * 10 + flag.
 // getCardNumberBYSendingCardPosition(columns: number, gameId: number): Promise<Card[]> {
  //  var user_id = this.user.loggedInUser.id;

   // return this.http.get<Card[]>(`${this.gameUrl}/cardlist/${user_id}/${cardpOSITIONJ}`).toPromise();
  

