package com.examly.springapp.repository;

import com.examly.springapp.model.Job;
import com.examly.springapp.model.User;
import javax.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<User, String> {
    public Boolean existsByEmailAndPassword(String email,String password) ;
    public User findByemail(String email) ;
    public String existsByid(String userId);

}
