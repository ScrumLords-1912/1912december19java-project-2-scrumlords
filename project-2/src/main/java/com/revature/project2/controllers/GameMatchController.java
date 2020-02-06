package com.revature.project2.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
  
  @GetMapping("/test/{userID}")
  public String newGame(@PathVariable(name = "userID") Integer userID){
    gms.setID(userID);
    Leaderboard lb = gms.scoreBoard(8, 5);
    gms.save(lb);
    return "complete";
  }
  
}
