package com.examly.springapp.controller;

import com.examly.springapp.model.AppliedJob;
import com.examly.springapp.service.AppliedJobsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/trainer")
@CrossOrigin("*")
public class AppliedJobController {

    @Autowired
    AppliedJobsService appliedJobsService;

    @PostMapping("/applyjob/newjob")
    public AppliedJob createJob(@RequestBody AppliedJob appliedJobs){
        return appliedJobsService.createAppliedJob(appliedJobs);
    }

    @GetMapping("/jobs/{jobUserId}")
    public List<AppliedJob> getAllJobs(@PathVariable("jobUserId")String jobUserId){
        return appliedJobsService.fetchById(jobUserId);
    }
    @PutMapping("/jobs/updatejobstatus/{appliedJobId}")
    public AppliedJob updateJob(@PathVariable("appliedJobId")String appliedJobId, @RequestBody AppliedJob appliedJob){
        return appliedJobsService.updateappliedJob(appliedJobId,appliedJob);
    }
    @GetMapping("/jobs/fetch/{appliedJobId}")
    public Optional<AppliedJob> findAppliedJobById(@PathVariable("appliedJobId") String appliedJobId){
        return appliedJobsService.findById(appliedJobId);
    }
    @GetMapping("jobs/fetch/data/{personId}")
    public List<AppliedJob> getAllJobsByTrainer(@PathVariable("personId")String personId){
        return appliedJobsService.fetchBypersonId(personId);
    }
    @GetMapping("jobs/fetch/appliedjobs/{personId}")
    public  List<String> findAllAppliedJobs(@PathVariable ("personId")String personId){
        return appliedJobsService.findAllAppliedJobs(personId);
    }
        @DeleteMapping("jobs/delete/appliedjob/{appliedJobId}")
    public void deleteAppliedJob(@PathVariable("appliedJobId")String appliedJobId)
    {
     appliedJobsService.deleteAppliedJob(appliedJobId);
    }
    @GetMapping("fetch/allappliedjobs")
    public List<AppliedJob>fetchAllAppliedJobs(){
      return   appliedJobsService.findAllAppliedJob();
    }

}
