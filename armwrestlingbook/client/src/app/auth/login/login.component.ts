import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z]+@[a-z]+\.[a-z]+$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  handleLogin() {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    this.auth.signInWithEmailAndPassword(email, password).then(user => {
      console.log(user.user);
    });
    this.router.navigate(['/']);

  }
}
