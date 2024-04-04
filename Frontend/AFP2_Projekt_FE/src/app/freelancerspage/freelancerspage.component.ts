import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-freelancerspage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './freelancerspage.component.html',
  styleUrl: './freelancerspage.component.scss'
})
export class FreelancerspageComponent implements OnInit{
  freelancers = [
    {name: 'Freelancer 1', job: 'Job 1', email: 'email1@example.com', phone: '123-456-7890'},
    {name: 'Freelancer 2', job: 'Job 2', email: 'email2@example.com', phone: '123-456-7891'},
    {name: 'Freelancer 3', job: 'Job 3', email: 'email3@example.com', phone: '123-456-7892'},
    {name: 'Freelancer 4', job: 'Job 4', email: 'email4@example.com', phone: '123-456-7893'},
    {name: 'Freelancer 5', job: 'Job 5', email: 'email5@example.com', phone: '123-456-7894'},
    {name: 'Freelancer 6', job: 'Job 6', email: 'email6@example.com', phone: '123-456-7895'},
    // Add more freelancers as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
