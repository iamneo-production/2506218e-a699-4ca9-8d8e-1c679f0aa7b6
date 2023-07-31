package com.examly.springapp.repository;

import com.examly.springapp.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import java.util.*;
@EnableJpaRepositories
@Repository
public interface JobRepository extends JpaRepository<Job,String> {

     public List<Job> findAllByuserId(String userId) ;
public  Job findByjobId(String jobId);

     // @Query("SELECT Job  FROM Job e WHERE e.jobId IN :idlist")
// public List<Job>findByAppliedId(List<String> idlist);


}
