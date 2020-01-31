package com.revature.project2.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.revature.project2.models.User;
import com.revature.project2.services.UserService;

@Controller
@RequestMapping("/project-2")
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
  
  @GetMapping("/test")
  public void test( ) {
    System.out.println("Hit this endpoint");
  }
  
  @PostMapping("/login/create-account")
  public void save(User user) {
    userService.save(user);
  }

  @PostMapping("/profile")
  public void update(User user) {
    userService.update(user);
  }

  @PostMapping("/login")
  public User validate(User user) {
    return userService.validate(user);
  }
  
}
