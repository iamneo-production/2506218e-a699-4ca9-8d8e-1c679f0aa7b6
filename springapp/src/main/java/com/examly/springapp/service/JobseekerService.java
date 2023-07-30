package com.examly.springapp.service;

import com.examly.springapp.model.JobSeeker;
import com.examly.springapp.model.User;
import org.springframework.stereotype.Component;

@Component
public interface JobseekerService  {





    JobSeeker createUser(JobSeeker jobSeeker);

    JobSeeker findJobseekerByMail(String email);
}
