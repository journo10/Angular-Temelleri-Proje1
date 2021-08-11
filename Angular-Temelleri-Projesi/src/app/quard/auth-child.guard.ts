import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild,RouterStateSnapshot,} from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthChildGuard implements CanActivateChild {
 
constructor(private userservice: UserService) {}  
  
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):boolean{
    return this.userservice.isLoggedIn;
  }
}
