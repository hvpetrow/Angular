import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { IRootState, login, logout } from './+store';
import { IUser } from './core/interfaces';
import { CreateUserDto } from './core/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$ = this.store.select(globalState => globalState.currentUser);
  isLoggedIn$ = this.currentUser$.pipe(map(user => !!user));

  constructor(private httpClient: HttpClient, private store: Store<IRootState>) {
  }

  login$(userData: { email: string, password: string, }): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`http://localhost:3000/api/login`, userData, { withCredentials: true, observe: 'response' })
      .pipe(
        tap(response => console.log(response)),
        map(response => response.body),
      )
  }

  logout$() {
    return this.httpClient.post<IUser>(`http://localhost:3000/api/logout`, {}, { withCredentials: true })
  }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`http://localhost:3000/api/register`, userData, { withCredentials: true });
  }

  handleLogin(newUser: IUser) {
    this.store.dispatch(login({ user: newUser }));
  }

  handleLogout() {
    this.store.dispatch(logout());
  }

  authenticate(): Observable<IUser> {
    return this.httpClient.get<IUser>(`http://localhost:3000/api/users/profile`, { withCredentials: true })
      .pipe(tap(currentProfile => this.handleLogin(currentProfile)),
        catchError((err) => {
          return EMPTY;
        }));
  }

}
