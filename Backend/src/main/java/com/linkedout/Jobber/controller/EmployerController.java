package com.linkedout.Jobber.controller;

import com.linkedout.Jobber.domain.Employer;
import com.linkedout.Jobber.domain.User;
import com.linkedout.Jobber.repo.EmployerRepository;
import com.linkedout.Jobber.repo.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/afp2API")
public class EmployerController {

    private final EmployerRepository employerRepository;
    public EmployerController(EmployerRepository employerRepository) {
        this.employerRepository = employerRepository;
    }

    @GetMapping("/employers")
    public List<Employer> getAllEmployers() {
        return employerRepository.findAll();
    }

    @PostMapping("/employers")
    public Employer createEmployers(@RequestBody Employer employer  ) {
        return employerRepository.save(employer);
    }

    // Add PUT and DELETE endpoints
}