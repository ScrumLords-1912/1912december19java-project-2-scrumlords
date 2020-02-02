package com.revature.project2.services;

import java.util.List;
import org.springframework.stereotype.Service;
import com.revature.project2.models.User;
import com.revature.project2.repositories.UserDaoImpl;

@Service
public class UserService {

  UserDaoImpl userDao;
  
  public List<User> getAll(){
    return userDao.getAllUsers();
  }
  
  public User get(int id) {
    return userDao.getById(id);
  }
  
  public User getByUsername(String username) {
    return userDao.getByUsername(username);
  }
  
  public void saveOrUpdate(User user) {
    userDao.saveOrUpdate(user);
  }
  
  public void delete(User user) {
    userDao.delete(user);
  }
  
  public Boolean loginValidate(String username, String password) {
    User user = userDao.getByUsername(username);
    
    if (user == null) {
      return false;
    }
    if (user.getUsername().equals(username)) {
      if(user.getPassword().equals(password)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  
}
