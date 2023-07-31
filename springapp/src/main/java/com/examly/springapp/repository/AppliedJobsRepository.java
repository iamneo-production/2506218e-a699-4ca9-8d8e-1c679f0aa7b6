package com.examly.springapp.repository;

import com.examly.springapp.model.AppliedJob;
import com.examly.springapp.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface AppliedJobsRepository extends JpaRepository<AppliedJob,String> {
    public List<AppliedJob> findAllByjobUserId(String jobUserId) ;
    public List<AppliedJob> findAllBypersonId(String personId) ;

    @Query("SELECT e.jobId FROM AppliedJob e WHERE e.personId = :personId")
    public  List<String> findjobIdsBypersonId(@Param("personId") String personId);


}
