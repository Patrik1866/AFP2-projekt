package com.linkedout.Jobber.controller;

import com.linkedout.Jobber.domain.Employer;
import com.linkedout.Jobber.domain.Feed;
import com.linkedout.Jobber.domain.User;
import com.linkedout.Jobber.repo.FeedRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/afp2API")
public class FeedController{
    private final FeedRepository feedRepository;

    public FeedController(FeedRepository feedRepository){
        this.feedRepository = feedRepository;
    }

    @GetMapping("/feed/getfeed")
    public List<Feed> getAllFeed() {
        return feedRepository.findAll();
    }
    @PostMapping("/feed/addfeed")
    public Feed createFeed(@RequestBody Feed feed){
        return feedRepository.save(feed);
    }

    @DeleteMapping("/feed/{feedCode}")
    public void deleteFeed(@PathVariable String feedCode){
        Feed feed = feedRepository.findByFeedCode(feedCode);
        if (feed != null){
            feedRepository.delete(feed);
        }else{
            throw new RuntimeException("Feed not found with this Feedcode" + feedCode);
        }
    }
    @PutMapping("/feed/{feedCode}")
    public Feed updateFeed(@PathVariable String feedCode, @RequestBody Feed updatedTitle){
        Feed existingFeed = feedRepository.findByFeedCode(feedCode);
        if (existingFeed == null){
            throw new RuntimeException("Feed code not found: " + feedCode);
        }else {
            existingFeed.setTitle(updatedTitle.getTitle());
            existingFeed.setContent(updatedTitle.getContent());
            existingFeed.setDate(new Date());
        }
        return feedRepository.save(existingFeed);
    }
}