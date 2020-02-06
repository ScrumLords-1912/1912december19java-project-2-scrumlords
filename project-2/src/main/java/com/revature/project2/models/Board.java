package com.revature.project2.models;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "gamestate")
public class Board {
  
  @Id
  @Column(name = "user_id")
  private Integer userId;
  
  @Column(name = "card_Array")
  private String boardArray;
  
  @Column(name = "turn")
  private Integer turns;
  
  //NEED TO ADD TO DATABASE
  @Column(name = "last_picked_position")
  private Integer previousPosition;
  
  //Feed the Jackson
  public Board() {}
  
  //Generates board randomly with card_pair_count pairs, meaning 2x card-pair length.
  public Board(int userID, int card_pair_count) {
    List<Integer> list = new ArrayList<Integer>();
    //Create array of card pairs.
    for (int i = 0; i < card_pair_count; i++) {
      list.add(i);
      list.add(card_pair_count - 1 - i);
    }
    shuffle(list);
    
    userId = userID;
    turns = 0;
    boardArray = arrayToString(list);
    previousPosition = null;
  }
  
  //Randomizes location of values in list.
  private void shuffle(List<Integer> list) {
    Random rand = new Random();
    for(int i = 0; i < list.size(); i++) {
      int j = rand.nextInt(list.size());
      Collections.swap(list, i, j);
    }
  }
  
  //Turns list of ints to string representation
  private String arrayToString(List<Integer> list) {
    List<String> strings = new ArrayList<String>();
    for (int i = 0; i < list.size(); i++) {
      strings.add(String.valueOf(list.get(i)));
    }
    return String.join(",", strings);
  }
  
  //Turns string representation back into list.
  public List<Integer> getIntArray() {
    List<Integer> list = new ArrayList<Integer>();
    String[] splits = boardArray.split(",");
    System.out.println("Splits:" + splits.toString());
    for (String split: splits) {
      System.out.println("String: " + split + " turns to: " + Integer.parseInt(split));
      list.add(Integer.parseInt(split));
    }
    return list;
  }
  
  //Returns card number x 10 + either 0-no match or 1-match or 2-finish. Use % and / to extract info.
  //Returns -1 if invalid move (Out of bounds, or matched already)
  public int match(int newPosition) {
    List<Integer> boardArray = getIntArray();
    //Check if newPosition is valid.
    if (newPosition < 0 || newPosition >= boardArray.size() || boardArray.get(newPosition) == -1) {
      return -1;
    }
    int matchFlag = 0;
    if (previousPosition == null) { //First Guess
      previousPosition = newPosition;
    } else {//Second Guess, see if matches.
      turns++;
      if (previousPosition != newPosition && boardArray.get(previousPosition) == boardArray.get(newPosition)) {
        //Got a match.
        matchFlag = 1;
        boardArray.set(newPosition, -1);
        boardArray.set(previousPosition, -1);
        
        //Check if game finished.
        for(int i = 0; i < boardArray.size(); i++) {
          if (boardArray.get(i) != -1) {
            break;
          } else if (i == boardArray.size() - 1) {
            //Victory condition in service layer
            return 2; //End of game, 2 signifies finish.
          }
        }
      }
      previousPosition = null;
    }
    
    return boardArray.get(newPosition) * 10 + matchFlag;
  }
  
  public List<Integer> getHiddenIntArray() {
    List<Integer> list = new ArrayList<Integer>();
    String[] splits = boardArray.split(",");
    //Only time card isn't hidden is if previousposition has been chosen.
    int spotCheck = -1;
    if (previousPosition != null) {
      spotCheck = previousPosition;
    }
    
    for (int i = 0; i < splits.length; i++) {
      int value = Integer.parseInt(splits[i]);
      if (i == spotCheck) {
        list.add(value);
      } else if (value == -1) {
        list.add(null);
      } else {
        list.add(-1);
      }
    }
    return list;
  }
  

  public Integer getUserId() {
    return userId;
  }

  public void setUserId(Integer userId) {
    this.userId = userId;
  }

  public Integer getTurns() {
    return turns;
  }

  public void setTurns(Integer turns) {
    this.turns = turns;
  }

  public Integer getPreviousPosition() {
    return previousPosition;
  }

  public void setPreviousPosition(Integer previousPosition) {
    this.previousPosition = previousPosition;
  }

  @Override
  public String toString() {
    return "Board [userId=" + userId + ", boardArray=" + boardArray + ", turns=" + turns
        + ", previousPosition=" + previousPosition + "]";
  }
  
  
  
}
