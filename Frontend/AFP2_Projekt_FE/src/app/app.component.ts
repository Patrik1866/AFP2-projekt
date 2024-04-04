import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { JobpageComponent } from './jobpage/jobpage.component';
import { FreelancerspageComponent } from './freelancerspage/freelancerspage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, LoginComponent, RegisterComponent, RouterModule, NavbarComponent, HomepageComponent, MainpageComponent, CommonModule, ProfileComponent, JobpageComponent, FreelancerspageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AFP2_Projekt_FE';
}
