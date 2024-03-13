package com.linkedout.Jobber.controller;

import com.linkedout.Jobber.domain.User;
import com.linkedout.Jobber.repo.UserRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getAllEmployees() {
        return userRepository.findAll();
    }

    @PostMapping("/employees")
    public User createEmployee(@RequestBody User user  ) {
        return userRepository.save(user);
    }

    // Add PUT and DELETE endpoints
}