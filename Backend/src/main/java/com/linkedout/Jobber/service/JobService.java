package com.linkedout.Jobber.service;

import com.linkedout.Jobber.domain.Job;
import com.linkedout.Jobber.repo.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class JobService {
    private final JobRepository jobRepository;

    @Autowired
    public JobService(JobRepository jobRepository){this.jobRepository = jobRepository;}

    public Job addJob(Job job){ return jobRepository.save(job); }
}
