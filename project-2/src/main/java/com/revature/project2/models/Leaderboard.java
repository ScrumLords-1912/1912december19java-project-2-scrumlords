package com.revature.project2.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "leaderboard")
public class Leaderboard {
  
  @Column(name = "user_id")
  private Integer user_id;
  
  @Column(name = "game_id")
  private Integer game_id;
  
  @Column(name = "score")
  private Integer score;
  
  @Column(name = "datetime")
  private String datetime;
  
  public Leaderboard() {
    super();
  }
  
  public Leaderboard(Integer user_id, Integer game_id, Integer score, String datetime) {
    this.user_id = user_id;
    this.game_id = game_id;
    this.score = score;
    this.datetime = datetime;
  }

  public Integer getUser_id() {
    return user_id;
  }

  public void setUser_id(Integer user_id) {
    this.user_id = user_id;
  }

  public Integer getGame_id() {
    return game_id;
  }

  public void setGame_id(Integer game_id) {
    this.game_id = game_id;
  }

  public Integer getScore() {
    return score;
  }

  public void setScore(Integer score) {
    this.score = score;
  }

  public String getDatetime() {
    return datetime;
  }

  public void setDatetime(String datetime) {
    this.datetime = datetime;
  }

  @Override
  public String toString() {
    return "Leaderboard [user_id=" + user_id + ", game_id=" + game_id + ", score=" + score
        + ", datetime=" + datetime + "]";
  }
  
  

}
