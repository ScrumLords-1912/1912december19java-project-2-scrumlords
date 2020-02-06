package com.revature.project2.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.project2.models.Leaderboard;
import com.revature.project2.repositories.LeaderDao;

@Service
public class LeaderboardService {

  @Autowired //not needed?
  LeaderDao leaderDao;
  
  public List<Leaderboard> getAll(){
    return leaderDao.getAllLeaderboards();
  }
  
  public List<Leaderboard> getAllByUserId(int id){
    return leaderDao.getAllLeaderboardsByUserId(id);
  }
  
  public List<Leaderboard> getAllByGameId(int id){
    return leaderDao.getAllLeaderboardsByGameId(id);
  }
  
  public void save(Leaderboard leaderboard) {
    leaderDao.save(leaderboard);
  }
  
  public void delete(Leaderboard leaderboard) {
    leaderDao.delete(leaderboard);
  }
  
}
