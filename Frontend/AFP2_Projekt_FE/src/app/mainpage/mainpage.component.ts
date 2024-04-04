import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent implements OnInit{

  posts: Post[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
    const user = localStorage.getItem('user');
    if (!user) {
      this.router.navigate(['/login']);
    }
    else{
      console.log(user);
    }
  }

  loadPosts(): void {
    // Here you would typically make a HTTP request to your backend to fetch the posts
    // For simplicity, we'll just use some dummy data
    this.posts = [
      { title: 'Post 1', content: 'This is the first post.' },
      { title: 'Post 2', content: 'This is the second post.' },
      // Add more posts as needed
    ];
  }

}
