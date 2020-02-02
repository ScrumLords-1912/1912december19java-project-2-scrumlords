package com.revature.project2.repositories;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import com.revature.project2.models.User;

@Repository
@Transactional
@EnableTransactionManagement
public class UserDaoImpl {

  private SessionFactory sf;

  @Autowired
  public UserDaoImpl(SessionFactory sf) {
    this.sf = sf;
  }

  public List<User> getAllUsers() {
    Session session = sf.getCurrentSession();

    Query q = session.createQuery("from \"user\"");
    List<User> users = q.list();

    return users;
  }

  public User getById(Integer id) {
    Session session = sf.getCurrentSession();

    User user = (User) session.get(User.class, id);

    return user;

  }

  public User getByUsername(String username) {
    Session session = sf.getCurrentSession();

    User user = null;

    Query q = session.createQuery("from \"user\" where username = :username");
    q.setString("username", username);

    if (q.list().isEmpty()) {
      return user;
    } else {
      user = (User) q.list().get(0);
      return user;
    }

  }
  
  public void saveOrUpdate(User user) {
    Session session = sf.getCurrentSession();
    
    session.saveOrUpdate(user);
  }
  
  public void delete(User user) {
    Session session = sf.getCurrentSession();
    
    session.delete(user);
  }


}


