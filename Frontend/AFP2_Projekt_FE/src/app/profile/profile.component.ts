import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Job } from '../job';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class ProfileComponent {
  user = {
    id: '',
    name: '',
    email: '',
    job: '',
    phone: '',
    password: ''
  };

  isUser = true;

  employer = {
    id: '',
    name: '',
    password: '',
    email: '',
    job: '',
    phone: '',
  };

  newJob: Job = new Job(); // Initialize a new job object

  constructor(private http: HttpClient) {
    this.loadUserData();
  }

  get currentUserAccountType() {
    if (typeof window !== 'undefined') {
      let user = window.localStorage.getItem('user');
      if (user) {
        try {
          let parsedUser = JSON.parse(user);
          return parsedUser ? parsedUser.accountType : null;
        } catch(e) {
          console.error("Error parsing user data", e);
        }
      }
    }
    return null;
  }

  loadUserData() {
    if (typeof window !== 'undefined') {
      const userData = window.localStorage.getItem('user');
      const employerData = window.localStorage.getItem('employer');
      if (userData) {
        try {
          this.user = JSON.parse(userData);
          this.isUser = true;
        } catch(e) {
          console.error("Error parsing user data", e);
        }
      }
      if (employerData) {
        try {
          this.employer = JSON.parse(employerData);
          this.isUser = false;
        } catch(e) {
          console.error("Error parsing employer data", e);
        }
      }
    }
  }
  

  updateUserData() {
    this.http.put<any>(`http://localhost:8080/afp2API/users/${this.user.id}`, this.user)
      .subscribe(
        response => {
          console.log('User data updated successfully:', response);
          alert('Profile updated successfully!');
          // Update local storage after successful update
          window.localStorage.setItem('user', JSON.stringify(this.user));
        },
        error => {
          console.error('Error updating user data:', error);
          alert('Error updating profile. Please try again.');
        }
      );
  }

  updateEmployerData() {
    this.http.put<any>(`http://localhost:8080/afp2API/employers/${this.employer.id}`, this.employer)
      .subscribe(
        response => {
          console.log('Employer data updated successfully:', response);
          alert('Profile updated successfully!');
          // Update local storage after successful update
          window.localStorage.setItem('employer', JSON.stringify(this.employer));
        },
        error => {
          console.error('Error updating employer data:', error);
          alert('Error updating profile. Please try again.');
        }
      );
  }

  createJob() {
    // Retrieve user's information from local storage
    const employerData = window.localStorage.getItem('employer');
    if (employerData) {
      const employer = JSON.parse(employerData);
      // Set the CEO field based on the user's name
      this.newJob.CEO = employer.name;
      console.log(employer.name);
  
      this.http.post<any>('http://localhost:8080/afp2API/jobs', this.newJob)
        .subscribe(
          response => {
            console.log('Job added successfully:', response);
            alert('Job added successfully!');
            // Optionally, you can reset the form fields after successful submission
            this.newJob = new Job();
          },
          error => {
            console.error('Error adding job:', error);
            alert('Error adding job. Please try again.');
          }
        );
    } else {
      console.error("User data not found in local storage");
    }
  }
  
  
  
  
  
}
