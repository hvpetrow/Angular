import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() usersArray: IUser[] = [];
  @Output() addUser = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewUser(userNameInput: HTMLInputElement, userAgeInput: HTMLInputElement): void {
    const { value: name } = userNameInput;
    const { valueAsNumber: age } = userAgeInput;

    this.addUser.emit({ name, age });

    userNameInput.value = "";
    userAgeInput.value = "";
  }
}
