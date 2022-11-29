import { Injectable } from '@angular/core';
import { IUser } from './core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  handleLogin(newUser: IUser) {
    console.log(newUser);
  }
}
