package com.linkedout.Jobber.service;

import com.linkedout.Jobber.domain.Employer;
import com.linkedout.Jobber.repo.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.UUID;

public class EmployerService {
    private final EmployerRepository employerRepository;

    @Autowired
    public EmployerService(EmployerRepository employerRepository){
        this.employerRepository = employerRepository;
    }
    public Employer addEmployer(Employer employer){
        employer.setUserCode(UUID.randomUUID().toString());
        return employerRepository.save(employer);
    }
}
