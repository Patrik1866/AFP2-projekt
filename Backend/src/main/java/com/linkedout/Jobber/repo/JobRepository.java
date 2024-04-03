package com.linkedout.Jobber.repo;

import com.linkedout.Jobber.domain.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}
