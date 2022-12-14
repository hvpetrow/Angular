import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPost, ITheme } from './interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  addTheme$(body: { themeName: string, postText: string }): Observable<ITheme> {
    return this.http.post<ITheme>(`http://localhost:3000/api/themes`, body, { withCredentials: true })
  }

  loadThemeList(searchTerm: string = ''): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`http://localhost:3000/api/themes?title=${searchTerm}`, {
      params: new HttpParams({
        fromObject: {

        }
      })
    });
  }

  loadThemeById(id: string): Observable<ITheme<IPost>> {
    return this.http.get<ITheme<IPost>>(`http://localhost:3000/api/themes/${id}`);
  }

}
