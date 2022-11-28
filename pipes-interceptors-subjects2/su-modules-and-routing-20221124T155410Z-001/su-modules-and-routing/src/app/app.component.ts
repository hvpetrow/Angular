import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injectable, Output } from '@angular/core';
import { ENGINES_TOKEN } from './app.module';
import { Theme, ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'su-modules-and-routing';


  // constructor(@Inject(ENGINES_TOKEN) private engine: Engine) {
  //   console.log(this.engine);

  // }

  constructor(@Inject(DOCUMENT) private document: Document, private themeService: ThemeService) {
    const themeIsDark = this.themeService.currentTheme === Theme.Dark;

    if (themeIsDark) {
      this.document.body.classList.add('dark-theme');
    } else {
      this.document.body.classList.add('light-theme')
    }
  }
}


export abstract class Engine {
}

@Injectable()
export class PetrolEngine extends Engine {
}

@Injectable()
export class DieselEngine extends Engine {
}
