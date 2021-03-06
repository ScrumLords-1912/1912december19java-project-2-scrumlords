import { Component, OnInit } from '@angular/core';
import { Scores } from '../scores'
import { ConnectionService } from '../connection.service';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.css']
})
export class LeaderboardComponent implements OnInit {

  userScores: Scores[] = [];
  globalScores: Scores[] = [];
  gameId: number;

  constructor(public connection: ConnectionService) { }

  ngOnInit() {
    this.gameId = 1;
    this.populateUserScores();
    this.populateGlobalScores(this.gameId);
  }

  async populateUserScores() {
    this.userScores = await this.connection.getUserScores();
    this.userScores = this.userScores.filter(obj => (obj.game_id === this.gameId));
    this.userScores.sort(function (a, b) {
      return b.score - a.score;
    });
  }

  async populateGlobalScores(gameId: number) {
    this.globalScores = await this.connection.getAllScores(gameId);
    this.globalScores.sort(function (a, b) {
      return b.score - a.score;
    });
  }

  switchGame(event) {
    this.gameId = event.nextId;
    this.populateUserScores();
    this.populateGlobalScores(event.nextId);
  }

}
