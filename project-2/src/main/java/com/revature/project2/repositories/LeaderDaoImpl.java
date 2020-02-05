package com.revature.project2.repositories;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import com.revature.project2.models.Leaderboard;

@Repository
@Transactional
@EnableTransactionManagement
public class LeaderDaoImpl {

  private SessionFactory sf;
  
  @Autowired
  public LeaderDaoImpl(SessionFactory sf) {
    this.sf = sf;
  }
  
  public List<Leaderboard> getAllLeaderboards(){
    Session session = sf.getCurrentSession();
    
    Query q = session.createQuery("from Leaderboard");
    List<Leaderboard> leaderboards = q.list();
    return leaderboards;
  }
  
  public List<Leaderboard> getAllLeaderboardsByUserId(Integer id){
    Session session = sf.getCurrentSession();
    
    Query q = session.createQuery("from Leaderboard where user_id = :user_id");
    q.setString("user_id", id.toString());
    
    List<Leaderboard> leaderboards = q.list();
    return leaderboards;
  }
  
  public List<Leaderboard> getAllLeaderboardsByGameId(Integer id){
    Session session = sf.getCurrentSession();
    
    Query q = session.createQuery("from leaderboard where game_id = :game_id");
    q.setString("game_id", id.toString());
    
    List<Leaderboard> leaderboards = q.list();
    return leaderboards;
  }
  
  public void save(Leaderboard leaderboard) {
    Session session = sf.getCurrentSession();
    
    session.save(leaderboard);
  }
  
  public void delete(Leaderboard leaderboard) {
    Session session = sf.getCurrentSession();
    
    session.delete(leaderboard);
  }
  
}
