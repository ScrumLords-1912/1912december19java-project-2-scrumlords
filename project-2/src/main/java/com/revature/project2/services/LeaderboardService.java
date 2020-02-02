package com.revature.project2.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.project2.models.Leaderboard;
import com.revature.project2.repositories.LeaderDaoImpl;

@Service
public class LeaderboardService {

  @Autowired //not needed?
  LeaderDaoImpl leaderDao;
  
  public List<Leaderboard> getAll(){
    return leaderDao.getAllLeaderboards();
  }
  
  public List<Leaderboard> getAllByUserId(Integer id){
    return leaderDao.getAllLeaderboardsByUserId(id);
  }
  
  public List<Leaderboard> getAllByGameId(Integer id){
    return leaderDao.getAllLeaderboardsByGameId(id);
  }
  
  public void saveOrUpdate(Leaderboard leaderboard) {
    leaderDao.saveOrUpdate(leaderboard);
  }
  
  public void delete(Leaderboard leaderboard) {
    leaderDao.delete(leaderboard);
  }
  
}
