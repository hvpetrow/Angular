import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IUser } from '../customer/customer.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        if (event.url?.endsWith('login') || event.url?.endsWith('register')) {
          const newlyLoggedUser = event.body;
        }
      }
    }));
  }
}
