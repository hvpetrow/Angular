import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from './shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  loadThemes() {
    return this.http.get<ITheme[]>('http://localhost:3000/api/themes');
  }

  loadPosts(take?: number) {
    const query = take ? `?take=${take}` : '';
    return this.http.get<IPost[]>(`http://localhost:3000/api/posts${query}`);
  }
}
