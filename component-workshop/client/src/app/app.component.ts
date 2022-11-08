import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { IPost, ITheme } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: IPost[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.posts = undefined;
    this.contentService.loadPosts(5).subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
