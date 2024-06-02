import { CanActivateFn } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthenticateService); // Obtiene una instancia del servicio
  const isAuthenticated = authService.isAuthenticated(); // Llama al método isAuthenticated()

  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

