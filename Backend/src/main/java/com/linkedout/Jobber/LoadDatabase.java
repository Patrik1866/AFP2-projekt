package com.linkedout.Jobber;

import com.linkedout.Jobber.domain.User;
import com.linkedout.Jobber.repo.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {
    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository){
        return args -> {
            userRepository.save(new User("name", "pass", "email", "job", "phone", "picture", "usercode"));
            userRepository.save(new User("name2", "pass2", "email2", "job2", "phone2", "picture2", "usercode2"));
            userRepository.save(new User("name3", "pass3", "email3", "job3", "phone3", "picture3", "usercode3"));
        };
    }
}
