import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'loay', password: '123', roles: ['USER'] },
  ];

  loggedUser: string | null = null;
  isloggedIn = false;
  roles: string[] = [];

  constructor(private router: Router) {
    this.loadSession();
  }

  SignIn(credentials: User): boolean {
    const user = this.users.find(candidate =>
      candidate.username === credentials.username && candidate.password === credentials.password
    );
    if (!user) return false;

    this.loggedUser = user.username;
    this.roles = [...user.roles];
    this.isloggedIn = true;
    localStorage.setItem('loggedUser', user.username);
    localStorage.setItem('isloggedIn', 'true');
    return true;
  }

  loadSession(): void {
    const username = localStorage.getItem('loggedUser');
    const isLoggedIn = localStorage.getItem('isloggedIn') === 'true';
    const user = this.users.find(candidate => candidate.username === username);
    if (!isLoggedIn || !user) {
      this.clearSession();
      return;
    }

    this.loggedUser = user.username;
    this.roles = [...user.roles];
    this.isloggedIn = true;
  }

  logout(): void {
    this.clearSession();
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    return this.roles.includes('ADMIN');
  }

  private clearSession(): void {
    this.loggedUser = null;
    this.roles = [];
    this.isloggedIn = false;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('isloggedIn');
  }
}

