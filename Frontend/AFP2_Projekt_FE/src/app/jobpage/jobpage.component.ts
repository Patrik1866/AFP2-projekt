import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobpage.component.html',
  styleUrl: './jobpage.component.scss'
})
export class JobpageComponent implements OnInit {
  jobs = [
    {company: 'Company 1', jobTitle: 'Job Title 1', jobDescription: 'Job Description 1', salary: 'Salary 1'},
    {company: 'Company 2', jobTitle: 'Job Title 2', jobDescription: 'Job Description 2', salary: 'Salary 2'},
    {company: 'Company 3', jobTitle: 'Job Title 3', jobDescription: 'Job Description 3', salary: 'Salary 3'},
    {company: 'Company 4', jobTitle: 'Job Title 4', jobDescription: 'Job Description 4', salary: 'Salary 4'},
    {company: 'Company 5', jobTitle: 'Job Title 5', jobDescription: 'Job Description 5', salary: 'Salary 5'},
    {company: 'Company 6', jobTitle: 'Job Title 6', jobDescription: 'Job Description 6', salary: 'Salary 6'},
    // Add more jobs as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
