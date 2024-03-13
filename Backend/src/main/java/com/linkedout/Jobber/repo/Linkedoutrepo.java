package com.linkedout.Jobber.repo;

import com.linkedout.Jobber.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Linkedoutrepo extends JpaRepository<User, Long> {
}
