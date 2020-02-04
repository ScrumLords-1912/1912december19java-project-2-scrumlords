import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Scores } from './scores';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient, private user: UserService) { }

  baseUrl = 'http://localhost:8080/leaderboards';

  getUserScores(): Promise<Scores[]> {
    return this.http.get<Scores[]>(`${this.baseUrl}/users/${this.user.loggedInUser.id}`).toPromise();
  }

  getAllScores(gameId: number): Promise<Scores[]> {
    return this.http.get<Scores[]>(`${this.baseUrl}/games/${gameId}`).toPromise();
  }

  
}
