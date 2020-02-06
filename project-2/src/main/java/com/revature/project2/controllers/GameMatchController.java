package com.revature.project2.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.revature.project2.models.Leaderboard;
import com.revature.project2.services.GameMatchService;

@RestController
@RequestMapping("/gamecard")
@Scope("session")
public class GameMatchController {
  @Autowired
  private GameMatchService gms;
  
  @GetMapping("/board/{userID}")
  public List<Integer> getBoard(@PathVariable(name = "userID") Integer userID) {
    gms.setID(userID);
    if (gms.getBoard() == null) {
      return null;
    }

    return gms.getBoard().getHiddenIntArray();
  }
  
  @GetMapping("/turn/{userID}")
  public Integer getTurns(@PathVariable(name = "userID") Integer userID) {
    gms.setID(userID);
    if (gms.getBoard() == null) {
      return null;
    }

    return gms.getBoard().getTurns();
  }
  
  
  @PostMapping("/newgame/{userID}/{cardPairCount}")
  public String newBoard(@PathVariable(name = "userID") Integer userID, 
      @PathVariable(name = "cardPairCount") Integer cardPairCount) {
    gms.setID(userID);
    gms.newGame(cardPairCount);
    return "Success";
  }
  
  @PostMapping("/play/{userID}/{position}")
  public int playBoard(@PathVariable(name = "userID") Integer userID, 
      @PathVariable(name = "position") Integer position) {
    gms.setID(userID);
    return gms.move(position);
  }
  
}
