package com.revature.project2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.project2.models.User;
import com.revature.project2.repositories.UserDao;
import com.revature.project2.repositories.UserDaoImpl;

/**
 * This class implements the UserDao interface and utilizes the user dao implementaion (UserDaoImpl.class)
 * @author User
 *
 */
@Service
public class UserService implements UserDao {

  @Autowired
  private UserDaoImpl userDao;
  
  
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
  public Boolean validate(String username, String password) {
    return userDao.validate(username, password);
  }

}
