package com.linkedout.Jobber.repo;

import com.linkedout.Jobber.domain.Employer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployerRepository extends JpaRepository<Employer,Long> {
}
