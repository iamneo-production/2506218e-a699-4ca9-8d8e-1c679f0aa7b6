package com.examly.springapp.controller;

import com.examly.springapp.model.JobSeeker;
import com.examly.springapp.model.User;
import com.examly.springapp.service.JobseekerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/trainer")
@CrossOrigin("*")
public class JobSeekerController {


    @Autowired
    JobseekerService jobseekerService;

    @PostMapping(path = "/newregister")
    public JobSeeker createUser(@RequestBody JobSeeker jobSeeker) {

        return jobseekerService.createUser(jobSeeker);

    }
    @GetMapping("fetch/withemail/{email}")
    public JobSeeker finduserbyemail(@PathVariable("email") String email){
        return jobseekerService.findJobseekerByMail(email);

    }

}
