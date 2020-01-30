package com.revature.project2.repositories;

import com.revature.project2.models.Board;

public interface GameMatchDao {
  //Starts up game, setting array, turn number, score, etc... Also removes old game.
  void newGame(String username);
  
  //Returns board state from database with given userID.
  Board getBoard(String username);
  
  //Updates board state in database.
  void update(String username, Board b);
  
}
