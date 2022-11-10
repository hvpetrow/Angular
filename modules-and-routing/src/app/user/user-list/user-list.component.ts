import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: IUser[] | undefined;
  errorLoadingUsers = false;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(search?: string): void {
    this.users = undefined;
    this.errorLoadingUsers = false;
  }

}
