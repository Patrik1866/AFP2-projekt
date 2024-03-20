import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const user = window.localStorage.getItem('user');
    if (user) {
      return true;
    } else {
      this.router.navigate(['/homepage']);
      return false;
    }
  }
}
