import { Component, Input } from '@angular/core';
import { ITheme } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  @Input() title!: string;
  @Input() items: ITheme[] | undefined;


  constructor() { }
}
