package com.revature.project2.repositories;

import com.revature.project2.models.Board;

public interface GameMatchDao {
  //Returns board state from database with given userID.
  Board getBoard(int userID); //Need to deal with null;
  
  //Updates board state in database.
  void update(Board b);
  
}
