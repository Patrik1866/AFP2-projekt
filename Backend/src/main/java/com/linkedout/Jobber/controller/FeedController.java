package com.linkedout.Jobber.controller;

import com.linkedout.Jobber.domain.Employer;
import com.linkedout.Jobber.domain.Feed;
import com.linkedout.Jobber.domain.User;
import com.linkedout.Jobber.repo.FeedRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
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

    @DeleteMapping("/feed/{id}")
    public void deleteFeed(@PathVariable Long id){
        feedRepository.deleteById(id);
    }
    @PutMapping("/feed/{id}")
    public Feed updateFeed(@PathVariable Long id, @RequestBody Feed updatedTitle){
        Feed existingFeed = feedRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Feed not found with this ID:" + id));
        existingFeed.setTitle(updatedTitle.getTitle());
        existingFeed.setContent(updatedTitle.getContent());
        existingFeed.setFeedCode(updatedTitle.getFeedCode());
        existingFeed.setDate(new Date());

        return feedRepository.save(existingFeed);
    }
}
