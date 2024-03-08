package com.linkedout.Jobber.service;

import com.linkedout.Jobber.domain.User;
import com.linkedout.Jobber.repo.Linkedoutrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {
    private final Linkedoutrepo linkedoutrepo;
    @Autowired
    public UserService(Linkedoutrepo linkedoutrepo){
        this.linkedoutrepo = linkedoutrepo;
    }

    public User addUser(User user){
        user.setUserCode(UUID.randomUUID().toString());
        return linkedoutrepo.save(user);
    }
}
