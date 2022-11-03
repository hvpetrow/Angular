import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showText = true;

  users = {
    gosgho: 1,
    penco: 2
  }

  users2: boolean[] = [false, true];
  users3: string = "Ivan";

  changeTitleHandler(newTitle: string): void {
    this.title = newTitle;
  }

  toggleText(event: MouseEvent): void {
    event.preventDefault();
    this.showText = !this.showText;

  }

  title = '3';
}
