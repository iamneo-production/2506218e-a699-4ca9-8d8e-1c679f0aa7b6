package com.examly.springapp.service;

import com.examly.springapp.model.User;
import java.util.List;
public interface UserService {
   public User createUser(User user);
 public  String logUser(String email,String password);
public  String fetchByUserByEmail(String email);
public  String verifyUser(String userId);
    public List<User>findAllUsers();

  public   User findUserByMail(String email);
}
