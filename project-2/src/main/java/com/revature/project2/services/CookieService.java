package com.revature.project2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.project2.models.Cookie;
import com.revature.project2.models.Leaderboard;
import com.revature.project2.repositories.LeaderDao;

@Service
public class CookieService {

  @Autowired
  private LeaderDao dao;

  private int userID;
  private int gameID = 2;
  
  public CookieService() {}
  
  public void setID(int id) {
    userID = id;
  }
  
  public void save(Cookie cookie) {
    cookie.setUserId(userID);
    submitToLeaderboard(cookie.getCookies());
    dao.saveOrUpdate(cookie);
  }
  
  public Cookie getCookie() {
    return dao.getCookie(userID);
  }
  
  public void submitToLeaderboard(int score) {
    dao.save(new Leaderboard(userID, gameID, score));
  }
  
}
