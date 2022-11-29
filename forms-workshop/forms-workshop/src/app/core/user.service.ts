import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from './interfaces';
import { StorageService } from './storage.service';

export interface CreateUserDto { username: string, email: string, password: string, tel?: string }

@Injectable()
export class UserService {

  currentUser: IUser;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor(private storage: StorageService, private httpClient: HttpClient) {
    console.log('UserService#constructor')

  }


  getProfile$(): Observable<IUser> {
    return this.httpClient.get<IUser>(`http://localhost:3000/api/users/profile`, { withCredentials: true }).pipe(tap(user => this.currentUser = user));
  }
}
