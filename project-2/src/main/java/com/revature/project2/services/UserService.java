package com.revature.project2.services;

import org.springframework.beans.factory.annotation.Autowired;
import com.revature.project2.models.User;
import com.revature.project2.repositories.UserDao;

public class UserService implements UserDao {

  @Autowired
  private UserDao userDao;
  
  
  @Override
  public User get(int id) {
    return userDao.get(id);
  }

  @Override
  public void save(User user) {
    userDao.save(user);
  }

  @Override
  public void update(User user) {
    userDao.update(user);
  }

  @Override
  public User validate(User user) {
    return userDao.validate(user);
  }

}
