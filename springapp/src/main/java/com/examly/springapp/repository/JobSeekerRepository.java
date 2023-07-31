package com.examly.springapp.repository;

import com.examly.springapp.model.JobSeeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface JobSeekerRepository extends JpaRepository<JobSeeker,String> {
public boolean existsByEmailAndPassword(String email,String password);


    public JobSeeker findByemail(String email) ;

}
