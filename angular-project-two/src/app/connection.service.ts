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

  baseUrl = 'http://ec2-3-90-146-246.compute-1.amazonaws.com:8081/project-2/leaderboards';

  gameUrl = 'http://ec2-3-90-146-246.compute-1.amazonaws.com:8081/project-2/gamecard';

  getUserScores(): Promise<Scores[]> {
    return this.http.get<Scores[]>(`${this.baseUrl}/users/${this.user.loggedInUser.id}`).toPromise();
  }

  getAllScores(gameId: number): Promise<Scores[]> {
    return this.http.get<Scores[]>(`${this.baseUrl}/games/${gameId}`).toPromise();
  }

  sendUserPreferredBoardSize(columns: number){
    var user_id = this.user.loggedInUser.id;
    var cardPairCount = (columns * columns) / 2;
    return this.http.get<JSON>(`${this.gameUrl}/cardlist/${user_id}/${cardPairCount}`).toPromise();
 }

//changed to int
 getOutcomeForCardClicked(cardID: number){
   var user_id = this.user.loggedInUser.id;
   return this.http.get<JSON>(`${this.gameUrl}/clickedcardoutcome/${user_id}/${cardID}`).toPromise();
 }
  

}