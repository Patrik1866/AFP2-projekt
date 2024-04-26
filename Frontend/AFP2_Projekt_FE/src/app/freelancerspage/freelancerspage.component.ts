import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-freelancerspage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './freelancerspage.component.html',
  styleUrl: './freelancerspage.component.scss'
})
export class FreelancerspageComponent implements OnInit{
  freelancers: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<User[]>('http://localhost:8080/afp2API/users').subscribe(data => {
      this.freelancers = data;
    });
  }
}