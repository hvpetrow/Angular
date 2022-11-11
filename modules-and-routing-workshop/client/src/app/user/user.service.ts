import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable()
export class UserService {


  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() { }

  login(email: string, password: string): void {
    setTimeout(() => {
      this.user = {
        email,
        firstName: 'John',
        lastName: 'Doe'
      }
    }, 1000)
  }

  logout(): void {
    setTimeout(() => {
      this.user = undefined;
    }, 1000)
  }
}
