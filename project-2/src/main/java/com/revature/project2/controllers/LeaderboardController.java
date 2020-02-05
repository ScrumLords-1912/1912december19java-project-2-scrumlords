package com.revature.project2.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.revature.project2.models.Leaderboard;
import com.revature.project2.services.LeaderboardService;

@RestController
@RequestMapping("/leaderboards")
@CrossOrigin
public class LeaderboardController {
  
  @Autowired
  private LeaderboardService leaderboardService;

  @GetMapping
  public List<Leaderboard> getAll(){
    return leaderboardService.getAll();
  }
  
  @GetMapping("/users/{id}")
  public List<Leaderboard> getAllByUserId(@PathVariable(name = "id") Integer id){
    return leaderboardService.getAllByUserId(id);
  }
  
  @GetMapping("/games/{id}")
  public List<Leaderboard> getAllByGameId(@PathVariable(name = "id") Integer id){
    return leaderboardService.getAllByGameId(id);
  }
  
  @PostMapping
  @ResponseStatus(code = HttpStatus.CREATED)
  public void saveOrUpdate(@RequestBody Leaderboard leaderboard) {
    leaderboardService.save(leaderboard);
  }
  
  @PostMapping("/delete/{uid}/{gid}/{score}")
  public void delete(@RequestBody Leaderboard leaderboard, @PathVariable(name = "uid") Integer uid,
      @PathVariable(name = "gid") Integer gid, @PathVariable(name = "score") Integer score) {
    leaderboard.setUser_id(uid);
    leaderboard.setGame_id(gid);
    leaderboard.setScore(score);
    leaderboardService.delete(leaderboard);
  }
  
}
