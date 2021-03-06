package com.revature.project2.repositories;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import com.revature.project2.models.Board;
import com.revature.project2.models.Cookie;
import com.revature.project2.models.Leaderboard;

@Repository
@Transactional
@EnableTransactionManagement
public class LeaderDaoImpl implements LeaderDao {

  private SessionFactory sf;

  @Autowired
  public LeaderDaoImpl(SessionFactory sf) {
    this.sf = sf;
  }

  @Override
  public List<Leaderboard> getAllLeaderboards() {
    Session session = sf.getCurrentSession();
    
    Query q = session.createQuery("from Leaderboard");
    List<Leaderboard> leaderboards = q.list();
    return leaderboards;
  }
  
  @Override
  public List<Leaderboard> getAllLeaderboardsByUserId(Integer id){
    Session session = sf.getCurrentSession();
    
    Query q = session.createQuery("from Leaderboard as l where l.user_id = :u_id");
    q.setInteger("u_id", id);
    
    List<Leaderboard> leaderboards = q.list();
    return leaderboards;
  }
  
  @Override
  public List<Leaderboard> getAllLeaderboardsByGameId(Integer id){
    Session session = sf.getCurrentSession();
    
    Query q = session.createQuery("from Leaderboard as l where l.game_id = :g_id");
    q.setInteger("g_id", id);
    
    List<Leaderboard> leaderboards = q.list();
    return leaderboards;
  }

  @Override
  public void save(Leaderboard leaderboard) {
    Session session = sf.getCurrentSession();
    Leaderboard lb = new Leaderboard(leaderboard.getUser_id(), leaderboard.getGame_id(), leaderboard.getScore());
    session.save(lb);
  }

  @Override
  public void delete(Leaderboard leaderboard) {
    Session session = sf.getCurrentSession();

    session.delete(leaderboard);
  }

  @Override
  public Board getBoard(Integer id) {
    Session session = sf.getCurrentSession();

    Query q = session.createQuery("from Board WHERE userId = :user");
    q.setInteger("user", id);
    List<Board> boards = q.list();
    if (boards.size() < 1) {
      return null;
    }
    return boards.get(0);
  }

  @Override
  public void save(Board board) {
    Session session = sf.getCurrentSession();

    session.save(board);
  }

  @Override
  public void delete(Board board) {
    Session session = sf.getCurrentSession();

    session.delete(board);
  }

  @Override
  public void update(Board board) {
    Session session = sf.getCurrentSession();
    
    session.saveOrUpdate(board);
  }
  
  public Cookie getCookie(Integer userID) {
    Session session = sf.getCurrentSession();
    
    Query q = session.createQuery("from Cookie WHERE userId = :user");
    q.setInteger("user", userID);
    List<Cookie> pan = q.list();
    if (pan.size() < 1) {
      return null;
    }
    return pan.get(0);
  }

  public void saveOrUpdate(Cookie cookie) {
    Session session = sf.getCurrentSession();
    
    session.saveOrUpdate(cookie);
  }
  
}
