package com.revature.project2.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import com.revature.project2.services.GameMatchService;

@Controller
@Scope("session")
public class GameMatchController {
  @Autowired
  private GameMatchService gms;
  
  
}
