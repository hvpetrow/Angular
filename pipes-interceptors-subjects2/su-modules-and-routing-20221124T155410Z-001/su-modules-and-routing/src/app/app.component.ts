import { Component, Inject, Injectable } from '@angular/core';
import { ENGINES_TOKEN } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'su-modules-and-routing';

  constructor(@Inject(ENGINES_TOKEN) private engine: Engine) {
    console.log(this.engine);

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
