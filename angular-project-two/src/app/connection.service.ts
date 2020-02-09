import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Scores } from './scores';
import { UserService } from './user.service';
import {ResponseBoardSize} from './card';
import { Cookie } from './cookie';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient, private user: UserService) { }

  baseUrl = 'http://ec2-3-90-146-246.compute-1.amazonaws.com:8081/project-2/leaderboards';

  gameUrl = 'http://ec2-3-90-146-246.compute-1.amazonaws.com:8081/project-2/gamecard';
  
  boardUrl= 'http://ec2-3-90-146-246.compute-1.amazonaws.com:8081/project-2/gamecard/board';

  cookieUrl = 'http://ec2-3-90-146-246.compute-1.amazonaws.com:8081/project-2/cookie'

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

  sendUserPreferredBoardSize(columns: number): Observable<any>{
    var user_id = this.user.loggedInUser.id;
    var cardPairCount = (columns * columns) / 2;
    /*
    return this.http.get<ResponseBoardSize>(`${this.gameUrl}/cardlist/${user_id}/${cardPairCount}`).toPromise();

    .subscribe((response: any)=>{
    console.log(`recieved ${response}`);
  });
    */
   return this.http.get(`${this.gameUrl}/cardlist/${user_id}/${cardPairCount}`, { responseType: 'text' as 'json' });
 }

//changed to int
 getOutcomeForCardClicked(cardID: number){
   var user_id = this.user.loggedInUser.id;
   return this.http.get<number>(`${this.gameUrl}/clickedcardoutcome/${user_id}/${cardID}`).toPromise();
 }
  
 getBoard(){
  var user_id = this.user.loggedInUser.id;
  //return this.http.get<number>(`${this.boardUrl}/${user_id}}`).toPromise();
  this.http.request('GET',`${this.boardUrl}/${user_id}}`).subscribe((response: any)=>{
    console.log(`recieved board ${response}`);
  });
}

getCookie(): Observable<Cookie> {
  var user_id = this.user.loggedInUser.id;
  return this.http.get<Cookie>(`${this.cookieUrl}/${user_id}`);
}

saveCookie(cookie: Cookie): void {
  var user_id = this.user.loggedInUser.id;
  this.http.post(`${this.cookieUrl}/${user_id}`, cookie).subscribe((data)=>{console.log(data)});
}

}