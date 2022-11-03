import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "first-angular-project";
  showText = true;

  users = {
    gosgho: 1,
    penco: 2
  }

  users2: boolean[] = [false, true];
  users3: string = "Ivan";


  toggleText(event: MouseEvent): void {
    event.preventDefault();
    this.showText = !this.showText;

  }


}
