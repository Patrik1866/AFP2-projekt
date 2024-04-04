package com.linkedout.Jobber.controller;

import com.linkedout.Jobber.domain.Employer;
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

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id){
        userRepository.deleteById(id);
    }
    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User updatedUser){
        User existingUser = userRepository.findById(id).orElseThrow(() ->
                new RuntimeException("User not found with this ID:" + id));
        existingUser.setName(updatedUser.getName());
        existingUser.setPassword(updatedUser.getPassword());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setJob(updatedUser.getJob());
        existingUser.setPhone(updatedUser.getPhone());
        existingUser.setPicture(updatedUser.getPicture());
        existingUser.setUserCode(updatedUser.getUserCode());
        existingUser.setAccountType(updatedUser.isAccountType());

        return userRepository.save(existingUser);
    }

}