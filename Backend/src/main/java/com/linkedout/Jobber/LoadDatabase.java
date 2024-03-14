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
            userRepository.save(new User("Lajos", "123", "email@a.com", "job", "0620797238", "picture", "usercode"));
            userRepository.save(new User("Sándor", "asdasdasd", "email2@a.com", "job2", "0620797232", "picture2", "usercode2"));
            userRepository.save(new User("Zoltán", "lklsdfkl", "email3@a.com", "job3", "0620797235", "picture3", "usercode3"));
        };
    }
}
