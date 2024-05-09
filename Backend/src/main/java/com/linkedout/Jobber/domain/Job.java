package com.linkedout.Jobber.domain;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "jobs")
public class Job implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String company;
    private String jobTitle;
    private String jobDescription;
    private Long salary;

    private String CEO;

    public Job(){}
    public Job(Long  id, String company, Long salary, String jobTitle, String jobDescription, String CEO){
        this.id = id;
        this.company = company;
        this.salary = salary;
        this.jobTitle = jobTitle;
        this.jobDescription = jobDescription;
        this.CEO = CEO;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }
    public Long getSalary(){
        return salary;
    }
    public void  setSalary(Long price){
        this.salary = price;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public String getCEO() {
        return CEO;
    }

    public void setCEO(String CEO) {
        this.CEO = CEO;
    }
}
