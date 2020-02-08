import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Scores } from './scores';
import { UserService } from './user.service';
import {ResponseBoardSize} from './card';

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

  sendUserPreferredBoardSize2(columns: number){
    var user_id = this.user.loggedInUser.id;
    var cardPairCount = (columns * columns) / 2;
    var httpOptionsPlain = {
      headers: new HttpHeaders({
        'Accept': 'text/plain',
        'Content-Type': 'text/plain'
      }),
      responseType: 'json'
    };
    /*
    const requestOptions = Object.assign(
      {}, 
      { responseType: 'json' }, 
      { observe: 'body' as HttpObserve }
    );

    this.httpClient.request('GET', './mockjson.json', requestOptions)
    */

    this.http.request('GET',`${this.gameUrl}/cardlist/${user_id}/${cardPairCount}`).subscribe((response: any)=>{
      console.log(`recieved ${response}`);
    });
  }

  sendUserPreferredBoardSize(columns: number){
    var user_id = this.user.loggedInUser.id;
    var cardPairCount = (columns * columns) / 2;
    /*
    return this.http.get<ResponseBoardSize>(`${this.gameUrl}/cardlist/${user_id}/${cardPairCount}`).toPromise();
    */
   this.http.get(`${this.gameUrl}/cardlist/${user_id}/${cardPairCount}`, { responseType: 'text' as 'json' }).subscribe((response: any)=>{
    console.log(`recieved ${response}`);
  });
 }

//changed to int
 getOutcomeForCardClicked(cardID: number){
   var user_id = this.user.loggedInUser.id;
   return this.http.get<number>(`${this.gameUrl}/clickedcardoutcome/${user_id}/${cardID}`).toPromise();
 }
  

}