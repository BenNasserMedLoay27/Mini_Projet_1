import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user = new User();
  erreur = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLoggedin(): void {
    this.erreur = !this.authService.SignIn(this.user);
    if (!this.erreur) this.router.navigate(['/universites']);
  }
}
