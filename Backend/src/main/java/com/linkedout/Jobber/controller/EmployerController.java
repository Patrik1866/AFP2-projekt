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
    @DeleteMapping("/employers/{id}")
    public void deleteEmployer(@PathVariable Long id){
        employerRepository.deleteById(id);
    }
    @PutMapping("/employers/{id}")
    public Employer updateEmployer(@PathVariable Long id, @RequestBody Employer updateEmployer){
        Employer existingEmployer = employerRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Employer not found with this ID:" + id));
        existingEmployer.setName(updateEmployer.getName());
        existingEmployer.setPassword(updateEmployer.getPassword());
        existingEmployer.setEmail(updateEmployer.getEmail());
        existingEmployer.setJob(updateEmployer.getJob());
        existingEmployer.setPhone(updateEmployer.getPhone());
        existingEmployer.setPicture(updateEmployer.getPicture());
        existingEmployer.setUserCode(updateEmployer.getUserCode());
        existingEmployer.setAccountType(updateEmployer.isAccountType());

        return employerRepository.save(existingEmployer);
    }




    // Add PUT and DELETE endpoints
}