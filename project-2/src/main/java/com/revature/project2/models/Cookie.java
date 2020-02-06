package com.revature.project2.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cookiestate")
public class Cookie {
  
  @Id
  @Column(name = "user_id")
  private Integer userId;
  
  @Column(name = "state") 
  private String state; //State saves purchases made, ie. 1,3,4 is 1 hand, 3 ovens, 4 peelers.
  
  @Column(name = "cookies")
  private Integer cookies;  
  
  public Cookie() {}

  public Integer getUserId() {
    return userId;
  }

  public void setUserId(Integer userId) {
    this.userId = userId;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public Integer getCookies() {
    return cookies;
  }

  public void setCookies(Integer cookies) {
    this.cookies = cookies;
  }

  @Override
  public String toString() {
    return "Cookie [userId=" + userId + ", state=" + state + ", cookies=" + cookies + "]";
  }
  
  
  
}
