import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot,CanDeactivate,RouterStateSnapshot,} from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthExitGuard implements CanDeactivate<boolean> {
  constructor(private userservice: UserService) {}
  canDeactivate(
    component: boolean,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):boolean {
    return !this.userservice.isLoggedIn;
  }
}
