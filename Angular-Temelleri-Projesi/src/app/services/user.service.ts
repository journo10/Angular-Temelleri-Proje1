import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

isLoggedIn=false;

  constructor() { }

  login(){
    this.isLoggedIn=!this.isLoggedIn;
  }





}
