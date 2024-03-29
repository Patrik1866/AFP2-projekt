package com.linkedout.Jobber.domain;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "feed")
public class Feed implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String title;
    private String content;
    private Date date;

    public String getFeedCode() {
        return feedCode;
    }

    public void setFeedCode(String feedCode) {
        this.feedCode = feedCode;
    }

    private String feedCode;

    public Feed(){}
    public Feed(Long id, String title, String content,Date date,String feedCode){
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
        this.feedCode = feedCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }


}
