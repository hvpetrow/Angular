import { Component } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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

  //Lifecycle hooks

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {

  }

}
