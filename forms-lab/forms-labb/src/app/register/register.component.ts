import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerForm') registerForm!: NgForm;
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

  // registerForm = new FormGroup({
  //   username: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{3,}$/)]),
  //   email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z]+@[a-z]+\.[a-z]+$/)]),
  //   password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{3,16}$/)]),
  //   confirmPassword: new FormControl('', [Validators.required, this.isMatchPassword()])
  // });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

  isMatchPassword() {
    return (c: FormControl) => {
      if (!c.parent || c.value === c.parent.value.password) {
        return null;
      }
      return { invalid: true };
    }
  }

}
