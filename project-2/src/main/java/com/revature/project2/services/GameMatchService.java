package com.revature.project2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import com.revature.project2.models.Board;
import com.revature.project2.repositories.GameMatchDao;

@Service
@Scope("session")
public class GameMatchService {
  
  @Autowired
  private GameMatchDao gmd;
  private int userID;
  
  //Makes a new service and saves user id.
  public GameMatchService(int id) {
    userID = id;
  }
  
  //Starts a new game.
  public void newGame(int cardPairCount) {
    Board newBoard = new Board(userID, cardPairCount);
    gmd.update(newBoard);
  }
  
  //Returns current board state.
  public Board getGame() {
    return gmd.getBoard(userID);
  }
  
  //Returns card number x 10 + either 0-no match or 1-match. Use % and / to extract info.
  //Returns -1 if invalid move (Out of bounds, or matched already)
  public int move(int position) {
    return gmd.getBoard(userID).match(position);
  }
}
