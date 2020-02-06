package com.revature.project2.repositories;

import com.revature.project2.models.User;

public interface UserDao {

  
  /**
   * This method selects the user account based on their id
   */
  User get(int id);
  
  /**
   * This method can be used to save a newly created user account to the database
   */
  void save(User user);
  
  
  /**
   * This method can be used to update an existing user's account information
   */
  void update(User user);
  
  /**
   * Validates information for logging in
   * User input is mapped to User object ("User" parameter)
   */
  Integer validate(String username, String password);
  
}
