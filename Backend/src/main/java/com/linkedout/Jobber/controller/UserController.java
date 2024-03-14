package com.linkedout.Jobber.controller;

import com.linkedout.Jobber.domain.User;
import com.linkedout.Jobber.repo.UserRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/afp2API")
public class UserController {

    private final UserRepository userRepository;
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/users")
    public User createUsers(@RequestBody User user  ) {
        return userRepository.save(user);
    }

    // Add PUT and DELETE endpoints
}