package com.revature.project2.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.revature.project2.models.User;
import com.revature.project2.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

  @Autowired
  private UserService userService;
  
  @GetMapping
  public List<User> getAll(){
    return userService.getAll();
  }
  
  @GetMapping("/{id}")
  public User get(@PathVariable int id) {
    return userService.get(id);
  }
  
}
