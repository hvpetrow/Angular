import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z]+@[a-z]+\.[a-z]+$/)]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repass: new FormControl('', [Validators.required, this.isMatchPassword()]),
    });
  }

  isMatchPassword() {
    return (c: FormControl) => {
      if (!c.parent || c.value === c.parent.value.password) {
        return null;
      }
      return { invalid: true };
    }
  }

  handleRegister() {
    console.log(this.registerForm.value);
    const { email, password } = this.registerForm.value;
    this.auth.createUserWithEmailAndPassword(email, password).then(user => {
      console.log('Created User From Firebase' + user.user);
    });

    this.router.navigate(['/']);
  }
}
