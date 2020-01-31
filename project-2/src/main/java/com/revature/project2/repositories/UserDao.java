package com.revature.project2.repositories;

import com.revature.project2.models.User;

public interface UserDao {

  //Get user by Id
  User get(int id);
  
  //Create new user account
  void save(User user);
  
  //Update an existing account
  void update(User user);
  
  //Validate info for login---   User input is mapped to User obj ("User" param) OR change params to username/password strings
  User validate(User user);
  
}
