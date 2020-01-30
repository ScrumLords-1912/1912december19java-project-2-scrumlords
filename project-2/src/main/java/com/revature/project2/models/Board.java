package com.revature.project2.models;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "gamestate")
public class Board {
  
  @Id
  @Column(name = "user_id")
  int userId;
  
  @Column(name = "card_Array")
  private String boardArray;
  
  @Column(name = "turn")
  int turns;
  
  public List<Integer> getIntArray() {
    List<Integer> list = new ArrayList<Integer>();
    String[] splits = boardArray.split(",");
    for (String split: splits) {
      list.add(Integer.getInteger(split));
    }
    return list;
  }
  
  
}
