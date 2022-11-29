import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { IUser } from './core/interfaces';
import { CreateUserDto } from './core/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login$(userData: { email: string, password: string }): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`http://localhost:3000/api/login`, userData, { withCredentials: true, observe: 'response' })
      .pipe(
        tap(response => console.log(response)),
        map(response => response.body),
      )
  }

  logout(): void {
  }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`http://localhost:3000/api/register`, userData, { withCredentials: true });
  }

  handleLogin(newUser: IUser) {
    console.log(newUser);
  }
}
