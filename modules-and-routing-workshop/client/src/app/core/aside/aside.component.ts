import { Component, Input } from '@angular/core';
import { IPost, ITheme } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  @Input() title!: string;
  @Input() items: IPost[] | undefined;


  constructor() { }
}
