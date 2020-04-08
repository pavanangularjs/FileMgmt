import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) { }

  login(user: User) {
    if (user.userName === 'admin' && user.password === 'admin' ) {
      // this.router.navigate(['/files']);
      this.loggedIn.next(true);
      this.router.navigate(['/dashboard']);
    } else if (user.userName === 'admin1' && user.password === 'admin1' ) {
      // this.router.navigate(['/files']);
      this.loggedIn.next(true);
      this.router.navigate(['/service-dashboard']);
    } else {
      this.loggedIn.next(false);
      alert('Invalid UserName/Password');
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
