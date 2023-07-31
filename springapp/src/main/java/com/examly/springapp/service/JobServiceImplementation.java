package com.examly.springapp.service;

import com.examly.springapp.model.Job;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public  class JobServiceImplementation implements JobService {
    @Autowired
    private JobRepository jobRepository;


    @Override
    public Job createJob(Job job) {

        return jobRepository.save(job);


    }


    @Override
    public List<Job> getAlljobs() {
        return jobRepository.findAll();
    }

    @Override
    public List<Job> fetchByName(String userId) {
      return jobRepository.findAllByuserId(userId);
    }

    @Override
    public Job updateDepartment(String departmentId, Job job) {//new job
        Job J1=jobRepository.findById(departmentId).get();// job to edit
        if(Objects.nonNull(job.getJob_description())){
            J1.setJob_description(job.getJob_description());
        }
        if(Objects.nonNull(job.getJob_location())){
            J1.setJob_location(job.getJob_location());
        }
        if(Objects.nonNull(job.getFrom_date())){
            J1.setFrom_date(job.getFrom_date());
        }
        if(Objects.nonNull(job.getWage_per_day())){
            J1.setWage_per_day(job.getWage_per_day());
        }
        if(Objects.nonNull(job.getTo_date())){
            J1.setTo_date(job.getTo_date());
        }
        if(Objects.nonNull(job.getActiveStatus())){
            J1.setActiveStatus(job.getActiveStatus());
        }

        return jobRepository.save(J1);
    }

    @Override
    public Optional<Job> findByJobId(String jobId) {
        return jobRepository.findById(jobId);
    }

    @Override
    public void deleteJobById(String jobId) {
        jobRepository.deleteById(jobId);
    }

    @Override
    public String findJobwithId(String jobId) {
        Optional<Job> job1= Optional.ofNullable(jobRepository.findByjobId(jobId));
        return job1.get().getUserId();
    }

//     @Override
//     public List<Job> findByAppliedId(List<String> idlist) {
//    return jobRepository.findByAppliedId(idlist);
//     }


}
