import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { User } from './user';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  newUser: User = new User();

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<User[]>('http://localhost:8080/afp2API/users').subscribe(data =>{
      this.users = data;
    })
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/afp2API/users', user);
  }

  onSubmit(): void {
    this.addUser(this.newUser).subscribe(user => {
      this.users.push(user);
    });
    this.newUser = new User();
  }
}

