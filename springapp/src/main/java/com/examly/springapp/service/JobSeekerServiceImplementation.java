package com.examly.springapp.service;

import com.examly.springapp.model.JobSeeker;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.JobSeekerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobSeekerServiceImplementation implements JobseekerService{
    @Autowired
    JobSeekerRepository jobSeekerRepository;
    @Override

    public JobSeeker createUser(JobSeeker jobSeeker) {
      return jobSeekerRepository.save(jobSeeker);
    }

    @Override
    public JobSeeker findJobseekerByMail(String email) {
        return jobSeekerRepository.findByemail(email);
    }


}
