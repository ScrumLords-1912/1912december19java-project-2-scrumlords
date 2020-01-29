package com.revature.controllers;

import java.io.IOException;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name= "FrontController", urlPatterns= {"/*"})
public class FrontController extends HttpServlet {

  @Override
  public void init() throws ServletException {
    // TODO Auto-generated method stub
    super.init();
  }
  
  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp)
      throws ServletException, IOException {

    String[] divider = req.getRequestURI().split("/");
  }
  
  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp)
      throws ServletException, IOException {
    
    String[] divider = req.getRequestURI().split("/");
  }
  
}
