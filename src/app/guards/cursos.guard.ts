import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/RX';

import { AuthService } from '../login/auth.service';

@Injectable()
export class CursosGuard implements CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

}
