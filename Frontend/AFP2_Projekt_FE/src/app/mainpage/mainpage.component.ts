import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Feed } from '../feed';
import { response } from 'express';
import { error, time, timeStamp } from 'console';
import { User } from '../user';
import { json } from 'stream/consumers';
import { Observable, timestamp } from 'rxjs';
import { FormControl, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})

export class MainpageComponent implements OnInit{

  newFeed: Feed = new Feed();
  posts: Feed[] = [];
  content: string = '';
  currentuser: any;
  popup: boolean = false;
  selectedPost: Feed = new Feed();
  

  titleFormControl = new FormControl('', [Validators.required]);
  contentFormControl = new FormControl('', [Validators.maxLength(5000)]);

  constructor(private router: Router,private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPosts();
    if (typeof localStorage !== 'undefined') {
      const user = localStorage.getItem('user');
      if (!user) {
        this.router.navigate(['/login']);
      }
      else{
        console.log(user);
        this.currentuser = JSON.parse(user);
      }
    }
  }

 

  loadPosts(): void {
    this.http.get<Feed[]>('http://localhost:8080/afp2API/feed/getfeed').subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (error) => {
        console.error('error',error)
      }
    })
  }

  postContent(title: string, content: string): void {
    let userItem = localStorage.getItem('user');
    if (!userItem) {
      console.error('User data not found in local storage');
      return;
    }

    if (!this.checkNotEmpty(title)) {
      alert('Post title cannot be empty!');
      return;
    }

    if(!this.checkNotEmpty(content)){
      alert('Post content cannot be empty!');
      return;
    }

    if (this.contentFormControl.invalid || content.length > 5000) {
      alert('Post content cannot exceed 5000 characters!'); // Alert if content exceeds 5000 characters
      return;
    }

    this.newFeed.username = this.currentuser.name;
    this.newFeed.title = title;
    this.newFeed.content = content.toString();
    this.newFeed.date = new Date();
    this.newFeed.feedCode = Math.random().toString(36).substring(2,15),
  
    this.addPost(this.newFeed, '/feed/addfeed').subscribe({
      next: (feed) => {
        console.log(feed);
        this.loadPosts();
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
  
  checkNotEmpty(title: string): boolean {
    return !!title.trim(); 
  }

  addPost(feed: Feed, endpoint: string): Observable<Feed>{
      return this.http.post<Feed>('http://localhost:8080/afp2API/feed/addfeed', feed);
  }

  deletePost(feed: Feed): void{
    this.http.delete<Feed>('http://localhost:8080/afp2API/feed/' + feed.feedCode).subscribe({
      next: (response) => {
        console.log(response);
        this.loadPosts();
      },
      error: (error) => {
        error;
      }
    });
  }
  updatePost(feed: Feed,title:string,content: string): void{
    const updatedPost = {
      title: title,
      content: content
    }
    
    this.http.put<Feed>('http://localhost:8080/afp2API/feed/' + feed.feedCode, updatedPost).subscribe({
      next: (response) => {
        console.log(response);
        this.loadPosts();
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
  