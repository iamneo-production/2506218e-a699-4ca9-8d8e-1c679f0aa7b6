package com.examly.springapp.service;

import com.examly.springapp.model.AppliedJob;
import com.examly.springapp.repository.AppliedJobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class AppliedJobsServiceImplementation implements AppliedJobsService {

    @Autowired
    AppliedJobsRepository appliedJobsRepository;
    @Override
    public AppliedJob createAppliedJob(AppliedJob appliedJob) {
      return appliedJobsRepository.save(appliedJob);
    }

    @Override
    public List<AppliedJob> fetchById(String jobUserId) {
        return appliedJobsRepository.findAllByjobUserId(jobUserId);
    }

    @Override
    public AppliedJob updateappliedJob(String appliedJobId, AppliedJob appliedJob) {
        AppliedJob A1=appliedJobsRepository.findById(appliedJobId).get();
        if(Objects.nonNull(appliedJob.getJobStatus())){
            A1.setJobStatus(appliedJob.getJobStatus());
        }

        if(Objects.nonNull(appliedJob.getFirstName())){
            A1.setFirstName(appliedJob.getFirstName());
        }
        if(Objects.nonNull(appliedJob.getPhoneNumber())){
            A1.setPhoneNumber(appliedJob.getPhoneNumber());
        }
        if(Objects.nonNull(appliedJob.getAddress())){
            A1.setAddress(appliedJob.getAddress());
        }
        if(Objects.nonNull(appliedJob.getYearOfExperience())){
            A1.setYearOfExperience(appliedJob.getYearOfExperience());
        }
        if(Objects.nonNull(appliedJob.getYearOfExperience())){
            A1.setEmail(appliedJob.getYearOfExperience());
        }
        return appliedJobsRepository.save(A1);
    }

    @Override
    public Optional<AppliedJob> findById(String appliedJobId) {
     return appliedJobsRepository.findById(appliedJobId);
    }

    @Override
    public List<AppliedJob> fetchBypersonId(String personId) {
       return  appliedJobsRepository.findAllBypersonId(personId);
    }

    @Override
    public List<String> findAllAppliedJobs(String personId) {
        System.out.println(appliedJobsRepository.findjobIdsBypersonId(personId));
      return  appliedJobsRepository.findjobIdsBypersonId(personId);
    }

    @Override
    public List<AppliedJob> findAllAppliedJob() {
        return appliedJobsRepository.findAll();
    }

    @Override
    public void deleteAppliedJob(String appliedJobId) {
     appliedJobsRepository.deleteById(appliedJobId);
    }


}
