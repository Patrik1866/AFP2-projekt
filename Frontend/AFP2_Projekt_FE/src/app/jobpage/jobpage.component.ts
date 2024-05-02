import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobpage',
  standalone: true,
  templateUrl: './jobpage.component.html',
  styleUrl: './jobpage.component.scss',
  imports: [CommonModule]
})
export class JobpageComponent implements OnInit {
  jobs: any[] = []; // Initialize jobs array to store fetched jobs

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchJobs(); // Fetch jobs when component initializes
  }

  fetchJobs() {
    this.http.get<any[]>('http://localhost:8080/afp2API/jobs')
      .subscribe(
        response => {
          console.log('Fetched jobs successfully:', response);
          this.jobs = response; // Assign fetched jobs to the jobs array
        },
        error => {
          console.error('Error fetching jobs:', error);
          // Handle error, such as displaying an error message to the user
        }
      );
  }
}
