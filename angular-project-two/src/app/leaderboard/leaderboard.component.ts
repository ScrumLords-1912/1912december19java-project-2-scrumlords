import { Component, OnInit } from '@angular/core';
import { Scores, MOCK_SCORES } from '../mockScores'
import { ConnectionService } from '../connection.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styles: []
})
export class LeaderboardComponent implements OnInit {


///////////// MOCK SCORES
scores = MOCK_SCORES.sort(function(a,b) {
 return b.score - a.score;
});

highscores = MOCK_SCORES.sort(function(a,b) {
  return b.score - a.score;
 });
/////////////



myscores: Scores[] = [];
globalScores: Scores[] = [];

  constructor(public scoreService: ConnectionService) { }

  ngOnInit() {
    this.populateUserScores(1); //getUserId
    this.populateGlobalScores(0);
  }

  async populateUserScores(userId: number) {
    this.myscores = await this.scoreService.getUserScores(userId);
    this.myscores.sort(function(a,b) {
      return b.score - a.score;});
  }

  async populateGlobalScores(gameId: number) {
    let globalScores = await this.scoreService.getAllScores(0);
    // this.globalScores = globalScores.filter(game=>Scores.game_id === this.gameId);
    this.globalScores.sort(function(a,b) {
      return b.score - a.score;});
  }

  switchGame(gameId: number) {
    this.populateUserScores(1); //TODO: Filter by game
    this.populateGlobalScores(gameId);
  }

}
