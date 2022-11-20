import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form-reactive',
  templateUrl: './register-form-reactive.component.html',
  styleUrls: ['./register-form-reactive.component.css']
})
export class RegisterFormReactiveComponent implements OnInit {

  registerGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z]+\s[A-Z][a-z]+$/)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z]+@[a-z]+\.[a-z]+$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{3,16}$/)]),
    repass: new FormControl('', [Validators.required, this.isMatchPassword()]),
    tel: new FormControl('', [Validators.required]),
    building: new FormControl('', [Validators.required])
  });

  telPrefixes = [
    '+359',
    '+416',
    '+859'
  ];

  buildings = [
    'Designer',
    'Dummy',
    'Original'
  ]


  constructor() { }

  ngOnInit(): void {
  }

  isMatchPassword() {
    return (c: FormControl) => {
      if (!c.parent || c.value === c.parent.value.password) {
        return null;
      }
      return { invalid: true };
    }
  }

  onSubmit() {
    console.log();
  }

}
