import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router) {}
  get isLoggedIn() {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('user') !== null;
    }
    return false;
  }

  logout() {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('user');
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function(event) {
        window.history.go(1);
      };
    }
    this.router.navigate(['/login']);
  }
  
  
}
