import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Scores, MOCK_SCORES } from './mockScores';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/leaderboards';

  getUserScores(userId: number): Promise<Scores[]> {
    return this.http.get<Scores[]>(`${this.baseUrl}/users/${userId}`).toPromise();
  }

  getAllScores(gameId: number): Promise<Scores[]> {
    return this.http.get<Scores[]>(`${this.baseUrl}/games/${gameId}`).toPromise();
  }

  
}
