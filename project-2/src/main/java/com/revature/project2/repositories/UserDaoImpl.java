package com.revature.project2.repositories;

import javax.transaction.Transactional;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import com.revature.project2.models.User;

/**
 * The actual implementation of the Dao, which connects to the database
 * @author User
 *
 */
@Repository
@Transactional
@EnableTransactionManagement
public class UserDaoImpl {
  
  @Autowired
  private SessionFactory sf;
    

  public UserDaoImpl(SessionFactory sf) {
      this.sf = sf;
    }
  

  public User get(int id) {
    Session session = sf.getCurrentSession();
    User user = (User) session.get(User.class,id);
    return user;
  }

  public void save(User user) {
    Session session = sf.getCurrentSession();
    session.save(user);
  }

  public void update(User user) {
    Session session = sf.getCurrentSession();
    session.update(user);
  }

  public Integer validate(String username, String password) {
    Session session = sf.getCurrentSession();
    Query checkInfo = session.createQuery("from User WHERE username = :username AND password = :password");
    checkInfo.setString("username", username);
    checkInfo.setString("password", password);
    
    if (checkInfo.list().size() > 0) {
      User use = (User) checkInfo.list().get(0);
      return use.getId();
    }else {
      return 0;
    }
    
    
  }  
  
}
