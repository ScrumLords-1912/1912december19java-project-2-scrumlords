package com.revature.project2.repositories;

import java.util.List;
import com.revature.project2.models.Board;
import com.revature.project2.models.Leaderboard;

public interface LeaderDao {
  //Leaderboard functionality
  public List<Leaderboard> getAllLeaderboards();
  public List<Leaderboard> getAllLeaderboardsByUserId(Integer id);
  public List<Leaderboard> getAllLeaderboardsByGameId(Integer id);
  public void save(Leaderboard leaderboard);
  public void delete(Leaderboard leaderboard);
  
  //Board functionality
  public Board getBoard(Integer id);
  public void save(Board board);
  public void delete(Board board);
}
