import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  get currentUserName() {
    if (typeof window !== 'undefined') {
      let user = window.localStorage.getItem('user');
      if (user) {
        try {
          let parsedUser = JSON.parse(user);
          return parsedUser ? parsedUser.name : '';
        } catch(e) {
          console.error("Error parsing user data", e);
        }
      }
    }
    return '';
  }
  get currentUserEmail() {
    if (typeof window !== 'undefined') {
      let user = window.localStorage.getItem('user');
      if (user) {
        try {
          let parsedUser = JSON.parse(user);
          return parsedUser ? parsedUser.email : '';
        } catch(e) {
          console.error("Error parsing user data", e);
        }
      }
    }
    return '';
  }
  
  get currentUserJob() {
    if (typeof window !== 'undefined') {
      let user = window.localStorage.getItem('user');
      if (user) {
        try {
          let parsedUser = JSON.parse(user);
          return parsedUser ? parsedUser.job : '';
        } catch(e) {
          console.error("Error parsing user data", e);
        }
      }
    }
    return '';
  }
  
  get currentUserPhone() {
    if (typeof window !== 'undefined') {
      let user = window.localStorage.getItem('user');
      if (user) {
        try {
          let parsedUser = JSON.parse(user);
          return parsedUser ? parsedUser.phone : '';
        } catch(e) {
          console.error("Error parsing user data", e);
        }
      }
    }
    return '';
  }
  
  get currentUserPassword() {
    if (typeof window !== 'undefined') {
      let user = window.localStorage.getItem('user');
      if (user) {
        try {
          let parsedUser = JSON.parse(user);
          return parsedUser ? parsedUser.password : '';
        } catch(e) {
          console.error("Error parsing user data", e);
        }
      }
    }
    return '';
  }
  
}
