package com.examly.springapp.controller;

import com.examly.springapp.model.Job;
import com.examly.springapp.repository.JobRepository;
import com.examly.springapp.service.JobService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
// @RequestMapping(path = "api/user",path="/admin")
@CrossOrigin("*")
public class JobController {

    @Autowired(required = true)
    JobService jobService;




    @PostMapping(path = "/addjob")
    public Job createJob(@RequestBody Job job){
        return jobService.createJob(job);
    }

    @GetMapping("/jobs")
    public List<Job> getAllJobs(){
        return jobService.getAlljobs();
    }
    @GetMapping("admin/job")
    public List<Job> getJobsAll(){
        return jobService.getAlljobs();
    }

    @GetMapping("/jobs/{userId}")
    public List<Job> getAllJobsbyuserId( @PathVariable("userId")String userId ){
        return jobService.fetchByName(userId);
    }
    @PutMapping("/jobs/editjob/{jobId}")
    public Job updateJob(@PathVariable("jobId")String jobId,@RequestBody Job newjob){
        return jobService.updateDepartment(jobId,newjob); //UPDATE JOB
    }
    @DeleteMapping("/jobs/deletejob/{jobId}")
    public void deleteJobById(@PathVariable("jobId") String jobId){
        jobService.deleteJobById(jobId);
    }
    @GetMapping("/editjob/{jobId}")
    public Optional<Job>  fetchJobByName(@PathVariable("jobId")String jobId){
      return  jobService.findByJobId(jobId);
    }
    @GetMapping("/job/fetch/{jobId}")
    public String getUserByJobId(@PathVariable("jobId")String jobId){
        return jobService.findJobwithId(jobId);
}


        // @GetMapping("/jobs/fetch/appliedjobs1")
        // public List<Job> getAlljobsById(@RequestParam(value = "idlist") List<String> idlist) {
        //     // Process the list of values here
        //     return jobService.findByAppliedId((idlist));
        // }


}



