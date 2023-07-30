package com.examly.springapp.service;

import com.examly.springapp.model.User;
import com.examly.springapp.repository.AdminRepository;
import com.examly.springapp.repository.JobSeekerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
private AdminRepository adminRepository;
    @Autowired
private JobSeekerRepository jobSeekerRepository;
    @Override


    public User createUser(User user) {

     return    userRepository.save(user);


    }

    @Override
    public String logUser(String email, String password) {
        if(jobSeekerRepository.existsByEmailAndPassword(email,password))return "jobseeker";
       if(userRepository.existsByEmailAndPassword(email,password)) return "user";

      if(adminRepository.existsByEmailAndPassword(email,password))return "admin";


        return "deny";
    }

    @Override
    public String fetchByUserByEmail(String email) {
        Optional<User> user1= Optional.ofNullable(userRepository.findByemail(email));
        return user1.get().getId();
    }

    @Override
    public String verifyUser(String userId) {
       if(userRepository.existsById(userId))
           return "granted";
       else
           return "denied";
    }

    @Override
    public List<User> findAllUsers() {
return userRepository.findAll();
    }

    @Override
    public User findUserByMail(String email) {
 return userRepository.findByemail(email);
    }


}
