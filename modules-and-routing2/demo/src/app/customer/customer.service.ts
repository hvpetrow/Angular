import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IUser {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getUsers$(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
