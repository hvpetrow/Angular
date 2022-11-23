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

  login$(userData: { username: string, password: string }): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`http://localhost:3000/api/login`, userData, { withCredentials: true })
      .pipe(tap(user => this.currentUser = user))

  }

  logout(): void {
  }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`http://localhost:3000/api/register`, userData, { withCredentials: true });
  }
}
