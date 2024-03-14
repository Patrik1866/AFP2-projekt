import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { User } from './user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
 users: User[] = [];

 constructor(private http: HttpClient){}

 ngOnInit(): void {
   this.http.get<User[]>('http://localhost:8080/afp2API/users').subscribe(data =>{
    this.users = data;
   })
 }
}
