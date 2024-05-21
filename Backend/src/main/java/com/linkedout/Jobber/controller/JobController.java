package com.linkedout.Jobber.controller;

import com.linkedout.Jobber.domain.Job;
import com.linkedout.Jobber.repo.JobRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/afp2API")
public class JobController {
    private final JobRepository jobRepository;

    public JobController(JobRepository jobRepository){this.jobRepository = jobRepository;}

    @GetMapping("/jobs")
    public List<Job> getJobs(){
        return jobRepository.findAll();
    }
    @PostMapping("/addjobs")
    public Job createJob(@RequestBody Job job){return jobRepository.save(job);}

    @DeleteMapping("/jobs/{id}")
    public void deleteJob(@PathVariable Long id){
        jobRepository.deleteById(id);
    }
    @PutMapping("/jobs/{id}")
    public Job updateJob(@PathVariable Long id, @RequestBody Job updatedJob){
        Job existingJob = jobRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Can't find a job with this ID: " + id));
        existingJob.setJobTitle(updatedJob.getJobTitle());
        existingJob.setJobDescription(updatedJob.getJobDescription());
        existingJob.setCompany(updatedJob.getCompany());
        existingJob.setSalary(updatedJob.getSalary());
        existingJob.setCeo(updatedJob.getCeo());

        return jobRepository.save(existingJob);
    }
}
