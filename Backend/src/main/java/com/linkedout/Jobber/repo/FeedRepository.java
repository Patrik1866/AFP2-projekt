package com.linkedout.Jobber.repo;

import com.linkedout.Jobber.domain.Feed;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedRepository extends JpaRepository<Feed,Long> {
    Feed findByFeedCode(String feedCode);
}