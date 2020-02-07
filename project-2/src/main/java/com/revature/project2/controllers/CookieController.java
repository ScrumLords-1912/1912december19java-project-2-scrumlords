package com.revature.project2.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.revature.project2.models.Cookie;
import com.revature.project2.services.CookieService;

@RestController
@RequestMapping("/cookie")
public class CookieController {
  @Autowired
  private CookieService cs;
  
  @GetMapping("/{userID}")
  public Cookie getCookie(@PathVariable(name = "userID") Integer userID) {
    cs.setID(userID);
    return cs.getCookie();
  }
  
  @PostMapping("/{userID}")
  public void saveCookie(@RequestBody Cookie cookie, @PathVariable(name = "userID") Integer userID) {
    cs.setID(userID);
    cs.save(cookie);
  }
}
