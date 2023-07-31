package com.examly.springapp.service;

import com.examly.springapp.model.AppliedJob;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface AppliedJobsService {
    public AppliedJob createAppliedJob(AppliedJob appliedJob);
    public List<AppliedJob> fetchById(String jobUserId);
    public AppliedJob updateappliedJob(String appliedJobId, AppliedJob appliedJob);

   public Optional<AppliedJob> findById(String appliedJobId);
   public  List<AppliedJob>fetchBypersonId(String personId);

    List<String> findAllAppliedJobs(String personId);
    List<AppliedJob>findAllAppliedJob();

    void deleteAppliedJob(String appliedJobId);
}
