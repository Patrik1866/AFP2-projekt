import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProfileComponent } from './profile/profile.component';
import { JobpageComponent } from './jobpage/jobpage.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'homepage', component: HomepageComponent },
    { path: 'mainpage', component: MainpageComponent },
    {path: 'profile', component: ProfileComponent},
    {path: 'jobpage', component: JobpageComponent}
  ];
