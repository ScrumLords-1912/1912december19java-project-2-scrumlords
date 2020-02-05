package com.revature.project2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import com.revature.project2.models.Board;
import com.revature.project2.models.Leaderboard;
import com.revature.project2.repositories.LeaderDao;

@Service
@Scope("session")
public class GameMatchService {
  
  @Autowired
  private LeaderDao dao;

  private int userID;
  final Integer gameID = 1;
  
  public GameMatchService() {
    super();
  }
  
  //Makes a new service and saves user id.
  public GameMatchService(int id) {
    userID = id;
  }
  
  public void setID(int id) {
    userID = id;
  }
  
  //Starts a new game.
  public void newGame(int cardPairCount) {
    Board newBoard = new Board(userID, cardPairCount);
    dao.save(newBoard);
  }
  
  //Returns current board state.
  public Board getGame() {
    //MIGHT BE NULL, so return null if no game exists.
    return dao.getBoard(userID);
  }
  
  //Returns card number x 10 + either 0-no match or 1-match or 2-win. Use % and / to extract info.
  //Returns -1 if invalid move (Out of bounds, or matched already)
  public int move(int position) {
    Board b = dao.getBoard(userID);
    int data = b.match(position);
    if (data % 10 == 2) {
      //Victory condition--------------------------
      //Submit leaderboard score.
      Leaderboard l = scoreBoard(b.getIntArray().size(), b.getTurns());
      save(l);
      //Remove board.
      return 2;
    } else {
      return data;
    }
  }
  
  public Leaderboard scoreBoard(int boardSize, int turnCount) {
    int score = (int) Math.max((boardSize * Math.sqrt(boardSize) * 10 - turnCount * 3), 10); //10 min score possible.
    return new Leaderboard(userID, gameID, score);
  }
  
  public void save(Leaderboard l) {
    dao.save(l);
  }
}
