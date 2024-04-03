package com.linkedout.Jobber.controller;

import com.linkedout.Jobber.domain.Employer;
import com.linkedout.Jobber.domain.Feed;
import com.linkedout.Jobber.repo.FeedRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "https://localhost:4200")
@RestController
@RequestMapping("/afp2API")
public class FeedController {
    private final FeedRepository feedRepository;

    public FeedController(FeedRepository feedRepository){
        this.feedRepository = feedRepository;
    }

    @GetMapping("/feed")
    public List<Feed> getAllFeed() {
        return feedRepository.findAll();
    }
    @PostMapping("/feed")
    public Feed createFeed(@RequestBody Feed feed){ return feedRepository.save(feed);}
}
