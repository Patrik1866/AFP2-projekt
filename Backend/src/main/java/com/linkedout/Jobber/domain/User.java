package com.linkedout.Jobber.domain;

import jakarta.persistence.*;
import org.apache.catalina.valves.rewrite.InternalRewriteMap;

import java.io.Serializable;
import java.util.Locale;

@Entity
@Table(name = "users")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String password;
    private String email;
    private String job;
    private String phone;
    private String picture;
    private String userCode;
    private boolean accountType;

    public User(){}
    public User(String name,String password,String email,String job,String phone,String picture,String userCode, boolean accountType){
        this.name = name;
        this.password = password;
        this.email = email;
        this.job = job;
        this.phone = phone;
        this.picture = picture;
        this.userCode = userCode;
        this.accountType = accountType;
    }
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public String getJob(){
        return job;
    }
    public void setJob(String job){
        this.job = job;
    }
    public String getPhone(){
        return phone;
    }
    public void setPhone(String phone){
        this.phone = phone;
    }
    public String getPicture(){
        return picture;
    }
    public void setPicture(String picture){
        this.picture = picture;
    }
    public String getUserCode(){
        return userCode;
    }
    public void setUserCode(String userCode){
        this.userCode = userCode;
    }

    public boolean isAccountType() {
        return accountType;
    }

    public void setAccountType(boolean accountType) {
        this.accountType = accountType;
    }
}
