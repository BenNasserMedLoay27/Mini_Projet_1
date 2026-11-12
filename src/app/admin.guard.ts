import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  authService.loadSession();

  if (!authService.isloggedIn) {
    router.navigate(['/login']);
    return false;
  }
  if (!authService.isAdmin()) {
    router.navigate(['/app-forbidden']);
    return false;
  }
  return true;
};
