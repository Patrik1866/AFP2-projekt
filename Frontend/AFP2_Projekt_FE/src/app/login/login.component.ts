import { Component } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { routes } from '../app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Employer } from '../employer';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  users: User[] = [];
  employers: Employer[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<User[]>('http://localhost:8080/afp2API/users').subscribe(data => {
      this.users = data;
      
    });
    this.http.get<Employer[]>('http://localhost:8080/afp2API/employers').subscribe(data => {
      this.employers = data;
      
    });
  }

  login(event: Event, name: string, password: string): void {
    event.preventDefault(); // This line prevents the form from being submitted
  
    const user = this.users.find(user => user.name === name && user.password === password);
    const employer = this.employers.find(employer => employer.name === name && employer.password === password);

    if (employer) {
      window.alert('Login successful');
      console.log('Login successful');
      localStorage.setItem('user', JSON.stringify(employer)); // Store user data in localStorage
      this.router.navigate(['/mainpage']);
    }else if(user){
      window.alert('Login successful');
      console.log('Login successful');
      localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
      this.router.navigate(['/mainpage']);
    } else {
      window.alert('Invalid credentials');
      console.log('Invalid credentials');
    }
    
  }
  
}

