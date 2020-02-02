import { Component, OnInit } from '@angular/core';
import { Scores, MOCK_SCORES } from '../mockScores'

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styles: []
})
export class LeaderboardComponent implements OnInit {

scores = MOCK_SCORES.sort(function(a,b) {
 return b.score - a.score;
});

//Change mock scores to global High scores when available
highscores = MOCK_SCORES.sort(function(a,b) {
  return b.score - a.score;
 });

  constructor() { }

  ngOnInit() {
  }

}
