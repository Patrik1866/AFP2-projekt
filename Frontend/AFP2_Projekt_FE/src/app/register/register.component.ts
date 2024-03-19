import { Component } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routes } from '../app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  newUser: User = new User();

  constructor(private http: HttpClient) { }

  register(event: Event, name: string, password: string, email: string, job: string, phone: string, picture: string, userCode: string): void {
    event.preventDefault();
    this.newUser.name = name;
    this.newUser.password = password;
    this.newUser.email = email;
    this.newUser.job = job;
    this.newUser.phone = phone;
    this.newUser.picture = picture;
    this.newUser.userCode = userCode;

    this.addUser(this.newUser).subscribe(user => {
      window.alert('User registered successfully');
      console.log('User registered successfully');
    });
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/afp2API/users', user);
  }
}
