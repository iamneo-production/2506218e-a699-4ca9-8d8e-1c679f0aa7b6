package com.examly.springapp.service;

import com.examly.springapp.model.Job;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.Optional;

@Component
public interface JobService {
    public Job createJob(Job job);
   public List<Job> getAlljobs();


    List<Job> fetchByName(String user_id);
    Job updateDepartment(String departmentId, Job job);
    public Optional<Job> findByJobId(String jobId);
    public void deleteJobById(String jobId);
public String findJobwithId(String jobId);

    // List<Job>  findByAppliedId(List<String> idlist);
}
