import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  login(email: string, password: string) {
    return from(this.auth.signInWithEmailAndPassword(email, password));
  }

  register(email: string, password: string) {
    return from(this.auth.createUserWithEmailAndPassword(email, password));
  }

  logout() {
    return from(this.auth.signOut());
  }
}
