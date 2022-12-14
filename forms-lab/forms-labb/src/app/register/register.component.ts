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
