import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { IUser } from '../interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get currentUser(): IUser {
    return this.userService.currentUser;
  }

  constructor(public authService: AuthService) {

  }

  logoutHandler(): void {
    this.userService.logout();
  }
}
