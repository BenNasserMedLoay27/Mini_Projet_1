import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Mes Universités';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.loadSession();
    if (!this.authService.isloggedIn && this.router.url !== '/login') {
      this.router.navigate(['/login']);
    }
  }

  onLogout(): void {
    this.authService.logout();
  }
}
