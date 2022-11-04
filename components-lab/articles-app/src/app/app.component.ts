import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Article Site';

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = "";
  }


  private symbols: number = 250;
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image";

  readMore(): void {
    this.articleDescLen += 250;
    if (this.articleDescLen > this.articleDesc.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;

    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle === 'Show image'
      ? 'Hide image' : 'Show image';
  }

  hideDesc(): void {
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showReadMoreBtn = false;
    this.showHideBtn = true;
  }
}
