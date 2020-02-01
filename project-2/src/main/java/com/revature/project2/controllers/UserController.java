package com.revature.project2.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import com.revature.project2.models.User;
import com.revature.project2.services.UserService;

@Controller
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
  public User validate(@RequestBody User user) {
    return userService.validate(user);
  }
  
}
