package com.examly.springapp.repository;

import com.examly.springapp.model.Admin;
import com.examly.springapp.model.JobSeeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface AdminRepository extends JpaRepository<Admin,String> {

    public String existsByadminId(String userId);

    public Boolean existsByEmailAndPassword(String email,String password) ;
    public Admin findByemail(String email) ;
}
