import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() usersArray: IUser[] = [];
  @Output() addUser = new EventEmitter<IUser>();

  constructor(public userService: UserService) { }

  addNewUser(userNameInput: HTMLInputElement, userAgeInput: HTMLInputElement): void {
    const { value: name } = userNameInput;
    const { valueAsNumber: age } = userAgeInput;

    this.addUser.emit({ name, age });

    userNameInput.value = "";
    userAgeInput.value = "";
  }

  title = '3';
  showText = true;

  users = [
    {
      name: 'Gosho',
      age: 2
    },
    {
      name: 'Pesho',
      age: 28
    }
  ];

  addNewUserHandler(newUser: IUser): void {
    this.users.push(newUser);
  }

  users2: boolean[] = [false, true];
  users3: string = "Ivan";

  changeTitleHandler(inputEl: HTMLInputElement): void {
    this.title = inputEl.value;
    inputEl.value = '';
  }

  toggleText(event: MouseEvent): void {
    event.preventDefault();
    this.showText = !this.showText;

  }

}
