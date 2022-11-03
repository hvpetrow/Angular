import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() usersArray: IUser[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
