import { Component } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routes } from '../app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, Validator, Validators } from '@angular/forms';
import { error } from 'node:console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  newUser: User = new User();
  

  constructor(private http: HttpClient, private router: Router) { }

  register(event: Event, name: string, password: string, email: string, job: string, phone: string, picture: string, userCode: string): void {
    event.preventDefault();
    if (password.length >= 5 && /\d/.test(password)) {
      this.newUser.password = password;
    } else {
      window.alert("Invalid password");
      return;
    }
    if (name.length >= 4) {
      name = name.charAt(0).toUpperCase() + name.slice(1);
      this.newUser.name = name;
    } else {
      window.alert("Wrong format for the name");
      return;
    }
    this.newUser.email = email;
    this.newUser.job = job;
    this.newUser.phone = phone;
    this.newUser.picture = picture;
    this.newUser.userCode = userCode;

    this.addUser(this.newUser).subscribe(user => {
      window.alert('User registered successfully');
      console.log('User registered successfully');
      this.router.navigate(['/login']);
    });
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/afp2API/users', user);
  }
}
