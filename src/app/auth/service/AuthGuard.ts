import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginService } from '../service/login.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: LoginService
    ) { }

    canActivate(): boolean {
        if (!this.authenticationService.isLoggedIn()) {
          this.router.navigate(['']);
          return false;
        }
        return true;
      }
}