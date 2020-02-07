package com.revature.project2.models;

import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "leaderboard")
public class Leaderboard {
  
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  
  @Column(name = "user_id")
  private Integer user_id;
  
  @Column(name = "game_id")
  private Integer game_id;
  
  @Column(name = "score")
  private Integer score;
  
  @Column(name = "datetime")
  private Date datetime;
  
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id", insertable = false, updatable = false)
  @JsonIgnoreProperties("leaderboard")
  private User user;

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Leaderboard() {
    super();
  }

  public Leaderboard(Integer user_id, Integer game_id, Integer score) {
    this(0, user_id, game_id, score);
  }
  
  public Leaderboard(Integer id, Integer user_id, Integer game_id, Integer score) {
    super();
    this.id = id;
    this.user_id = user_id;
    this.game_id = game_id;
    this.score = score;
    this.datetime = new Date();
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
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
    return datetime.toString();
  }

  public void setDatetime(Date datetime) {
    this.datetime = datetime;
  }

  @Override
  public String toString() {
    return "Leaderboard [id=" + id + ", user_id=" + user_id + ", game_id=" + game_id + ", score="
        + score + ", datetime=" + datetime + "]";
  }
}
