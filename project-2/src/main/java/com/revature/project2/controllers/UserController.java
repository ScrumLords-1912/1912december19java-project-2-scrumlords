package com.revature.project2.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.revature.project2.models.User;
import com.revature.project2.services.UserService;

@RestController
@CrossOrigin
public class UserController {

  @Autowired
  private UserService userService;
  
      //If needed, not sure where to map this to
/**  
  @GetMapping
  public User get(int id) {
    return userService.get(id);
  }
 **/

  
  @PostMapping("/login/create-account")
  public void save(@RequestBody User user) {
    userService.save(user);
  }

  @PostMapping("/profile/update-account")
  public void update(@RequestBody User user) {
    userService.update(user);
  }

  @PostMapping("/login")
  public Boolean validate(@RequestBody User user) {
    return userService.validate(user.getUsername(), user.getPassword());
  }
  
}
