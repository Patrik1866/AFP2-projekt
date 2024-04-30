import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(private http: HttpClient) {
    this.loadUserData();
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
      console.log(userData);
    }
  }
  

  updateUserData() {
    this.http.put<any>(`http://localhost:8080/afp2API/users/${this.user.id}`, this.user)
      .subscribe(
        response => {
          console.log('User data updated successfully:', response);
          alert('Profile updated successfully!');
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
        },
        error => {
          console.error('Error updating employer data:', error);
          alert('Error updating profile. Please try again.');
        }
      );
  }
}
