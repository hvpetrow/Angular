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

  title = '3';
}
