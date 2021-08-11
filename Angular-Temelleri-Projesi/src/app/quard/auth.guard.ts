import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate,RouterStateSnapshot,} from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

constructor(private userservice: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('route', route);
    console.log('state', state);

    return this.userservice.isLoggedIn;
  }
}
