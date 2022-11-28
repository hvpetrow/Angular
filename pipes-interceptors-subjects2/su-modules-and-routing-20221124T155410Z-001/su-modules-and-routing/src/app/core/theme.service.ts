import { Injectable } from '@angular/core';

export enum Theme {
  Dark = 'dark',
  Light = 'light'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme: Theme = Theme.Light;

  constructor(newTheme: Theme) {
    this.currentTheme = newTheme;
  }
}
