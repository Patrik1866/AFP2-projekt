package com.linkedout.Jobber.service;

import com.linkedout.Jobber.domain.Feed;
import com.linkedout.Jobber.repo.FeedRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.UUID;

public class FeedService {
    private final FeedRepository feedRepository;
    @Autowired
    public FeedService(FeedRepository feedRepository){
        this.feedRepository = feedRepository;
    }
    public Feed addFeed(Feed feed){
        feed.setFeedCode(UUID.randomUUID().toString());
        return feedRepository.save(feed);
    }
}
